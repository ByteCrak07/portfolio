import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

async function getAccessToken() {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

  const urlencoded = new URLSearchParams();
  urlencoded.append('client_id', process.env.SPOTIFY_CLIENT_ID);
  urlencoded.append('client_secret', process.env.SPOTIFY_CLIENT_SECRET);
  urlencoded.append('grant_type', 'refresh_token');
  urlencoded.append('refresh_token', process.env.SPOTIFY_REFRESH_TOKEN);

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    next: { revalidate: 3600 },
  };

  try {
    const response = await fetch(
      'https://accounts.spotify.com/api/token',
      requestOptions
    );

    const data = await response.json();
    return data.access_token;
  } catch (err) {
    console.error(err);
    return null;
  }
}

async function getCurrentTrack(accessToken: string) {
  const myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${accessToken}}`);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    next: { revalidate: 0 },
  };

  try {
    const response = await fetch(
      'https://api.spotify.com/v1/me/player/currently-playing',
      requestOptions
    );

    const data = await response.json();
    return data;
  } catch (err) {
    return null;
  }
}

async function getLastPlayedTrack(accessToken: string) {
  const myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${accessToken}}`);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    next: { revalidate: 60 },
  };

  try {
    const response = await fetch(
      'https://api.spotify.com/v1/me/player/recently-played?limit=1',
      requestOptions
    );

    const data = await response.json();
    return data;
  } catch (err) {
    return null;
  }
}

export async function GET() {
  const accessToken = await getAccessToken();

  if (accessToken) {
    const track = await getCurrentTrack(accessToken);
    if (track)
      return NextResponse.json({
        name: track.item.name,
        artists: track.item.artists.map((artist: any) => {
          return { name: artist.name, href: artist.external_urls.spotify };
        }),
        href: track.item.external_urls.spotify,
        albumArt: track.item.album.images[0],
        currentlyPlaying: true,
      });

    const lastPlayedTrack = await getLastPlayedTrack(accessToken);
    if (lastPlayedTrack)
      return NextResponse.json({
        name: lastPlayedTrack.items[0].track.name,
        artists: lastPlayedTrack.items[0].track.artists.map((artist: any) => {
          return { name: artist.name, href: artist.external_urls.spotify };
        }),
        href: lastPlayedTrack.items[0].track.external_urls.spotify,
        albumArt: lastPlayedTrack.items[0].track.album.images[0],
        currentlyPlaying: false,
      });

    return NextResponse.json(
      { error: 'Error fetching track' },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { error: 'Error fetching access token' },
    { status: 500 }
  );
}

import { Metadata } from 'next';

const description = `Hey I'm Abil Savio, a Full Stack Web & Blockchain Developer from Kerala, India. Browse my portfolio, explore projects, read through the blog posts and tutorials.`;
const url = 'https://abilsavio.tech';

export const metadata: Metadata = {
  title: {
    default: 'Abil Savio | Full Stack Web & Blockchain Developer',
    template: '%s | Abil Savio',
  },
  description: description,
  metadataBase: new URL(url),
  keywords: [
    'Abil Savio',
    'ByteCrak07',
    'Abil',
    'Savio',
    'Developer',
    'Full Stack',
    'Web',
    'Blockchain',
    'Full Stack Developer',
    'Web Developer',
    'Blockchain Developer',
  ],
  openGraph: {
    url: url,
    siteName: 'Abil Savio',
    images: [
      {
        url: '/assets/screenshots/og-fb.png',
        width: 1200,
        height: 630,
      },
      {
        url: '/assets/screenshots/og-twitter.png',
        width: 1024,
        height: 512,
      },
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    siteId: '1392761130242691081',
    creator: '@AbilSavio',
    creatorId: '1392761130242691081',
    images: ['/assets/screenshots/og-twitter.png'],
  },
  manifest: '/manifest.json',
};

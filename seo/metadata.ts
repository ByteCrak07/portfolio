import { Metadata } from 'next';

const description = `Hey I'm Abil Savio, a Full Stack Web & Blockchain Developer from Kerala, India. I specialize in crafting seamless digital experiences. Through my portfolio, you can explore my projects, as well as my blog's informative posts and tutorials, and my accomplishments.`;
const url = 'https://abilsavio.me';

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
    // images: [
    //   {
    //     url: 'https://nextjs.org/og.png',
    //     width: 800,
    //     height: 600,
    //   },
    //   {
    //     url: 'https://nextjs.org/og-alt.png',
    //     width: 1800,
    //     height: 1600,
    //     alt: 'My custom alt',
    //   },
    // ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    siteId: '1392761130242691081',
    creator: '@AbilSavio',
    creatorId: '1392761130242691081',
    // images: ['https://nextjs.org/og.png'],
  },
  manifest: 'manifest.json',
};

import './globals.css';
import { Bitter } from 'next/font/google';
import { Toaster } from 'sonner';
import { appMetadata, jsonLdWebPage, jsonLdPerson } from '@/seo';
import { Analytics, ConsoleTxt, Footer, Header } from '@/components/app';

const bitterFont = Bitter({ subsets: ['latin'], display: 'swap' });

export const metadata = appMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/icons/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/icons/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/icons/favicon-16x16.png'
        />
        <link
          rel='mask-icon'
          href='/icons/safari-pinned-tab.svg'
          color='#5bbad5'
        />
        <link rel='shortcut icon' href='/icons/favicon.ico' />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
      </head>
      <body
        className={`${bitterFont.className} dark flex min-h-screen flex-col`}
      >
        <Toaster closeButton richColors position='bottom-right' theme='dark' />
        <Header />
        <main className='mt-[92px] flex flex-grow flex-col sm:mt-[148px]'>
          {children}
        </main>
        <Analytics />
        <ConsoleTxt />
        <Footer />
      </body>
    </html>
  );
}

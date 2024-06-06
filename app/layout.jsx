import { Inter } from 'next/font/google';
import '../styles/globals.css';
import { Providers } from './providers';
import NavComp from '../components/NavComp';
import Head from 'next/head';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

export const metadata = {
  title: 'Moroccan Camper Van',
  description: 'Moroccan Camper Van Rentals',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={`${inter.className} `}>
        <Providers>
          <main className="bg-[#ebebeb] flex flex-col items-center w-full h-full">
            <NavComp />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}

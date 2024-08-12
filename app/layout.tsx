/* eslint-disable no-undef */
import type { Metadata } from 'next';
import { Caveat } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/footer';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import NextTopLoader from 'nextjs-toploader';

const caveat = Caveat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CafesFeos',
  description: '¿Quieres una tacita de te cuchurrumin?',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={caveat.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader
            color="#2299DD"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={200}
            shadow="0 0 10px #2299DD,0 0 5px #2299DD"/>
          <NavBar/>
          {children}
          <Toaster/>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}

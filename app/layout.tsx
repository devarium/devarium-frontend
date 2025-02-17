import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/providers';
import type React from 'react'; // Added import for React
import Navigation from '@/components/navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Devarium',
  description: 'Developer Community Platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Providers>
          <Navigation />
          <main className="flex-1 h-screen pl-[16px] lg:pl-[60px] pr-[16px] py-[16px]">{children}</main>
        </Providers>
      </body>
    </html>
  );
}

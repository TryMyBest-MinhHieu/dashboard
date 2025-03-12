import type {Metadata} from 'next';
import {Open_Sans, Montserrat} from 'next/font/google';
import './globals.css';
import {cn} from '@/lib/utils';
import {HeaderClient} from '@/components/header';

const open_Sans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['vietnamese'],
  weight: ['300', '700'],
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['vietnamese'],
  weight: ['100', '700'],
});

export const metadata: Metadata = {
  title: 'dashboard',
  description: 'dashboard',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(`${open_Sans.variable} ${montserrat.variable}`)}>
        <HeaderClient />
        <main className="pt-[70px]">{children}</main>
      </body>
    </html>
  );
}

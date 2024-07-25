import { ReactLenis, useLenis } from './components/lenis'

import { Open_Sans, Roboto_Flex } from 'next/font/google'

const openSans = Open_Sans({ subsets: ['latin'], variable: '--open-sans' })
const robotoFlex = Roboto_Flex({ subsets: ['latin'], variable: '--roboto-flex', axes: ['GRAD', 'XOPQ', 'XTRA', 'YOPQ', 'YTAS', 'YTDE', 'YTFI', 'YTLC', 'YTUC', 'opsz', 'slnt', 'wdth'] })

import type { Metadata } from "next";

import "./globals.css";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${robotoFlex.variable}`}>
      <ReactLenis root options={{
        orientation: 'vertical',
      }}>
      {children}
      </ReactLenis>
        </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Providers from "../context/Provider";

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className='flex items-center p-2 justify-center lg:p-20 h-screen'>
          <Providers>
            {children}
          </Providers>
        </main>
      </body>
    </html>
  )
}

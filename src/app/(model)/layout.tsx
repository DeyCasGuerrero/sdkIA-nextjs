import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Nav } from "@/features/shared/index";
import Providers from "../context/Provider";

const inter = Inter({ subsets: ["latin"], weight: ["400"] });

export const metadata:Metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}
const urls = ["/", "/model", "/"];
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Providers>
          <Nav url={urls}></Nav>
          {children}
        </Providers>
      </body>
    </html>
  )
}

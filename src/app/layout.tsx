import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./components/providers";
import { switchThemeDuration } from "./constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Patient Flow Website",
  description: "Better Admission Notes in Less Time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en" suppressHydrationWarning>
    <head>
      <link rel='icon' href='/favicon.ico'/>
    </head>
    <body
      className={`${inter.className} bg-slate-50 dark:bg-[#0d1117] ${switchThemeDuration}`}
    >
      {/* Wrapping the children prop */}
      <Providers>{children}</Providers>
    </body>
  </html>
  );
}

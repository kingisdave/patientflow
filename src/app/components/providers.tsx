'use client'

import { ThemeProvider } from 'next-themes'
import Header from './navigations/Header'

export function Providers({ children } : {children: React.ReactNode}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <main className="dark:bg-slate-900 min-h-screen">
        <Header />
        {children}
      </main>
    </ThemeProvider>
)}
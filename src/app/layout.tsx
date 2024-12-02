import '@/styles/globals.css'

import type { Metadata } from 'next'
import { Nunito, Nunito_Sans } from 'next/font/google'

import { ThemeProvider } from '@/app/providers'
import { cn } from '@/lib/utils'

const fontSans = Nunito_Sans({ subsets: ['latin'], variable: '--font-sans' })
const fontTitle = Nunito({ subsets: ['latin'], variable: '--font-title' })

export const metadata: Metadata = {
  title: 'EasyResume',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
          fontTitle.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

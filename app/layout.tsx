import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ashwin ER - Portfolio',
  description: 'Full Stack Developer & AI/ML Engineer Portfolio',
  icons: {
    icon: [
      {
        url: '/icon?<generated>',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/apple-icon?<generated>',
        type: 'image/png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white dark:bg-dark-200 text-gray-900 dark:text-gray-100`}>
        {children}
      </body>
    </html>
  )
} 
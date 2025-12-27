import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Neil Israni - Portfolio',
  description: 'Portfolio website of Neil Israni',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}


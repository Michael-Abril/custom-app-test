import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Custom App Test',
  description: 'A custom app built with an AI coding tool, deployed via Varity',
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

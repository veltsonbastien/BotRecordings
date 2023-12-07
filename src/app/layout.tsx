import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bot Recording Viewer',
  description: 'Easily add bots to your meetings and view the recordings!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{background: "#000"}} className="flex justify-center">{children}</body>
    </html>
  )
}

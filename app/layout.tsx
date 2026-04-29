import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Vũ Hoàng Chung | Backend Java Developer',
  description: 'Frontend Java Developer specializing in Spring Boot and Microservices. Check out my projects and experience.',
  keywords: 'Java Developer, Spring Boot, Backend Development, Microservices, Web Development',
  author: 'Vũ Hoàng Chung',
  openGraph: {
    title: 'Vũ Hoàng Chung | Backend Java Developer',
    description: 'Explore my portfolio and projects built with Spring Boot and modern Java technologies.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vũ Hoàng Chung | Backend Java Developer',
    description: 'Backend Java Developer specializing in Spring Boot and Microservices.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className={`${_geist.className} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

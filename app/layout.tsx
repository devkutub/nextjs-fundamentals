import './globals.css'
import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google';
import localFont from "next/font/local";
import Navbar from './Navbar'
import { Suspense } from 'react'
import Loading from './loading'
import AuthProvider from './auth/Provider'
import GoogleAnalyticsScript from './GoogleAnalyticsScript'

const inter = Inter({ subsets: ['latin'] });

// next font
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"]
});

// local font
const poppinsLocal = localFont({
  src: '../public/fonts/Poppins-Regular.woff2',
  variable: '--font-poppins-k'
});

// used in search engine optimization, nextjs added it as metadata in header, we can overwrite it from each individual page
export const metadata: Metadata = {
  title: 'Home Page',
  description: 'Generated through create next app by Kutubuddin',
  openGraph: { // helps in social media sharing
    title: "...",
    description: "..."
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="valentine">
      <GoogleAnalyticsScript />
      <body className={poppinsLocal.variable}>
        {/* <body className={poppinsLocal.className}> */}
        {/* <body className={roboto.className}> */}
        {/* <body className={inter.className}> */}
        <AuthProvider>
          <Navbar />
          <main className='p-5'>
            <Suspense fallback={<Loading />}>
              {children}
            </Suspense>
          </main>
        </AuthProvider>
      </body>
    </html>
  )
}

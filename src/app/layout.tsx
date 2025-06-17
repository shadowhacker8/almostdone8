import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HappyDeel - Where Savings Make You Smile',
  description: 'Discover premium cameras and photography equipment at HappyDeel. Shop the latest DSLR, mirrorless, and compact cameras from top brands.',
  keywords: 'cameras, photography, electronics, deals, Canon, Sony, Nikon',
  authors: [{ name: 'HappyDeel' }],
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-820YBJWJCY"></script>
        <meta name="google-site-verification" content="AaZvdoPxNVlrSbx78E2laOij8rXcFQCV1Q5qC1tg_8E" />
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-820YBJWJCY');
          `
        }} />
        <script dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KVJK37ZS');
          `
        }} />
        <meta name="google-site-verification" content="oCXI466BWlTg4kjn-JVXo-d-nURbjjBxJfJgM4rMOuU" />
      </head>
      <body className={inter.className}>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KVJK37ZS"
            height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe>
        </noscript>
        {children}
      </body>
    </html>
  )
}
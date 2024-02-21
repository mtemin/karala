import type { Metadata } from 'next';
import { Ubuntu } from 'next/font/google';
import './globals.css';

import ReactQueryClientProvider from './_components/react-query-client-provider';
import ThemeProvider from './_components/theme-provider';

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ['300', '400', '500', '700'],
  variable: '--font-ubuntu'
})

const metadata: Metadata = {
  title: 'Karala',
  description: 'Notion clone',
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme:light)",
        url: "/karala.svg",
        href: "/karala.svg",
      },
      {
        media: "(prefers-color-scheme:dark)",
        url: "/karala-beyaz.svg",
        href: "/karala-beyaz.svg",
      }
    ]
  }
}


//Notion-clone-42 password

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <ReactQueryClientProvider>
      <ThemeProvider>
        <body className={ubuntu.className}>{children}</body>
      </ThemeProvider>
    </ReactQueryClientProvider>
  )
}

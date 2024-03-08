import type { Metadata } from 'next';
import { Ubuntu } from 'next/font/google';
import './globals.css';
import ReactQueryClientProvider from './_components/provider-react-query-client';
import ThemeProvider from './_components/provider-theme';

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


export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ReactQueryClientProvider>
        <body className={ubuntu.className}>{children}</body>
      </ReactQueryClientProvider>
    </ThemeProvider>
  )
}

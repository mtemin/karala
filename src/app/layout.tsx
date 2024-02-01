import type { Metadata } from 'next';
import { Inter, Ubuntu } from 'next/font/google';
import './globals.css';
import { QueryClientProvider, QueryClient, Hydrate } from 'react-query';
import { createClient } from '@supabase/supabase-js';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { notesAtom, searchAtom, currentTitleAtom, currentDescriptionAtom } from './_stateStore/atoms';

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
    <html data-theme="default" lang="en">
      <body className={ubuntu.className}>{children}</body>
    </html>
  )
}

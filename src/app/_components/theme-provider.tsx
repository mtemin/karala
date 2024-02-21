"use client"

import React from 'react'
import { useAtom } from 'jotai';
import { themeAtom } from '../_stateStore/atoms';


export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useAtom(themeAtom);
  return (
    <html data-theme={theme} lang="en">
      {children}
    </html>
  )
}

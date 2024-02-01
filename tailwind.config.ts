import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/(pages)/**/*.{js,ts,jsx,tsx,mdx}',
    './src/_components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/_components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "retro", {
      karala: {
        "primary": "#60a5fa",
        "secondary": "#7dd3fc",
        "accent": "#6ee7b7",
        "neutral": "#ffffff",
        "base-100": "#fef3c7",
        "info": "#fde68a",
        "success": "#4ade80",
        "warning": "#facc15",
        "error": "#fb7185",
      }
    }]
  }

}
export default config

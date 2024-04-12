import type { Metadata, ResolvingMetadata } from 'next'
import LandingPage from './_components/LandingPage';
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
export default function Home() {

    return (
        <>
            <LandingPage />
        </>
    )
}

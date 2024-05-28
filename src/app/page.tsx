import type { Metadata, ResolvingMetadata } from 'next'
import LandingPage from './_components/LandingPage';
import Head from "next/head";
const metadata: Metadata = {
    title: 'Karala',
    description: 'Notion clone',
    icons: {
        icon: [
            {
                rel:'icon',
                type:'image/svg',
                media: "(prefers-color-scheme:light)",
                url: "/karala.svg?v=1",
                href: "/karala.svg?v=1",
            },
            {
                rel:'icon',
                type:'image/svg',
                media: "(prefers-color-scheme:dark)",
                url: "/karala-beyaz.svg?v=1",
                href: "/karala-beyaz.svg?v=1",
            }
        ]
    }
}
export default function Page() {

    return (
        <>

        </>
    )
}

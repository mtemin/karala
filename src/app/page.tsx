import { useEffect } from 'react';
import LandingPage from './_components/landing-page';
import { createClient } from '@supabase/supabase-js';
import { useAtom } from 'jotai';
import { noteListAtom, searchAtom, currentTitleAtom, currentDescriptionAtom } from './_stateStore/atoms';


export default async function Home() {

    return (
        <>
            <LandingPage />
        </>
    )
}

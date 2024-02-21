import React from 'react';
import UserMenu from "@/app/_components/usermenu";
import Note from "@/app/_components/note";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import ContentBlockModal from "@/app/_components/content-block-modal";
import { supabase } from '@/app/lib/supabase';
import { useQuery } from '@tanstack/react-query';
import { noteListAtom } from '@/app/_stateStore/atoms';
import { useAtom } from 'jotai';

export default async function Dashboard() {

    let isLoggedIn = true;


    return (
        <div className="flex h-full justify-between">
            {!isLoggedIn
                && <ContentBlockModal></ContentBlockModal>
                // : null
            }
            <UserMenu></UserMenu>
            <Note></Note>
        </div>
    );
}

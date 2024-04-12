import React from 'react';
import UserMenu from "@/app/_components/UserMenu";
import NoteInputs from "@/app/_components/NoteInputs";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import ContentBlockModal from "@/app/_components/ContentBlockModal";
import { useQuery } from '@tanstack/react-query';
import { useAuthQuery } from '@/app/_hooks/useAuthQuery';
import Alert from '@/app/_components/Alert';

export default async function Dashboard() {
    const { isAuthenticated } = getKindeServerSession();
    const isLoggedIn = await isAuthenticated();

    return (
        <div className="flex h-full justify-between">
            <Alert type="success" text="Note created successfully" />
            <Alert type="error" text="Process failed!" />
            <Alert type="info" text="Note updated" />
            {!isLoggedIn
                && <ContentBlockModal></ContentBlockModal>
            }
            <UserMenu></UserMenu>
            <NoteInputs></NoteInputs>
        </div>
    );
}

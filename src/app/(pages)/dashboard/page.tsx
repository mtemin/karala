import React from 'react';
import UserMenu from "@/app/_components/UserMenu";
import NoteEditInputs from "@/app/_components/NoteEditInputs";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import ContentBlockModal from "@/app/_components/ContentBlockModal";
import Notification from '@/app/_components/Notification';

export default async function Dashboard() {
    const { isAuthenticated } = getKindeServerSession();
    const isLoggedIn = await isAuthenticated();

    return (
        <div className="flex h-full justify-between">
            <Notification type="success" />
            <Notification type="error" />
            <Notification type="info" />
            {!isLoggedIn
                && <ContentBlockModal></ContentBlockModal>
            }
            <UserMenu></UserMenu>
            <NoteEditInputs></NoteEditInputs>
        </div>
    );
}

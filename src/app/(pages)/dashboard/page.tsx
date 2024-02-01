
import React from 'react';
import UserMenu from "@/app/_components/usermenu";
import Document from "@/app/_components/note";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import ContentBlockModal from "@/app/_components/content-block-modal";

export default async function Dashboard() {
    const { isAuthenticated, getUser } = getKindeServerSession();
    const isLoggedIn: boolean = await isAuthenticated();
    const user = await getUser();


    return (
        <div className="flex h-full justify-between">
            {!isLoggedIn
                && <ContentBlockModal></ContentBlockModal>
                // : null
            }
            <UserMenu></UserMenu>
            <Document></Document>
        </div>
    );
}

import { LogoutLink, getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import UserName from "@/app/_components/UserName";
import AddNewNote from "@/app/_components/AddNewNote";
import ThemeController from "./ThemeController";
import NoteList from "./NoteList";
import SearchNote from "./SearchNote";
import ToggleSidebar from "./ToggleSidebar";
import Settings from "./Settings";
import { supabase } from "../_lib/supabase";
import Link from "next/link";
import Archive from "./Archive";
import {KindeUser} from "@kinde-oss/kinde-auth-nextjs/types";

export default async function UserMenu() {
    const { getUser } = getKindeServerSession();
    let user:KindeUser = await getUser();


    return (
        <aside id="usermenu" className="z-10 relative h-full bg-base-200 flex flex-col w-1/5 border-r-4 px-5 py-10 border-[--foreground] transition-all duration-500
        max-sm:fixed max-sm:w-[95%] max-lg:w-1/3">
            <ToggleSidebar />
            <div id="user-panel" className="">
                <div className="flex justify-between text-xl font-bold mb-6 ">
                    {// @ts-ignore}
                        <UserName user={user} />
                    }
                </div>
                {/* <SearchNote /> */}
                <Settings />
                {/* <Archive /> */}
                <AddNewNote userId={user?.id} />
            </div>
            {user &&
                <NoteList user={user} />
            }
            <div id="notes" className="">
            </div>
            <div className="mt-auto">
                <Link href="/">
                    <button className="btn btn-outline mb-3 w-full">Go to landing page</button>
                </Link>
                {user
                    ? <LogoutLink
                        className="btn btn-primary col-span-1 text-md cursor-pointer w-full">
                        Log out
                    </LogoutLink>
                    : <div className="skeleton mb-1 rounded w-full h-10"></div>

                }
            </div>
        </aside>
    )
}

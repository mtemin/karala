import { LogoutLink, getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Username from "@/app/_components/username";
import AddNewNote from "@/app/_components/add-new-note";
import ThemeController from "./theme-controller";
import NoteList from "./note-list";
import SearchNote from "./search-note";
import ToggleSidebar from "./toggle-sidebar";
import Settings from "./settings";
import { supabase } from "../lib/supabase";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";

export default async function UserMenu() {
    const { getUser } = getKindeServerSession();
    let user = await getUser();
    // async function handlePostUser(user: KindeUser) {
    //     await supabase
    //         .from('users')
    //         .insert({ name: user.given_name, surname: user.family_name, picture: user.picture, email: user.email, id: user.id })
    //         .then(result => result.status === 201
    //             ? console.log("Yeni kullanıcı veritabanına kaydedildi")
    //             : console.log("Kullanıcı veritabanına kaydında HATA!")
    //         );
    // }
    // if (user) {
    //     console.log(user)
    //     handlePostUser(user);
    // }

    return (
        <aside id="usermenu" className="z-10 relative h-full bg-base-200 flex flex-col w-1/5 border-r-4 px-5 py-10 border-[--foreground] transition-all duration-500
        max-sm:fixed max-sm:w-[95%] max-lg:w-1/3">
            <ToggleSidebar />
            <div id="user-panel" className="">
                <div className="flex justify-between text-xl font-bold mb-6 ">
                    {// @ts-ignore}
                        <Username user={user} />
                    }
                </div>
                <SearchNote />
                <Settings />
                <AddNewNote userId={user?.id} />
            </div>
            {user &&
                <NoteList user={user} />
            }
            <div id="notes" className="">
                {/* <p id="note-groups"
                    className="font-bold text-xl flex mb-2 items-center cursor-pointer hover:opacity-80 truncate">
                    <span className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            className="w-5 h-5">
                            <path fillRule="evenodd"
                                d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                                clipRule="evenodd" />
                        </svg>
                    </span>Note groups
                </p>
                <div className="note-group font-medium flex mb-1 items-center cursor-pointer hover:opacity-80">
                    <span className="icon rotate-90">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            className="w-5 h-5">
                            <path fillRule="evenodd"
                                d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                                clipRule="evenodd" />
                        </svg>
                    </span>
                    Note group 1
                </div> */}
            </div>
            <div className="mt-auto">
                <ThemeController />
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
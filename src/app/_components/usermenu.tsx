import themes from "daisyui/src/theming/themes";
import Username from "@/app/_components/username";
import PageIcon from "@/app/_components/page-icon";
import { createClient } from '@supabase/supabase-js'
import { cookies } from 'next/headers';
import React, { useEffect, useState } from 'react'
import { LogoutLink, getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import AddNewNote from "@/app/_components/add-new-note";
import CounterObserver from "./counter";
// import SearchNote from "./search-note";
import { atom, useAtom } from "jotai";
import { useHydrateAtoms } from "jotai/utils";
import { searchAtom } from "../_stateStore/atoms";
import ThemeController from "./theme-controller";
import { useQuery } from "react-query";
import NoteList from "./note-list";
// import NoteList from "./note-list";

export default async function UserMenu() {
    const { getUser } = getKindeServerSession();
    let user = await getUser();

    return (
        <aside className="flex flex-col w-1/5 border-r-4 px-5 py-10 border-[--foreground]">
            <div id="user-panel" className="">
                <div className="flex justify-between text-2xl font-bold mb-6 ">
                    {// @ts-ignore}
                        <Username username={user?.given_name} />
                    }
                    <span className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-2">
                            <path fillRule="evenodd"
                                d="M12 5.25c1.213 0 2.415.046 3.605.135a3.256 3.256 0 0 1 3.01 3.01c.044.583.077 1.17.1 1.759L17.03 8.47a.75.75 0 1 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 0 0-1.06-1.06l-1.752 1.751c-.023-.65-.06-1.296-.108-1.939a4.756 4.756 0 0 0-4.392-4.392 49.422 49.422 0 0 0-7.436 0A4.756 4.756 0 0 0 3.89 8.282c-.017.224-.033.447-.046.672a.75.75 0 1 0 1.497.092c.013-.217.028-.434.044-.651a3.256 3.256 0 0 1 3.01-3.01c1.19-.09 2.392-.135 3.605-.135Zm-6.97 6.22a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.752-1.751c.023.65.06 1.296.108 1.939a4.756 4.756 0 0 0 4.392 4.392 49.413 49.413 0 0 0 7.436 0 4.756 4.756 0 0 0 4.392-4.392c.017-.223.032-.447.046-.672a.75.75 0 0 0-1.497-.092c-.013.217-.028.434-.044.651a3.256 3.256 0 0 1-3.01 3.01 47.953 47.953 0 0 1-7.21 0 3.256 3.256 0 0 1-3.01-3.01 47.759 47.759 0 0 1-.1-1.759L6.97 15.53a.75.75 0 0 0 1.06-1.06l-3-3Z"
                                clipRule="evenodd" />
                        </svg>
                    </span>
                </div>
                {/* <SearchNote></SearchNote> */}
                <div className="search mb-3 flex items-center">
                    <label htmlFor="searchNotes" className="absolute py-1 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                            stroke="currentColor" className="w-5 h-5 ml-2 relative">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </label>
                    <input
                        placeholder="Search in notes..."
                        className="resize-none h-8 w-6 rounded-full px-2 py-1 pl-8 text-sm bg-base-300 transition-all duration-200 hover:w-full hover:rounded focus:rounded focus:w-full"
                        name="search"
                        id="searchNotes"
                    // onChange={searchHandler}
                    >

                    </input>

                </div>
            </div>

            <NoteList ></NoteList>
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
                {/* {data?.map((note: Note) =>
                    <div
                        key={note.domId}
                        className="note mb-1 flex items-center cursor-pointer hover:opacity-80"
                    // onClick={()=> {
                    //     // burada note componentinin title ve description state ini güncelle
                    //
                    // }}
                    >
                        <span className="icon mr-1">
                            <PageIcon />
                        </span>
                        <p>{note.title}</p>
                    </div>
                )} */}
                <AddNewNote
                />
            </div>

            <div className="mt-auto">
                <ThemeController></ThemeController>
                <LogoutLink
                    className="btn btn-primary col-span-1 text-md cursor-pointer w-full">
                    Log out
                </LogoutLink>
            </div>
        </aside>
    )
}
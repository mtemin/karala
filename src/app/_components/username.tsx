"use client"
import React, { useState } from 'react';
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import CounterObserver from './counter';

type Props = {
    username: string
}
function Username({ username }: Props) {
    // if (!username) return <div className="skeleton mb-1 rounded w-full h-6"></div>
    return (
        <div className="user flex truncate">
            <p className="truncate">
                {username
                    ? username
                    : "Lorem Ipsum"}

            </p>
            <p className='max-lg:hidden max-sm:inline'>
                &apos;s &nbsp;Notes
            </p>
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-auto">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
            </svg> */}

        </div>
    );
}

export default Username;

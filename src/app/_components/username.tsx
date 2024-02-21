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
            &apos;s &nbsp;Notes
        </div>
    );
}

export default Username;

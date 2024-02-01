"use client"
import React, { useState } from 'react';
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import CounterObserver from './counter';

type Props = {
    username: string
}
function Username({ username }: Props) {
    return (
        <div className="user flex truncate">
            <p className="truncate">
                {username}
                &apos;s
            </p>
            &nbsp;Notes
        </div>
    );
}

export default Username;

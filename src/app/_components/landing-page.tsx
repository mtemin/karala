import React from 'react';
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from 'next/link';
// import store from '../_stateStore/store';

export default async function LandingPage() {
  const { isAuthenticated } = getKindeServerSession();
  const { getUser } = getKindeServerSession();
  const isLoggedIn: boolean = await isAuthenticated();
  const user = await getUser();
  return (
    <>
      <div className="fixed w-full bg-base-300">
        <div className="max-w-screen-2xl flex justify-between items-center mx-auto">
          <div className="w-full flex items-center justify-between">
            <Link href="/">
              <img src="/karala-beyaz.svg" alt="karala logo" className="w-8 h-8 ml-5" />
            </Link>
            <div className="flex items-center">
              {isLoggedIn
                ? <>
                  <p className="text-xl">
                    Welcome <span className="font-medium text-primary">{user?.given_name}</span> !
                  </p>
                  <LogoutLink
                    className="whitespace-nowrap ml-24 mr-3 text-xl cursor-pointer text-base-content hover:text-neutral-50 py-1 px-4 ">Log
                    out</LogoutLink>
                </>
                : <LoginLink className="whitespace-nowrap mr-3 text-xl cursor-pointer text-base-content hover:text-neutral-50 py-1 px-4 " >Log in</LoginLink>
              }
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl h-full mx-auto">
        <div className="flex flex-col justify-center items-center h-full w-full mx-auto">

          <h1 className="text-5xl font-bold mb-5 text-center">
            An app to unify all of your ideas, documents, plans.
            <br />
            Welcome to <span className="font-brooklyn text-8xl">Karala</span>
          </h1>
          {/* <p className="text-xl">
            Store your notes...
          </p> */}
          {isLoggedIn
            ?
            <>
              <Link
                className="btn btn-outline px-6 py-2 rounded mt-6 "
                href="/dashboard">Go to your dashboard</Link>
            </>
            :
            <RegisterLink
              className="bg-primary text-base-100 px-6 py-2 rounded mt-6 text-xl font-medium">
              Join Karala
            </RegisterLink>
          }
        </div>
      </div>
      <div className="flex justify-between px-10 items-center fixed bg-zinc-900 w-full bottom-0">
        <p className="cursor-pointer py-1 hover:text-gray-200">
          Privacy Policy
        </p>
        <p className="cursor-pointer py-1 hover:text-gray-200">
          Terms&Conditions
        </p>
      </div>
    </>
  )
}

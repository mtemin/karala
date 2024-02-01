import {LoginLink, RegisterLink} from "@kinde-oss/kinde-auth-nextjs/components";
import React from "react";
import Link from "next/link";


function ContentBlockModal() {
    return (
        <>
            <div className="absolute w-full h-full bg-zinc-900 opacity-70 backdrop-blur-2xl">
            </div>
            <div style={{transform: "translate(-50%)"}}
                 className="flex flex-col justify-center items-center absolute px-24 py-12 bg-base-100 top-1/3 left-1/2 rounded-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                     className="w-14 h-14 mb-5 text-error">
                    <path fillRule="evenodd"
                          d="m6.72 5.66 11.62 11.62A8.25 8.25 0 0 0 6.72 5.66Zm10.56 12.68L5.66 6.72a8.25 8.25 0 0 0 11.62 11.62ZM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788Z"
                          clipRule="evenodd"/>
                </svg>

                <p className="text-center font-medium text-2xl mb-6">
                    You must be logged in to see this page.
                </p>

                <div className="flex justify-between items-center">
                    <div className="mb-6">
                        <LoginLink className="mr-2 bg-primary text-base-100 rounded px-10 py-3">
                            Login
                        </LoginLink>
                        <RegisterLink className="ml-2 bg-accent text-base-100 rounded px-10 py-3">
                            Register
                        </RegisterLink>
                    </div>
                </div>
                <Link href="/"
                   className="btn btn-outline w-full justify-self-start transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                         className="w-6 h-6">
                        <path fillRule="evenodd"
                              d="M9.53 2.47a.75.75 0 0 1 0 1.06L4.81 8.25H15a6.75 6.75 0 0 1 0 13.5h-3a.75.75 0 0 1 0-1.5h3a5.25 5.25 0 1 0 0-10.5H4.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z"
                              clipRule="evenodd"/>
                    </svg>
                    Go back to homepage
                </Link>

            </div>
        </>
    );
}

export default ContentBlockModal;

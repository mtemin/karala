import CheckIcon from '@/app/_components/i-check'
import React from 'react'

export default function RegisterSuccess() {
  return (
    <>
      <div className="z-1000 absolute w-full h-full bg-zinc-900 opacity-70  px-72 py-56">
      </div>
      <div style={{ transform: "translate(-50%)" }}
        className="flex flex-col justify-center items-center absolute px-24 py-12 bg-base-100 top-1/3 left-1/2 rounded-2xl">

        <CheckIcon className="w-20 h-20 text-success" />

        <p className="text-center font-medium text-2xl mb-12">
          Succesfuly registered. Now redirecting to your dashboard.
        </p>
        <span className="loading loading-spinner loading-lg"></span>
        <div className="flex justify-between items-center">
          <div className="mb-6">

          </div>
        </div>
        <a href="/"
          className="btn btn-outline w-full justify-self-start transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
            className="w-6 h-6">
            <path fillRule="evenodd"
              d="M9.53 2.47a.75.75 0 0 1 0 1.06L4.81 8.25H15a6.75 6.75 0 0 1 0 13.5h-3a.75.75 0 0 1 0-1.5h3a5.25 5.25 0 1 0 0-10.5H4.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z"
              clipRule="evenodd" />
          </svg>
          Go back to homepage
        </a>

      </div>
    </>
  )
}

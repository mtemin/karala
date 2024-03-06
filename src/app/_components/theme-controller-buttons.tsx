"use client"

import { useAtom } from "jotai/react";
import { themeAtom } from "../_stateStore/atoms";

export default function ThemeControllerButtons() {
  const [theme, setTheme] = useAtom(themeAtom);
  return (
    <div className="themes">
      <p className='text-base-content font-medium mb-5'>Theme : </p>
      <div className="cursor-pointer flex py-2 px-4 bg-base-500 rounded-btn mb-3"
        data-theme="dark"
        data-set-theme="dark"
        onClick={(event) => setTheme((event.target as HTMLInputElement).textContent)}>
        dark
        <span className="flex ml-auto">
          {/* <span className="bg-base-900 badge w-2 rounded-btn border-[1px] ml-1"></span> */}
          <span className="bg-base-content badge w-2 rounded-btn border-[1px] ml-1"></span>
          <span className="bg-primary badge w-2 rounded-btn border-[1px] ml-1"></span>
          <span className="bg-secondary badge w-2 rounded-btn border-[1px] ml-1"></span>
        </span>
      </div>
      <div className="cursor-pointer flex py-2 px-4 bg-base-500 rounded-btn mb-3"
        data-theme="light"
        data-set-theme="light"
        onClick={(event) => setTheme((event.target as HTMLInputElement).textContent)}>
        light
        <span className="flex ml-auto">
          {/* <span className="bg-base-900 badge w-2 rounded-btn border-[1px] ml-1"></span> */}
          <span className="bg-base-content badge w-2 rounded-btn border-[1px] ml-1"></span>
          <span className="bg-primary badge w-2 rounded-btn border-[1px] ml-1"></span>
          <span className="bg-secondary badge w-2 rounded-btn border-[1px] ml-1"></span>
        </span>
      </div>
      <div className="cursor-pointer flex py-2 px-4 bg-base-500 rounded-btn mb-3"
        data-theme="retro"
        data-set-theme="retro"
        onClick={(event) => setTheme((event.target as HTMLInputElement).textContent)}>
        retro
        <span className="flex ml-auto">
          {/* <span className="bg-base-900 badge w-2 rounded-btn border-[1px] ml-1"></span> */}
          <span className="bg-base-content badge w-2 rounded-btn border-[1px] ml-1"></span>
          <span className="bg-primary badge w-2 rounded-btn border-[1px] ml-1"></span>
          <span className="bg-secondary badge w-2 rounded-btn border-[1px] ml-1"></span>
        </span>
      </div>
      <div className="cursor-pointer flex py-2 px-4 bg-base-500 rounded-btn mb-3"
        data-theme="karala"
        data-set-theme="karala"
        onClick={(event) => setTheme((event.target as HTMLInputElement).textContent)}>
        karala
        <span className="flex ml-auto">
          {/* <span className="bg-base-900 badge w-2 rounded-btn border-[1px] ml-1"></span> */}
          <span className="bg-base-content badge w-2 rounded-btn border-[1px] ml-1"></span>
          <span className="bg-primary badge w-2 rounded-btn border-[1px] ml-1"></span>
          <span className="bg-secondary badge w-2 rounded-btn border-[1px] ml-1"></span>
        </span>
      </div>
      <div className="cursor-pointer flex py-2 px-4 bg-base-500 rounded-btn mb-3"
        data-theme="corporate"
        data-set-theme="corporate"
        onClick={(event) => setTheme((event.target as HTMLInputElement).textContent)}>
        corporate

        <span className="flex ml-auto">
          {/* <span className="bg-base-900 badge w-2 rounded-btn border-[1px] ml-1"></span> */}
          <span className="bg-base-content badge w-2 rounded-btn border-[1px] ml-1"></span>
          <span className="bg-primary badge w-2 rounded-btn border-[1px] ml-1"></span>
          <span className="bg-secondary badge w-2 rounded-btn border-[1px] ml-1"></span>
        </span>
      </div>
      <div className="cursor-pointer flex py-2 px-4 bg-base-500 rounded-btn mt-5"
        data-theme="default"
        data-set-theme="default"
        onClick={(event) => setTheme((event.target as HTMLInputElement).textContent)}>
        default
        <span className="flex ml-auto">
          {/* <span className="bg-base-900 badge w-2 rounded-btn border-[1px] ml-1"></span> */}
          <span className="bg-base-content badge w-2 rounded-btn border-[1px] ml-1"></span>
          <span className="bg-primary badge w-2 rounded-btn border-[1px] ml-1"></span>
          <span className="bg-secondary badge w-2 rounded-btn border-[1px] ml-1"></span>
        </span>
      </div>
    </div>
  )
}

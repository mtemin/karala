"use client"
import React from 'react'
import { searchAtom } from "../_stateStore/atoms";
import { useAtom } from "jotai";

export default function SearchNote() {
  const [search, setSearch] = useAtom(searchAtom);

  function searchHandler(event: any) {
    let lowercasedSearch = event.target.value.toLowerCase();
    setSearch(lowercasedSearch)
  }
  console.log(search)

  return (
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
        value={search}
        onChange={searchHandler}>

      </input>

    </div>
  )
}

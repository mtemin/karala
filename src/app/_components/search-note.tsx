"use client"
import React from 'react'
import { searchAtom } from "../_stateStore/atoms";
import { useAtom } from "jotai";
import SearchIcon from './i-search';

export default function SearchNote() {
  const [search, setSearch] = useAtom(searchAtom);

  function searchHandler(event: any) {
    let lowercasedSearch = event.target.value.toLowerCase();
    // setSearch(lowercasedSearch)
    console.log(lowercasedSearch)
  }

  return (
    <div className="z-10 search mb-3 flex items-center">
      <label
        htmlFor="searchNotes" className="absolute p-1 cursor-pointer bg-base-300 rounded-full">
        <SearchIcon className='w-5 h-5 relative' />
      </label>
      <input
        placeholder="Search in notes..."
        className="resize-none h-8 w-5 rounded-full py-1 pl-8 text-sm bg-base-300 transition-all duration-500 hover:w-full focus:w-full focus-"
        name="search"
        id="searchNotes"
        onChange={searchHandler}
      >
      </input>

    </div>
  )
}

"use client";
import React, { useEffect } from 'react';
import PageIcon from './page-icon';
import AddNewNote from './add-new-note';
import { createClient } from '@supabase/supabase-js';
import { useAtom } from 'jotai';
import { currentDescriptionAtom, currentTitleAtom, currentNoteAtom, notesAtom, searchAtom } from '../_stateStore/atoms';
import TrashIcon from './trash-icon';

export default function NoteList() {
  const [notes, setNotes] = useAtom(notesAtom);
  const [search, setSearch] = useAtom(searchAtom);
  const [currentTitle, setCurrentTitle] = useAtom(currentTitleAtom)
  const [currentDescription, setCurrentDescription] = useAtom(currentDescriptionAtom)
  // const [currentNote, setCurrentNote] = useAtom(currentNoteAtom);
  // console.log(currentNote)
  const supabase = createClient(
    // @ts-ignore
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY, {
    auth: { persistSession: false },
  }
  );

  useEffect(() => {
    supabase
      .from("notes")
      .select('*')
      .then(result => {
        let data: Note[] | null = result.data;
        //@ts-ignore
        setNotes(...notes, data)
        // const filteredNotes = notes;
      });
  }
    , [])
  function filteredNotes() {
    return notes.filter((note) => {
      if (search === "") {
        return note;
      } else {
        if (note) {
          //@ts-ignore
          return note.title.toLowerCase().includes(search)
        }
      }
    })
  }

  // function deleteNote(){
  //   if(user.id)
  // }


  if (!notes) return (
    <div className='flex flex-col items-center'>
      <div className="skeleton mb-1 rounded w-full h-6"></div>
      <div className="skeleton mb-1 rounded w-full h-6"></div>
      <div className="skeleton mb-1 rounded w-full h-6"></div>
      <div className="skeleton mb-1 rounded w-full h-6"></div>
      <div className="skeleton mb-1 rounded w-full h-6"></div>
      <div className="skeleton mb-1 rounded w-full h-6"></div>
      <div className="skeleton mb-1 rounded w-full h-6"></div>
      <div className="skeleton mb-1 rounded w-full h-6"></div>
    </div>
  )

  return (
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
      {//@ts-ignore
        notes?.map((note: Note) =>
          // filteredNotes?.map((note: Note) =>
          <div
            key={note.domId}
            className="note mb-1 flex items-center cursor-pointer hover:opacity-80"
            onClick={(event) => {
              // burada note componentinin title ve description state ini güncelle

            }}
          >
            <span className="icon mr-1">
              <PageIcon />
            </span>
            <p className='truncate'>{note.title}</p>
            <TrashIcon
            // deleteNote={deleteNote} 
            />
          </div>
        )}
    </div>
  )
}

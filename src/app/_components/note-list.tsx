"use client";
import React, { useEffect } from 'react';
import PageIcon from './i-blank-page';
import AddNewNote from './add-new-note';
import { createClient } from '@supabase/supabase-js';
import { useAtom, PrimitiveAtom } from 'jotai';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
// import { getNotes, addNote, updateNote } from '../api/notesApi';
import { currentDescriptionAtom, currentTitleAtom, noteListAtom, searchAtom, onlineAtom, currentNoteIdAtom } from '../_stateStore/atoms';
import DeleteNote from './delete-note';
import { supabase } from '../lib/supabase';
import useNoteQuery from '../hooks/useNoteQuery';
import { addNotesMutation } from '../hooks/useUpdateNotesMutation';
import { queryClient } from './react-query-client-provider';

// import { handleInserts } from '../lib/supabase'

export const revalidate = 0


export default function NoteList() {
  const [currentTitle, setCurrentTitle] = useAtom(currentTitleAtom)
  const [currentDescription, setCurrentDescription] = useAtom(currentDescriptionAtom)
  const [currentNoteId, setCurrentNoteId] = useAtom(currentNoteIdAtom);
  const [online, setOnline] = useAtom(onlineAtom);


  const [noteList, setNoteList] = useAtom<Note[]>(noteListAtom);
  const [search, setSearch] = useAtom<string>(searchAtom);
  const { data, isLoading, isError } = useNoteQuery();

  // Create a function to handle inserts
  const handleDbUpdate = (payload: any) => {
    queryClient.invalidateQueries({ queryKey: ['notes'] });
  }

  // Listen to inserts
  supabase
    .channel('notes')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'notes' }, handleDbUpdate)
    .subscribe(
  );





  if (isLoading) return (
    <div className='flex flex-col items-center'>
      <div className="skeleton mb-1 rounded w-full h-[40vh]"></div>
      {/* <div className="skeleton mb-1 rounded w-full h-6"></div>
      <div className="skeleton mb-1 rounded w-full h-6"></div>
      <div className="skeleton mb-1 rounded w-full h-6"></div>
      <div className="skeleton mb-1 rounded w-full h-6"></div>
      <div className="skeleton mb-1 rounded w-full h-6"></div>
    <div className="skeleton mb-1 rounded w-full h-6"></div> */}
    </div>
  )


  return (
    <div id="notes"
      className="max-h-[40vh] h-[40vh] overflow-scroll"
    >
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
      {
        data?.map((note: Note) =>
          // filteredNotes?.map((note: Note) =>
          <div
            key={note.domId}
            className="note mb-1 grid grid-cols-8 gap-1 items-center cursor-pointer"
            id={`note-${note.domId}`}
            onClick={() => {
              if (note.description && note.title) {
                setCurrentTitle(note.title);
                setCurrentDescription(note.description);
                setCurrentNoteId(note.domId);
              }

            }}
          >
            <div className='flex justify-start items-center  col-span-7 hover:opacity-80'>
              <span className="col-span-1 mr-2 icon">
                <PageIcon />
              </span>
              <p className='col-span-6 ml-[-0.3rem] truncate'>{note.title}</p>
            </div>
            <DeleteNote
              className='col-span-1 min-w-4 min-h-4 w-4 h-4 ml-auto opacity-60  hover:opactiy-100 hover:text-error'
              id={note.id} />
          </div>
        )}
    </div>
  )
}

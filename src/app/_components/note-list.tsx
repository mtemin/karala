"use client"
import PageIcon from './icons/i-blank-page';
import { useAtom } from 'jotai';
import { currentDescriptionAtom, currentTitleAtom, currentNoteIdAtom, archiveModalAtom, searchAtom, noteListAtom } from '../_stateStore/atoms';
import DeleteNote from './DeleteNote';
import { supabase } from '../_lib/supabase';
import { queryClient } from './provider-react-query-client';
import useNoteQuery from '../_hooks/useNoteQuery';
import { KindeUser } from '@kinde-oss/kinde-auth-nextjs/dist/types';

export default function NoteList({ user }: { user: KindeUser }) {
  const { data: noteData, isLoading: isNotesLoading, isError: isNotesError } = useNoteQuery(user.id);
  const [currentNoteTitle, setCurrentNoteTitle] = useAtom(currentTitleAtom);
  const [currentNoteDescription, setCurrentNoteDescription] = useAtom(currentDescriptionAtom);
  const [currentNoteId, setCurrentNoteId] = useAtom(currentNoteIdAtom);

  const handleDbUpdate = () => {
    queryClient.invalidateQueries({ queryKey: ['notes'] });
  }

  supabase
    .channel('notes')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'notes' }, handleDbUpdate)
    .subscribe();

  if (isNotesLoading) return (
    <div className='flex flex-col items-center'>
      <div className="skeleton mb-1 rounded w-full h-[40vh]"></div>
    </div>
  )
  if (isNotesError) return (
    <div className='flex flex-col items-center'>
      <div className="mb-1 rounded w-full h-[40vh] bg-error bg-opacity-20 px-5 py-2">
        <p className='text-base-content text-2xl text-justify'>
          Notes couldn't be loaded.
          <br />
          Try refreshing the page.
        </p>
      </div>
    </div>
  )
  return (
    <div id="notes"
      className="max-h-[40vh] h-[40vh] w-full overflow-y-scroll overflow-x-hidden"
    >
      {
        noteData?.map((note: Note) =>
          <div
            key={note.domId}
            className="note mb-1 grid grid-cols-8 gap-0 items-center cursor-pointer"
            id={`note-${note.domId}`}
          >
            <div className='flex justify-start items-center col-span-7 transition-all duration-200 px-1 hover:pl-2'
              onClick={() => {
                if (note.description && note.title) {
                  setCurrentNoteTitle(note.title);
                  setCurrentNoteDescription(note.description);
                  setCurrentNoteId(note.domId);
                }
              }}>
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

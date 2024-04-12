"use client"
import PageIcon from './icons/i-blank-page';
import { useAtom } from 'jotai';
import { archiveModalAtom } from '../_stateStore/atoms';
import { supabase } from '../_lib/supabase';
import { queryClient } from './provider-react-query-client';
import useNoteQuery from '../_hooks/useNoteQuery';
import RestoreIcon from './icons/i-restore';
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import useUserQuery from '../_hooks/useUserQuery';
import useSupabase from '../_hooks/useSupabase';

export default function ArchivedNoteList() {


  const handleDbUpdate = () => {
    queryClient.invalidateQueries({ queryKey: ['notes'] });
  }
  // Listen to inserts
  supabase
    .channel('notes')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'notes' }, handleDbUpdate)
    .subscribe();

  const [archiveModal, setArchiveModal] = useAtom(archiveModalAtom);

  // const { data: noteData, isLoading: isNotesLoading, isError: isNotesError } = useNoteQuery("kp_db3a18d1304046e99749532f678c0095");

  return (
    <>
      {/* {noteData?.map((note: Note) =>
        <div key={note.id} className="archived-note flex justify-between items-center bg-base-100 py-1 px-2 rounded mb-2">
          <p className="font-medium mr-4">
            {note.title}
          </p>
          <p className="max-w-64 opacity-40 truncate mr-auto ">
            {note.description}
          </p>
          <div className="icons flex items-center">

            <RestoreIcon className='w-5 h-5 mr-3 cursor-pointer hover:text-success rounded transition-all duration-300 p-[0.1rem]' />
            <DeleteNote
              className='cursor-pointer min-w-4 min-h-4 w-4 h-4 ml-auto opacity-60 hover:opactiy-100 hover:text-error'
              id={note.id}
            />
          </div>

        </div>
      )} */}
    </>
  )
}

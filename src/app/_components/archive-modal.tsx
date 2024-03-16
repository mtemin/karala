"use client"
import { useAtom } from 'jotai/react';
import ThemeControllerButtons from './theme-controller-buttons';
import { archiveModalAtom } from '../_stateStore/atoms';
import RestoreIcon from './icons/i-restore';
import DeleteNote from './delete-note';
import ArchivedNoteList from './archived-note-list';


export default function Archive() {
  const [archiveModal, setArchiveModal] = useAtom(archiveModalAtom);
  return (
    <div id="archiveModal" className={archiveModal ? '' : 'hidden'}>
      <div className="z-[9] fixed top-0 left-0 w-full h-full bg-base-200 opacity-70"></div>
      <div className='z-10 translate-x-[-50%] flex flex-col flex-wrap absolute rounded-xl p-8 max-w-[500px] max-sm:w-[80vw] h-[60vh] bg-base-300 left-[50vw] top-[25vh]'>
        <button onClick={() => { setArchiveModal(false) }}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-xl">✕</button>
        <p className="text-base-content font-medium mb-4">Archived Notes :</p>
        <div id="archivedNotes" className='flex justify-start flex-col w-full'>
          <ArchivedNoteList />
        </div>
        <button onClick={() => { setArchiveModal(false) }}
          className="btn btn-primary ml-auto mt-auto">Save & Close</button>
      </div>
    </div >
  )
}

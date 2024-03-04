"use client"

import { useAtom } from "jotai/react";
import { currentDescriptionAtom, currentNoteIdAtom, currentTitleAtom } from "../_stateStore/atoms";
import PageIcon from "./i-blank-page";
import DeleteNote from "./delete-note";

type Props = {
  id: string
  domId: number,
  title?: string | null,
  description?: string | null,

}

export default function Note({ id, domId, title, description }: Props) {
  const [currentNoteTitle, setCurrentNoteTitle] = useAtom(currentTitleAtom);
  const [currentNoteDescription, setCurrentNoteDescription] = useAtom(currentDescriptionAtom);
  const [currentNoteId, setCurrentNoteId] = useAtom(currentNoteIdAtom);
  return (
    <div
      key={domId}
      className="note mb-1 grid grid-cols-8 gap-0 items-center cursor-pointer"
      id={`note-${domId}`}
      onClick={() => {
        if (description && title && domId) {
          setCurrentNoteTitle(title);
          setCurrentNoteDescription(description);
          setCurrentNoteId(domId);
        }
      }}
    >
      <div className='flex justify-start items-center  col-span-7 hover:opacity-80'>
        <span className="col-span-1 mr-2 icon">
          <PageIcon />
        </span>
        <p className='col-span-6 ml-[-0.3rem] truncate'>{title}</p>
      </div>
      <DeleteNote
        className='col-span-1 min-w-4 min-h-4 w-4 h-4 ml-auto opacity-60  hover:opactiy-100 hover:text-error'
        id={id} />
    </div>
  )
}
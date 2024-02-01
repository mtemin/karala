"use client"
import { useAtom } from 'jotai';
import { currentTitleAtom, currentDescriptionAtom, currentNoteAtom, notesAtom } from '../_stateStore/atoms';

export default function Document() {
    // const [currentNote, setCurrentNote] = useAtom(currentNoteAtom)
    const [currentNoteTitle, setCurrentNoteTitle] = useAtom(currentTitleAtom);
    const [currentNoteDescription, setCurrentNoteDescription] = useAtom(currentDescriptionAtom);
    const [notes, setNotes] = useAtom(notesAtom);
    // function updateNote () {
    //     notes.map((note) => ({

    //     }) )
    // }
    return (
        <section id="note" className="w-full h-screen flex flex-col justify-between bg-base-200 px-24 py-10">
            <textarea placeholder={currentNoteTitle}
                className="w-full h-16 text-3xl mb-1 p-3 bg-base-200 focus:outline focus:outline-base-50 rounded resize-none"
                onChange={(event) => setCurrentNoteTitle(event.target.value)} />
            <textarea placeholder={currentNoteDescription}
                className="w-full h-full text-lg p-3 bg-base-200 focus:outline focus:outline-base-50 rounded overflow-auto resize-none"
                onChange={(event) => setCurrentNoteDescription(event.target.value)} />
            <button
                type="submit"
                className="btn btn-primary mt-6"
                onClick={(event) => {

                }}>
                Save
            </button>
        </section>
    );
}

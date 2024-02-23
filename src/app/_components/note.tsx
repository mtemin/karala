"use client"
import { useAtom } from 'jotai';
import { currentTitleAtom, currentDescriptionAtom, currentNoteIdAtom } from '../_stateStore/atoms';
import { supabase } from '../lib/supabase';

export default function Note() {
    // const [currentNote, setCurrentNote] = useAtom(currentNoteAtom)
    const [currentNoteTitle, setCurrentNoteTitle] = useAtom(currentTitleAtom);
    const [currentNoteDescription, setCurrentNoteDescription] = useAtom(currentDescriptionAtom);
    const [currentNoteId, setCurrentNoteId] = useAtom(currentNoteIdAtom);

    // const [currentNote, setCurrentNote] = useAtom(currentNoteAtom);
    // function updateNote () {
    //     notes.map((note) => ({

    //     }) )
    // }
    return (
        <section id="note" className="w-full h-screen flex flex-col justify-between bg-base-200 px-24 py-10 max-sm:px-12">
            {currentNoteTitle &&
                <textarea
                    value={currentNoteTitle}
                    className="w-full h-16 text-3xl mb-1 p-3 bg-base-200 focus:outline focus:outline-base-50 rounded resize-none"
                    onChange={(event) => setCurrentNoteTitle(event.target.value)} />
            }
            {currentNoteDescription &&
                <textarea
                    value={currentNoteDescription}
                    className="w-full h-full text-lg mb-6 p-3 bg-base-200 focus:outline focus:outline-base-50 rounded overflow-auto resize-none"
                    onChange={(event) => setCurrentNoteDescription(event.target.value)} />

            }
            <button
                type="submit"
                className="btn btn-primary mt-auto"
                onClick={() => {
                    try {
                        // const { data, error } =
                        supabase
                            .from('notes')
                            .update({
                                title: currentNoteTitle,
                                description: currentNoteDescription
                            })
                            .eq('domId', currentNoteId)
                            .select('*')
                            .then(result => console.log(result))

                    } catch {
                        console.log("not güncelleme başarısız")
                    }
                }}>
                Save
            </button>
        </section>
    );
}

"use client"
import { supabase } from "@/app/lib/supabase";


// async
function AddNewNote() {
    // async
    function handleAddNote() {
        supabase
            .from('notes')
            .insert({ title: 'test başlığı 45', user_id: "userId", description: 'Test 3 naber lan', isArchived: false, isParent: false })
            .then(result => result.status === 201 ? console.log("not oluşturuldu") : console.log("not oluşturma başarısız")
            );
    }
    return (
        <div
            className="note py-1 cursor-pointer mt-3 mb-1 flex items-center hover:pl-3 hover:text-primary/80 duration-300"
            onClick={handleAddNote}
        >
            <span className="icon mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    className="w-4 h-4">
                    <path fillRule="evenodd"
                        d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875ZM12.75 12a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V18a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V12Z"
                        clipRule="evenodd" />
                    <path
                        d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" />
                </svg>
            </span>
            <p className="">New Note</p>
        </div>
    );
}

export default AddNewNote;

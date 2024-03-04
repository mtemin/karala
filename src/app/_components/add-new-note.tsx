"use client"
import { supabase } from "@/app/lib/supabase";
import AddPageIcon from "./i-add-page";

function AddNewNote({ userId }: { userId: string | undefined }) {
  async function handleAddNote() {
    event?.preventDefault();
    event?.stopPropagation();
    await supabase
      .from('notes')
      .insert({ title: 'Lorem Ipsum', user_id: userId, description: `What's on your mind?`, isArchived: false, isParent: false })
      .then(result => result.status === 201
        ? console.log("not oluşturuldu")
        : console.log("not oluşturma başarısız")
      );
  }
  return (
    <div
      onClick={handleAddNote}
      className=" search mb-3 flex items-center cursor-pointer"
    >
      <label htmlFor="addNewNote" className="absolute p-1 cursor-pointer bg-base-300 rounded-full">
        <AddPageIcon className="w-5 h-5" />
      </label>
      <button
        // type="text"
        value="Add New Note"
        // readOnly
        className="whitespace-nowrap text-left overflow-hidden cursor-pointer h-8 w-5 rounded-full pl-8 py-1 text-sm bg-base-300 transition-all duration-500 hover:w-36"
        name="Add New Note"
        id="addNewNote"
      >
        Add New Note
      </button>

    </div>
  );
}

export default AddNewNote;

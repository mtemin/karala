"use client"
import { supabase } from "@/app/_lib/supabase";
import AddPageIcon from "./icons/AddPageIcon";
import { useActivateNotification } from "../_hooks/useActivateNotification";

function AddNewNote({ userId }: { userId: string | undefined }) {
  const notify = useActivateNotification();

  async function handleAddNote() {
    event?.preventDefault();
    event?.stopPropagation();
    await supabase
      .from('notes')
      .insert({ title: 'Lorem Ipsum', user_id: userId, description: `What's on your mind?`, isArchived: false, isParent: false })
      .then(result => result.status === 201
        ? notify("success","Note creation successful!")
        : notify("error","Note creation failed!")
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
        value="Add New Note"
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

"use client"
import { supabase } from "@/app/_lib/supabase";
import AddPageIcon from "./icons/i-add-page";
import { alertAtom } from "../_stateStore/atoms";
import { useAtom } from "jotai/react";
import { activateAlert } from "../_hooks/useActivateAlert";

function AddNewNote({ userId }: { userId: string | undefined }) {
  const [alert, setAlert] = useAtom(alertAtom);

  async function handleAddNote() {
    event?.preventDefault();
    event?.stopPropagation();
    await supabase
      .from('notes')
      .insert({ title: 'Lorem Ipsum', user_id: userId, description: `What's on your mind?`, isArchived: false, isParent: false })
      .then(result => result.status === 201
        ? activateAlert("success")
        : activateAlert("error")
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

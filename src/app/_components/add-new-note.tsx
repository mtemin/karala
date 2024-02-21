"use client"
import { supabase } from "@/app/lib/supabase";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { currentDescriptionAtom, currentTitleAtom } from "../_stateStore/atoms";
import AddPageIcon from "./i-add-page";

// async
function AddNewNote() {
  // async
  async function handleAddNote() {
    await supabase
      .from('notes')
      .insert({ title: 'Lorem Ipsum', user_id: "userId", description: `What's on your mind?`, isArchived: false, isParent: false })
      .then(result => result.status === 201
        ? console.log("not oluşturuldu")
        : console.log("not oluşturma başarısız")
      );
  }
  return (
    <div
      className="note py-1 cursor-pointer my-3 mb-1 flex items-center hover:pl-3 hover:text-primary/80 duration-300"
      onClick={handleAddNote}
    >
      <span className="icon mr-1">
        <AddPageIcon className="w-4 h-4" />
      </span>
      <p className="">Add New Note</p>
    </div>
  );
}

export default AddNewNote;

import { useMutation } from "react-query";
import useSupabase from "./useSupabase";
import { supabase } from "../lib/supabase";
import { queryClient } from '../_components/provider-react-query-client';

async function addNote() {
  return await supabase
    .from('notes')
    .insert({ title: 'bu bir test başlığı testetestestetetetss', user_id: "userId", description: 'açıklama test', isArchived: false, isParent: false })
    .then(result => result.status === 201
      ? console.log("not oluşturuldu")
      : console.log("not oluşturma başarısız")
    );
}

// function useUpdateNoteListMutation() {
//   const client = useSupabase();

// }

export const addNotesMutation = useMutation(addNote, {
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['notes'] });
  }
})
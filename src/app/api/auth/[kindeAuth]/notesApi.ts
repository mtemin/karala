import { supabase } from "@/app/lib/supabase";
// import { supabase } from "../../../lib/supabase";


export async function getNotes() {
  const notes = await supabase
    .from('notes')
    .select('*');
  return notes;
}

export async function addNote({ title, description, user_id, isArchived, isParent }: Note) {
  return await supabase
    .from('notes')
    .insert({ title: 'title', user_id: "userId", description: 'description', isArchived: false, isParent: false })
}

export async function updateNote({ title, description }: NewNote) {
  return await supabase
    .from('notes')
    .update
    ({
      title: title,
      description: description
    });
}

//export async function deleteNote({ id }: any) {
//   return await supabase
//     .from('notes')
//     .delete()
// }
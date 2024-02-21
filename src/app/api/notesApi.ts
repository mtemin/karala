// import { supabase } from "@/app/lib/supabase";


// export async function getNotes() {
//   const notes = await supabase
//     .from('notes')
//     .select('*');
//   return notes;
// }

// export async function addNote({ currentTitle, currentDescription }: { currentTitle: string, currentDescription: string }) {
//   return await supabase
//     .from('notes')
//     .insert
//     ({
//       title: currentTitle,
//       description: currentDescription
//     })
// }

// export async function updateNote({ currentTitle, currentDescription }: { currentTitle: string, currentDescription: string }) {
//   return await supabase
//     .from('notes')
//     .update
//     ({
//       title: currentTitle,
//       description: currentDescription
//     });
// }

// export async function deleteNote({ id }: any) {
//   return await supabase
//     .from('notes')
//     .delete()
//     .match({ 'id': id })
// }
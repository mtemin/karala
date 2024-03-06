import { createClient } from '@supabase/supabase-js';
import { useQuery } from '@tanstack/react-query';
import { getNotes } from '../queries/getNotes';
import useNoteQuery from '../_hooks/useNoteQuery';
const supabaseUrl = 'https://cflyjcqujlqbmknzxoei.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmbHlqY3F1amxxYm1rbnp4b2VpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ0NDgyNTMsImV4cCI6MjAyMDAyNDI1M30.dbpzkERMOY2FSl2fx4p59ftJI6df-TogrwGuVwD9qew';

//@ts-ignore
// export const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY, { auth: { persistSession: false } })
export const supabase = createClient(supabaseUrl, supabaseKey, { auth: { persistSession: false } });

// // Create a function to handle inserts
// export const handleInserts = (payload: any) => {
//   console.log('Change received!', payload.new);
//   const { data, isLoading, isError } = useNoteQuery();

// }

// // Listen to inserts
// supabase
//   .channel('notes')
//   .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'notes' }, handleInserts)
//   .subscribe();

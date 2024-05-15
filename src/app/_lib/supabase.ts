import { createClient } from '@supabase/supabase-js';

// VERCEL
//@ts-ignore
export const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY, { auth: { persistSession: false } })
// export const supabase = createClient(supabaseUrl, supabaseKey, { auth: { persistSession: false } });

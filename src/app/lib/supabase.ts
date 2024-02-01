import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://cflyjcqujlqbmknzxoei.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmbHlqY3F1amxxYm1rbnp4b2VpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ0NDgyNTMsImV4cCI6MjAyMDAyNDI1M30.dbpzkERMOY2FSl2fx4p59ftJI6df-TogrwGuVwD9qew';

export const supabase = createClient(supabaseUrl, supabaseKey, { auth: { persistSession: false } })

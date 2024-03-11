import { createBrowserClient } from '@supabase/ssr';
import { Database } from '../../../database.types';

let client: ReturnType<typeof createBrowserClient<Database>> | undefined;

export function getSupabaseBrowserClient() {
  if (client) {
    return client;
  }

  //@ts-ignore
  client = createBrowserClient<Database>(
    // client = createBrowserClient(
    //@ts-ignore
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );

  return client;
}


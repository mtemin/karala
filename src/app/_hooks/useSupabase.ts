import { useMemo } from 'react';
import { getSupabaseBrowserClient } from '../lib/browser-client'

function useSupabase() {
  return useMemo(getSupabaseBrowserClient, []);
}

export default useSupabase;
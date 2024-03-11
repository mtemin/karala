import { useMemo } from 'react';
import { getSupabaseBrowserClient } from '../_lib/browser-client'

function useSupabase() {
  return useMemo(getSupabaseBrowserClient, []);
}

export default useSupabase;
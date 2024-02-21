import { useQuery } from "@tanstack/react-query";
import useSupabase from "./useSupabase";
import { getNotes } from "../queries/getNotes";


export function useNoteQuery() {
  const queryKey = ['notes'];
  const client = useSupabase();

  const queryFn = async () => {
    return getNotes(client).then(
      (result: any) => result.data
    );
  };

  return useQuery({ queryKey, queryFn });
}

export default useNoteQuery;
import { useQuery } from "@tanstack/react-query";
import useSupabase from "./useSupabase";
import { getNotes } from "../_queries/getNotes";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
// import { currentUserAtom } from "../_stateStore/atoms";


export function useNoteQuery(userId: string) {
  const queryKey = ['notes'];
  const client = useSupabase();

  const queryFn = async () => {
    return getNotes(client, userId).then(
      (result: any) => result.data
    );
  };

  return useQuery({ queryKey, queryFn });
}

export default useNoteQuery;
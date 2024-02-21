import { useQuery } from "@tanstack/react-query";
import { getUser } from "../queries/getUser";


export function useNoteQuery() {
  const queryKey = ['users'];

  const queryFn = async () => {
    return getUser().then(
      (result: any) => result.data
        .then(
          console.log(result)
        )
    );
  };

  return useQuery({ queryKey, queryFn });
}

export default useNoteQuery;
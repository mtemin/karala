import { useQuery } from "@tanstack/react-query";
import { getAuthentication } from "../queries/getAuthentication";

export function useAuthQuery() {
  const queryKey = ['auth'];


  const queryFn = async () => {
    return getAuthentication().then(
      (result: any) => result.data
    );
  };

  return useQuery({ queryKey, queryFn });
}

export default useAuthQuery;
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../_queries/getUser";

export function useUserQuery() {
  const queryKey = ['user'];

  const queryFn = async () => {
    return getUser().then(
      (result: any) => result.data
    );
  };

  return useQuery({ queryKey, queryFn });
}

export default useUserQuery;
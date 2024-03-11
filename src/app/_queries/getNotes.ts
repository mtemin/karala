import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { useAtom } from "jotai/react";
import { currentUserAtom } from "../_stateStore/atoms";
// import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";

export async function getNotes(client: any, userId: string) {
  // const [currentUser, setCurrentUser] = useAtom(currentUserAtom);
  // console.log(currentUser);

  return await client
    .from('notes')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: true })
    .throwOnError();
  // }
}
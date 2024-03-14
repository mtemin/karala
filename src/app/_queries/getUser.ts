import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { useAtom } from "jotai/react";
import { currentUserAtom } from "../_stateStore/atoms";

export async function getUser() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return user;
}
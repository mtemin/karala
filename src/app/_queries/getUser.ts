"use server"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { useAtom } from "jotai/react";
import { currentUserAtom } from "../_stateStore/atoms";

export async function getUser() {
  const [currentUser, setCurrentUser] = useAtom(currentUserAtom);
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  setCurrentUser(user);

  return user;
}
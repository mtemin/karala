import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/dist/types/server";

export async function getUser() {
  const { isAuthenticated } = getKindeServerSession();
  const { getUser } = getKindeServerSession();
  const isLoggedIn: boolean = await isAuthenticated();
  const user = await getUser();
}
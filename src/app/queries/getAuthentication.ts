import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function getAuthentication() {
  const { isAuthenticated } = getKindeServerSession();
  const isLoggedIn = await isAuthenticated();
  return isLoggedIn;
}
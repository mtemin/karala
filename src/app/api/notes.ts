// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
// import { getNotes } from "../queries/getNotes";
// import useSupabase from "../_hooks/useSupabase";


// export default async function handler(req: any, res: any) {
//   const client = useSupabase();
//   const { getUser } = getKindeServerSession();
//   const user = await getUser();

//   if (!user) {
//     return res.status(401).json({ error: "Unauthorized" });
//   }

//   // Assuming you have a client object set up for database interaction
//   const notes = await getNotes(client, user.id);

//   res.status(200).json(notes);
// }
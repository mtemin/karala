
export async function getNotes(client: any, userId: string, isArchived: boolean) {
  return await client
    .from('notes')
    .select('*')
    .eq('user_id', userId)
    .eq('isArchived', isArchived)
    .order('created_at', { ascending: true })
    .throwOnError();
}
export function getNotes(
  client: any,
) {
  return client
    .from('notes')
    .select('*')
    .order('created_at', { ascending: true })
    .throwOnError()
  // .single();
}
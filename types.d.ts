type Note = {
  id: string,
  created_at: string,
  user_id: string,
  parent_id: string | null,
  title: string | null,
  description: string | null,
  isArchived: boolean,
  isParent: boolean,
  domId: number
}

type NewNote = {
  title?: string,
  description?: string
}

type User = {
  family_name?: string | undefined,
  given_name?: string | undefined,
  picture?: string | undefined,
  email?: string | undefined,
  id?: string | undefined
}
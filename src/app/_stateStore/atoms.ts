import { Atom, atom } from 'jotai';

// initial states
const initialCurrentNote: NewNote | Atom<object> = {
  "title": "New Title",
  "description": "What's on your mind?"
}


const currentTitleAtom = atom("New Title");
const currentDescriptionAtom = atom("What's on your mind?");
const currentNoteAtom = ({ currentTitleAtom, currentDescriptionAtom })
const currentUserAtom = atom({ test: "test" });
const searchAtom = atom("");
const notesAtom = atom([]);

export { currentTitleAtom, currentDescriptionAtom, currentUserAtom, currentNoteAtom, searchAtom, notesAtom }
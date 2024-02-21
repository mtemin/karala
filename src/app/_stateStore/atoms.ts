import { Atom, atom } from 'jotai';

// const currentNoteAtom = ({
//   "title": "New Title",
//   "description": "What is on your mind"
// });
const currentNoteIdAtom = atom<number | null>(null)
const currentTitleAtom = atom<string | null>(null);
const currentDescriptionAtom = atom<string | null>(null);
const currentUserAtom = atom({ test: "test" });
const searchAtom = atom("");
const noteListAtom = atom<Note[]>([]);
const onlineAtom = atom(false);
const themeAtom = atom<string>("default");

export { currentTitleAtom, currentDescriptionAtom, currentUserAtom, searchAtom, noteListAtom, onlineAtom, themeAtom, currentNoteIdAtom }
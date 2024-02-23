import { atom } from 'jotai';

// const currentNoteAtom = ({
//   "title": "New Title",
//   "description": "What is on your mind"
// });
const currentNoteIdAtom = atom<number | null>(null)
const currentTitleAtom = atom<string | null>(null);
const currentDescriptionAtom = atom<string | null>(null);
const currentUserAtom = atom({ test: "test" });
const searchAtom = atom<string>("");
const noteListAtom = atom<Note[]>([]);
const onlineAtom = atom<boolean>(false);
const themeAtom = atom<string>("default");
const isSidebarVisibleAtom = atom<boolean>(true);

export { currentTitleAtom, currentDescriptionAtom, currentUserAtom, searchAtom, noteListAtom, onlineAtom, themeAtom, currentNoteIdAtom, isSidebarVisibleAtom }
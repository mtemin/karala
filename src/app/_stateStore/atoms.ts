import { atom } from 'jotai';

const currentNoteIdAtom = atom<number | null>(null)
const settingsModalAtom = atom<boolean>(false);
const currentTitleAtom = atom<string>("");
const currentDescriptionAtom = atom<string>("");
const currentUserAtom = atom<object | null>(null);
const searchAtom = atom<string>("");
const noteListAtom = atom<Note[]>([]);
const onlineAtom = atom<boolean>(false);
const themeAtom = atom<string | null>("default");
const isSidebarVisibleAtom = atom<boolean>(true);

export {
  currentTitleAtom,
  currentDescriptionAtom,
  currentUserAtom,
  searchAtom,
  noteListAtom,
  onlineAtom,
  themeAtom,
  currentNoteIdAtom,
  isSidebarVisibleAtom,
  settingsModalAtom
}
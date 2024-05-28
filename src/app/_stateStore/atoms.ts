import { atom } from 'jotai';

const settingsModalAtom = atom<boolean>(false);
const archiveModalAtom = atom<boolean>(false);
const isSidebarVisibleAtom = atom<boolean>(true);

const currentNoteIdAtom = atom<number | null>(null)
const currentTitleAtom = atom<string>("");
const currentDescriptionAtom = atom<string>("");
const currentUserAtom = atom<object | null>(null);

const searchAtom = atom<string>("");
const noteListAtom = atom<Note[]>([]);
const onlineAtom = atom<boolean>(false);
const themeAtom = atom<string | null>("default");

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
  settingsModalAtom,
  archiveModalAtom,

}

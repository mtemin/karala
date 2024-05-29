"use client"
import { useAtom } from "jotai/react";
import { archiveModalAtom } from "../_stateStore/atoms";
import ArchiveIcon from "./icons/ArchiveIcon";
import ArchiveModal from "./ArchiveModal";

function Archive() {
  const [archiveModal, setArchiveModal] = useAtom(archiveModalAtom);
  function toggleArchiveModal() {
    event?.preventDefault();
    event?.stopPropagation();
    setArchiveModal(true)
  }
  return (
    <>
      <div
        onClick={toggleArchiveModal}
        className=" search mb-3 flex items-center cursor-pointer"
      >
        <label htmlFor="archive" className="absolute p-1 cursor-pointer bg-base-300 rounded-full">
          <ArchiveIcon className="w-5 h-5" />
        </label>
        <button
          value="Archive"
          className="whitespace-nowrap text-left overflow-hidden cursor-pointer h-8 w-5 rounded-full pl-8 py-1 text-sm bg-base-300 transition-all duration-500 hover:w-24"
          name="Archive"
          id="archive"
        >
          Archive
        </button>

      </div>
      <ArchiveModal />
    </>
  );
}

export default Archive;

"use client"
import { useAtom } from 'jotai';
import LeftArrowIcon from './icons/LeftArrowIcon'
import { isSidebarVisibleAtom } from '../_stateStore/atoms';

export default function ToggleSidebar() {

  const [isSidebarVisible, setIsSidebarVisible] = useAtom(isSidebarVisibleAtom);
  const iconStyle = isSidebarVisible ? "w-4 h-4 transition-all duration-300" : " w-4 h-4 transition-all duration-300 rotate-180";

  return (
    <div onClick={() => {
      const usermenu = document.querySelector('#usermenu');
      if (usermenu) {
        usermenu.classList.toggle('sidebar-hidden')
        setIsSidebarVisible(!isSidebarVisible);
      }
    }}
      className="z-[11] cursor-pointer tooltip tooltip-right p-1 bg-base-200 absolute right-[-18px] top-10 border-[--foreground] border-2 rounded-full transition-all duration-300 hover:bg-primary min-w-[1080px]hover:text-[--background]" data-tip="Toggle sidebar">
      <LeftArrowIcon className={iconStyle} isSidebarVisible={isSidebarVisible} />
    </div>
  )
}

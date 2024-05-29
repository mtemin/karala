"use client"

import { useAtom } from "jotai"
import { themeAtom } from "../_stateStore/atoms";
import PaintBrushIcon from "./icons/PaintBrushIcon";


export default function ThemeController({ className }: { className: string }) {
  const [theme, setTheme] = useAtom(themeAtom);
  return (
    <div id="theme-controller" className={className}>
      <div tabIndex={0} role="button" className="btn btn-outline min-h-10 h-10 w-full">
        {/* <PaintBrushIcon className="w-5 h-5 relative left-0" /> */}
        <p className="mr-auto">
          Theme
        </p>
        <svg width="12px" height="12px" className="h-2 w-2 fill-current opacity-60 inline-block truncate" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
      </div>
      <ul tabIndex={0} className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-full">
        <li><input type="radio" name="theme-dropdown" onClick={(event) => setTheme((event.target as HTMLInputElement).value)} className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Default" value="default" /></li>
        <li><input type="radio" name="theme-dropdown" onClick={(event) => setTheme((event.target as HTMLInputElement).value)} className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Dark" value="dark" /></li>
        <li><input type="radio" name="theme-dropdown" onClick={(event) => setTheme((event.target as HTMLInputElement).value)} className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Light" value="light" /></li>
        <li><input type="radio" name="theme-dropdown" onClick={(event) => setTheme((event.target as HTMLInputElement).value)} className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Retro" value="retro" /></li>
        <li><input type="radio" name="theme-dropdown" onClick={(event) => setTheme((event.target as HTMLInputElement).value)} className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Karala" value="karala" /></li>
      </ul>
    </div>
  )
}

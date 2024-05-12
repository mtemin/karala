"use client"
type Props = {
  type: "info" | "success" | "warning" | "error",
  text: string
}

// const [alert, setAlert] = useAtom(alertAtom);

export default function Alert({ type, text }: Props) {
  let className;
  switch (type) {
    case "success":
      className = "alert transition-all duration-500 w-[90%] left-[5%] mt-[-7rem] z-[1000] alert-success absolute";
      break;
    case "error":
      className = "alert transition-all duration-500 w-[90%] left-[5%] mt-[-7rem] z-[1000] alert-error absolute";
      break;
    case "info":
      className = "alert transition-all duration-500 w-[90%] left-[5%] mt-[-7rem] z-[1000] alert-info absolute";
      break;
    case "warning":
      className = "alert transition-all duration-500 w-[90%] left-[5%] mt-[-7rem] z-[1000] alert-warning absolute";
      break;
  }

  return (
    <div role="alert" className={className}>
      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <span>{text}</span>
    </div>
  )
}

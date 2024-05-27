
export function useActivateNotification(type: string, text:string) {
  let element: HTMLElement | null = document.querySelector(`.alert-${type}`);
  console.log(element)
  if (element){
    element.style.marginTop = "1rem"
    element.innerText=text;
  }
  setTimeout(() => {
    if (element)
      element.style.marginTop = "-7rem"
  }, 2000)
}


export function activateAlert(type: string) {
  let element: HTMLElement | null = document.querySelector(`.alert-${type}`);
  console.log(element)
  if (element)
    element.style.marginTop = "1rem"
  setTimeout(() => {
    if (element)
      element.style.marginTop = "-7rem"
  }, 2000)
}

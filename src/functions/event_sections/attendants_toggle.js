export function attendantToggle (btnElement) {
  console.log(btnElement)
  const ulDiv = btnElement.parentElement.parentElement.querySelector(".attendants-list");
  btnElement.classList.toggle("rotate")
  btnElement.classList.toggle("no-rotate")
  if(ulDiv.style.height == "0px") {
    ulDiv.removeAttribute("style")
  } else {
    ulDiv.style.height = "0px"
  }
  // window.location.href= 
}
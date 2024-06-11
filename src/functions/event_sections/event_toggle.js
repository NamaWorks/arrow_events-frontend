export function eventToggle (btnElement) {
  const event = btnElement.parentElement.parentElement
  event.classList.toggle("event-seen")
  const eventInfo = event.querySelector(".event-info")

  btnElement.classList.toggle("rotate")
  btnElement.classList.toggle("no-rotate")
  btnElement.classList.toggle("position-start")
  btnElement.classList.toggle("position-end")

  console.log(eventInfo.scrollHeight)
  const eventInfoHeight = eventInfo.scrollHeight

  if(eventInfo.style.height == "0px"){ 
    // eventInfo.removeAttribute("style")
    eventInfo.style.height = eventInfoHeight + "px"
  } else { 
    eventInfo.style.height = "0px"
  }
}

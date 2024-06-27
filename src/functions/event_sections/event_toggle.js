export function eventToggle (titleDiv) {
  const event = titleDiv.parentElement
  event.classList.toggle("event-seen")
  const eventInfo = event.querySelector(".event-info")

  const btnElement = titleDiv.querySelector(".icon-div")

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

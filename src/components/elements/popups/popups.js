import { app } from "../../../data/global_variables"
import { typewriter } from "../../../functions/animations/self_writing_text"
import "./popup.css"

export function printPopup (content, color) {
  const popupDiv = document.createElement("div")
  popupDiv.classList.add("popup")
  popupDiv.classList.add(color)
  // popupDiv.style.left = "-100svw"
  popupDiv.style.top = "-60svh"
  app.append(popupDiv)
  
  const popupText = document.createElement("p")
  popupText.innerText = content
  popupText.classList.add("popup-text")
  popupDiv.append(popupText)
  
  setTimeout(() => {
    // popupDiv.style.left = "0svw"
    if(color == "yellow"){
      popupDiv.style.top = "30svh"
    }else {
      popupDiv.style.top = "15svh"
    }
  }, 200);

  setTimeout(() => {
    typewriter(popupText)
  }, 300);
  
  
  setTimeout(() => {
    popupDiv.style.top = "-60svh"
    setTimeout(() => {
      popupDiv.remove()
    }, 450);
  }, 3500);
}
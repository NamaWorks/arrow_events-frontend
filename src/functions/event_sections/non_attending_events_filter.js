import { printEvents } from "../../components/pages/events_section/events_section";
import { introAnimation, outroAnimationNoClean } from "../sections/intro_animation"


export const filterNonAttendingEvents = async (username) => {

  
  const section = document.querySelector("section")
  
  outroAnimationNoClean(section)
  await printEvents()
  setTimeout(() => {
    const events = document.querySelectorAll(".event")
  events.forEach(event => {
    let attendantsArr = []
    const eventAttendantsList = event.querySelector(".attendants-list")
    const attendants = eventAttendantsList.querySelectorAll("li")
    attendants.forEach((li) => {
      const usernameP = li.querySelector("p")
      attendantsArr.push(usernameP.innerText)
    })
    if((attendantsArr.includes(username))){
      event.remove()
    } 
  });
  introAnimation(section)
}, 440);
}
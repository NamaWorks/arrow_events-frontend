import { printNavbar } from "../../components/elements/navbar/navbar"
import { printPopup } from "../../components/elements/popups/popups"
import { printEvents } from "../../components/pages/events_section/events_section"
import { clearSections } from "../sections/clear_sections"
import { outroAnimation } from "../sections/intro_animation"


export const logoutSubmit = () => {
  if(localStorage.getItem("user")) {
    const currentSection = document.querySelector("section")
    outroAnimation(currentSection)
    setTimeout(() => {
      clearSections()
      localStorage.removeItem("user")
      printPopup("logged out", "green")
      printNavbar()
      printEvents()
    }, 400);
  }
}
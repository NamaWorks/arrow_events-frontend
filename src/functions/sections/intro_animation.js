import { clearSections } from "./clear_sections";

export function introAnimation (section) {
  setTimeout(() => {
    section.style.top = "0svh"
  }, 451);
}
export function outroAnimation (section) {
  setTimeout(() => {
    section.style.top = "100svh"
    clearSections()
  }, 0);
}

export function outroAnimationNoClean (section) {
  setTimeout(() => {
    section.style.top = "100svh"
  }, 0);
}
import { printEvents } from "../../components/pages/events_section/events_section";
import { outroAnimationNoClean } from "../sections/intro_animation";

export const allEventsFilter = async (username) => {
  const section = document.querySelector("section")
  outroAnimationNoClean(section)

  await printEvents()
}
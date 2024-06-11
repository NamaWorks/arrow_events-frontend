import { printEvents } from "../components/pages/events_section/events_section";
import { routes } from "./routes"

export const popStateListener = () => {
  window.addEventListener("popstate", () => {
    const link = routes.find(
      (link) => {
        link.path === window.location.pathname
        }
        );


        link?.page()
        
        if(!link) {
      printEvents();
      window.history.pushState("", "", "/")
    }
  })
}
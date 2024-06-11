import "./style.css/"

import { printNavbar } from "./src/components/elements/navbar/navbar";
import { printEvents } from "./src/components/pages/events_section/events_section";
import { printPopup } from "./src/components/elements/popups/popups";
import { popStateListener } from "./src/router/popstate";



printNavbar()
printEvents()
printPopup("welcome to @events!", "green")
popStateListener()
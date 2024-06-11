import { printCreateEventSection } from "../components/pages/create_event/create_event_section";
import { printEvents } from "../components/pages/events_section/events_section";
import { printLogin } from "../components/pages/login_section/login_section";
import { printSignup } from "../components/pages/signup_section/signup_section";
import { printLogedUserSection } from "../components/pages/user_page/user_section";
import { logoutSubmit } from "../functions/logout/logout_submit";

export const data = {
  navItems: {
      events: {
        text: "events",
        path: "/events",
        page: printEvents,        
      },
    	signup: {
        text: "sign up",
        path: "/signup",
        page: printSignup,
      },
      login: {
        text: "log in",
        path: "/login",
        page: printLogin,
      },
      create_event: {
        text: "create event",
        path: "/create_event",
        page: printCreateEventSection,
      },
      logout: {
        text: "log out",
        path: "/logout",
        page: logoutSubmit
      },
      user: {
        text:"user",
        path: "/user",
        page: printLogedUserSection,
        
      }
  },
}


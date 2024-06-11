import { printCreateEventSection } from "../components/pages/create_event/create_event_section.js"
import { printEditProfileSection } from "../components/pages/edit_profile/edit_profile_section.js"
import { printEvents } from "../components/pages/events_section/events_section.js"
import { printLogin } from "../components/pages/login_section/login_section.js"
import { printSignup } from "../components/pages/signup_section/signup_section.js"
import { printLogedUserSection } from "../components/pages/user_page/user_section.js"

export const routes = [
  {
    text: "create_event",
    path: "/create_event",
    page: printCreateEventSection,
  },
  {
    text: "edit_profile",
    path: "/edit_profile",
    page: printEditProfileSection,
  },
  {
    text: "events",
    path: "/events",
    page: printEvents,
  },
  {
    text: "signup",
    path: "/signup",
    page: printSignup,
  },
  {
    text: "login",
    path: "/login",
    page: printLogin,
  },
  {
    text: "user",
    path: "/user",
    page: printLogedUserSection,
  },
]
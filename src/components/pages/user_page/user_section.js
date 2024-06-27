import "./user_section.css"
import "../../elements/buttons/std_buttons.css"

import { api, app } from "../../../data/global_variables";
import { clearSections } from "../../../functions/sections/clear_sections";
import { printEditProfileSection } from "../edit_profile/edit_profile_section";
import { printIcon } from "../../elements/brand/icons";
import { willAssistToggle } from "../../../functions/user_page/will_assist_toggle";
import { printEvents } from "../events_section/events_section";
import { introAnimation, outroAnimation } from "../../../functions/sections/intro_animation";

export const printLogedUserSection = async () => {
  clearSections()
  sessionStorage("currentPage", "user")
  const user = localStorage.getItem("user")

  const userJson = JSON.parse(user)
  const userId = userJson.user._id
  
  const userFetch = await fetch(api+"users/" + userId)
  const userResponse = await userFetch.json()

  const logedUserSection = document.createElement("section")
  logedUserSection.classList.add("user-section")
  logedUserSection.setAttribute("id", "loged-user-section")
  logedUserSection.style.top = "100svh"
  setTimeout(() => {
    app.append(logedUserSection)
  }, 400);

  const {profilePicture} = userResponse
  const {email} = userResponse
  const {username} = userResponse

  // -------------------------------

  const profilePictureDiv = document.createElement("div")
  profilePictureDiv.setAttribute("id", "user-pfp-div")
  profilePictureDiv.classList.add("user-image-div")
  logedUserSection.append(profilePictureDiv)
  
  const img = document.createElement("img")
  img.setAttribute("src" , profilePicture)
  
  profilePictureDiv.append(img)

  const editProfileBtn = document.createElement("button")
  editProfileBtn.innerText = "edit profile"
  editProfileBtn.classList.add("change-section-btn")
  editProfileBtn.addEventListener("click", function () {
    const currentSection = document.querySelector("section")
    outroAnimation(currentSection)
    setTimeout(() => {
      printEditProfileSection()
    }, 450);
  })
  logedUserSection.append(editProfileBtn)

  const userUsername = document.createElement("h4")
  userUsername.innerText = username
  userUsername.setAttribute("id", "user-username")
  logedUserSection.append(userUsername)

  const userEmail = document.createElement("h4")
  userEmail.setAttribute("id", "user-email")
  userEmail.innerText = email
  logedUserSection.append(userEmail)

  const userAttendingEventsFetch = await fetch(api + "events/all")
  const userAttendingEventsResponse = await userAttendingEventsFetch.json()
  
  let attendingEvents = []
  userAttendingEventsResponse.forEach(eventItem => {
    const eventAttendants = eventItem.attendants
    eventAttendants.forEach(attendant => {
      if(attendant.username == username){
        attendingEvents.push(eventItem)
      }
    })
  });

  const attendingEventsToggle = document.createElement("div")
  attendingEventsToggle.classList.add("list-toggle")
  attendingEventsToggle.setAttribute("id", "attending-events-toggle")
  logedUserSection.append(attendingEventsToggle)

  
  const attendingEventsTitle = document.createElement("h4")
  attendingEventsTitle.innerText = "will assist to"
  attendingEventsToggle.append(attendingEventsTitle)
  const arrow = printIcon("https://res.cloudinary.com/dgrhbsilh/image/upload/v1716960281/14_RTC_P10_be-to-fe-js/icons/arrow_hfuzjx.png")
  arrow.classList.add("no-rotate")
  attendingEventsToggle.append(arrow)

  arrow.addEventListener("click", ()=> {
    arrow.classList.toggle("no-rotate")
    arrow.classList.toggle("rotate")
    willAssistToggle()
  })
  
  const attendingEventsDiv = document.createElement("div")
  attendingEventsDiv.setAttribute("id", "attending-events-div")
  logedUserSection.append(attendingEventsDiv)
  
  attendingEvents.forEach(attendingEvent => {
    const attendingEventElement = document.createElement("p")
    attendingEventElement.innerText = attendingEvent.title
    attendingEventsDiv.append(attendingEventElement)
  })

  const backToEventsBtn = document.createElement("button")
  backToEventsBtn.setAttribute("id", "back-to-events-btn")
  backToEventsBtn.innerText = "back to events"
  backToEventsBtn.classList.add("std-btn")
  backToEventsBtn.addEventListener("click", function () {
    const currentSection = document.querySelector("section")
    outroAnimation(currentSection)
    setTimeout(() => {
      printEvents()
    }, 450);
  })
  logedUserSection.append(backToEventsBtn)

  introAnimation(logedUserSection)
}
import "../../elements/brand/icons.css"
import "./events_section.css"

import { api, app } from "../../../data/global_variables";
import { filterAttendingEvents } from "../../../functions/event_sections/attending_events_filter";
import { cancelAssistance } from "../../../functions/event_sections/cancel_assistance";
import { confirmAssistance } from "../../../functions/event_sections/confirm_assistance";
import { filterNonAttendingEvents } from "../../../functions/event_sections/non_attending_events_filter";
import { clearSections } from "../../../functions/sections/clear_sections";
import { printIcon } from "../../elements/brand/icons";
// import { attendantToggle } from "../../../functions/event_sections/attendants_toggle";
import { eventToggle } from "../../../functions/event_sections/event_toggle";
import { printBrand } from "../../elements/brand/at-events";
// import { setRandomColorClass } from "../../../functions/event_sections/assign_random_color";
import { introAnimation } from "../../../functions/sections/intro_animation";
import { createStdBtn } from "../../elements/buttons/std_buttons";
import { allEventsFilter } from "../../../functions/event_sections/all_events_filter";


export const printEvents = async () => {
  
  clearSections()
  sessionStorage.setItem("currenPage", "events")
  const eventsSection = document.createElement("section")
  eventsSection.setAttribute("id", "events_section")
  eventsSection.style.top = "100svh"
  setTimeout(() => {
    app.append(eventsSection)
  }, 400);
  printBrand()
  const logedUser = JSON.parse(localStorage.getItem("user"))
  
  const currentSection  = sessionStorage.getItem("currentPage")
  
  console.log(currentSection)
  
    
    
    const res = await fetch(api+"events/all");
    const events = await res.json()
    
    
    if(logedUser) {
      const allEventsBtn = createStdBtn(eventsSection, "all events", "all-events-btn")
      allEventsBtn.addEventListener("click", async () => {allEventsFilter(logedUser.user.username)})

      const attendingEventsBtn = createStdBtn(eventsSection, "attending events", "attending-events-btn")
      attendingEventsBtn.addEventListener("click", async () => { filterAttendingEvents(logedUser.user.username)})

      const notAttendingEventsbtn = createStdBtn(eventsSection, "non attending events", "non-attending-events-btn")
      notAttendingEventsbtn.addEventListener("click", async () => {filterNonAttendingEvents(logedUser.user.username)})
    }
    
    for (const event of events) {
      const article = document.createElement("article")
      article.classList.add("event")
    eventsSection.append(article)


    // -------------------------------------------;-

    const eventTitleDiv = document.createElement("div")
    eventTitleDiv.classList.add("event-title")
    article.append(eventTitleDiv)

    const eventColor = event.color
    article.classList.add(eventColor)

    const eventTitleH3 = document.createElement("h3")
    eventTitleH3.innerText = await event.title
    eventTitleH3.classList.add("event-title")
    eventTitleDiv.append(eventTitleH3)

    const arrow = printIcon("https://res.cloudinary.com/dgrhbsilh/image/upload/v1716960281/14_RTC_P10_be-to-fe-js/icons/arrow_hfuzjx.png")

    eventTitleDiv.append(arrow)
    eventTitleDiv.addEventListener("click", function(e){eventToggle(this)})

    arrow.classList.add("no-rotate")
    arrow.classList.add("position-start")

    // --------------------------------------------

    const eventInfoDiv = document.createElement("div")
    eventInfoDiv.classList.add("event-info")
    article.append(eventInfoDiv)  

    const eventInfoData = document.createElement("div")
    eventInfoData.classList.add("event-info-data")
    eventInfoDiv.append(eventInfoData)  

    const eventDate = document.createElement("h4")
    eventDate.innerText = "Date: " + await event.date

    const eventLocation = document.createElement("h4")
    eventLocation.innerText = "Location: " + await event.location

    const eventCapacity = document.createElement("h4")
    eventCapacity.innerText = "Capacity: " + await event.capacity

    const eventDescription = document.createElement("p")
    eventDescription.innerText = await event.description

    eventInfoData.append(eventDate, eventLocation, eventCapacity, eventDescription)
    eventInfoDiv.style.height = "0px"

    // --------------------------------------------

    const eventAttendantsDiv = document.createElement("div")
    eventAttendantsDiv.classList.add("event-attendants")
    eventInfoDiv.append(eventAttendantsDiv)

    const eventAttendantsClickDiv = document.createElement("div")
    eventAttendantsClickDiv.classList.add("attendants-title")
    eventAttendantsDiv.append(eventAttendantsClickDiv)

    const eventAttendantsTitle = document.createElement("h4")
    eventAttendantsTitle.innerText = "Attendants"
    eventAttendantsClickDiv.append(eventAttendantsTitle)
    const arrowAttendants =  printIcon("https://res.cloudinary.com/dgrhbsilh/image/upload/v1716960281/14_RTC_P10_be-to-fe-js/icons/arrow_hfuzjx.png")
    eventAttendantsClickDiv.append(arrowAttendants)
    arrowAttendants.classList.add("no-rotate")

    const attendantsListUl = document.createElement("ul")
    attendantsListUl.classList.add("attendants-list")

    eventAttendantsDiv.append(attendantsListUl)
;
    // --------------------------------------------

    const eventAttendants = await event.attendants
    eventAttendants.forEach(attendant => {
      const attendantLi = document.createElement("li")
      attendantsListUl.append(attendantLi)
      const attendantUsername = document.createElement("p")
      attendantUsername.innerText = attendant.username
      attendantLi.append(attendantUsername)
    });

    // ---------------------------------------------

    

    if(logedUser){
      const user = await fetch(api+"users/"+logedUser.user._id)
      const userResponse = await user.json()
      
      const eventAttendantsByName = eventAttendants.map(e => e.username)

      
      if(!eventAttendantsByName.includes(userResponse.username)){
        const confirmAssistanceBtn = createStdBtn(eventInfoDiv, "confirm assistance", "confirm-assistance-btn")
        confirmAssistanceBtn.addEventListener("click", function (e) {confirmAssistance(this)})
      
      } else if(eventAttendantsByName.includes(userResponse.username)){
        const cancelAssistanceBtn = createStdBtn(eventInfoDiv, "cancel assistance", "cancel-assistance-btn")
        cancelAssistanceBtn.addEventListener("click", function (e) {cancelAssistance(this)})
        
      }
    }
  }

  introAnimation(eventsSection)
  sessionStorage.setItem("currentPage", "events")
  
}
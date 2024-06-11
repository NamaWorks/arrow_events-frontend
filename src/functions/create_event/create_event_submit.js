import { printNavbar } from "../../components/elements/navbar/navbar"
import { printPopup } from "../../components/elements/popups/popups"
import { printEvents } from "../../components/pages/events_section/events_section"
import { api } from "../../data/global_variables"
import { outroAnimation } from "../sections/intro_animation"

export const createEventSubmit = async () => {
  const eventName = document.querySelector("#event-name-input").value
  const eventLocation = document.querySelector("#event-location-input").value
  const eventDate = document.querySelector("#event-date-input").value
  console.log(eventDate)
  const eventDescription = document.querySelector("#event-description-input").value
  const eventCapacity = document.querySelector("#event-capacity-input").value
  const logedUser = JSON.parse(localStorage.getItem("user"));
  const data = await fetch(api+"events/new", {
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + logedUser.token
    },
    method: "POST",
    body: JSON.stringify({
      title: eventName,
      description: eventDescription,
      date: eventDate,
      location: eventLocation,
      capacity: eventCapacity
    })
  })

  console.log(data)

  const dataResponse = await data.json()

  
  if(data.status == 201){
    printPopup("event created", "green")

    const currentSection = document.querySelector("section")
    outroAnimation(currentSection)

    setTimeout(() => {
      printNavbar()
      printEvents()
    }, 400);

  } else {
    // alert(`error creating event`)

    printPopup("error " + data.status, "red")
  }

}
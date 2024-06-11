import "./create_event.css"
import "../../elements/forms/forms.css"
import { app } from "../../../data/global_variables"
import { createEventSubmit } from "../../../functions/create_event/create_event_submit"
import { clearSections } from "../../../functions/sections/clear_sections"
import { printBrand } from "../../elements/brand/at-events"
import { printIcon } from "../../elements/brand/icons"
import { introAnimation } from "../../../functions/sections/intro_animation"

export const printCreateEventSection = () => {
  
  const createEventSection = document.createElement("section")
  createEventSection.setAttribute("id", "create_event_section")
  createEventSection.style.top = "100svh"
  setTimeout(() => {
    app.append(createEventSection)
    printBrand()
  }, 400);


  const createEventTitleDiv = document.createElement("div")
  createEventTitleDiv.setAttribute("id", "create-event-title-div")
  createEventTitleDiv.classList.add("form-title-div")
  createEventSection.append(createEventTitleDiv)
  const createEventTitle = document.createElement("h2")
  createEventTitle.innerText = "create event"
  createEventTitle.classList.add("form-title")
  createEventTitle.setAttribute("id", "create-event-title")
  createEventTitleDiv.append(createEventTitle)

  const formElement = document.createElement("form")
  formElement.setAttribute("id", "create-event-form")
  formElement.classList.add("form-element")
  createEventSection.append(formElement)

  const eventNameDiv = document.createElement("div")
  eventNameDiv.classList.add("create-event-form-div")
  eventNameDiv.classList.add("form-div")
  eventNameDiv.setAttribute("id", "create-event-name-div")
  formElement.append(eventNameDiv)
  const nameLabel = document.createElement("label")
  nameLabel.setAttribute("for", "event-name-input")
  nameLabel.innerText = "event name"
  eventNameDiv.append(nameLabel)
  const eventNameInput = document.createElement("input")
  eventNameInput.setAttribute("type", "text")
  eventNameInput.setAttribute("placeholder", "event name")
  eventNameInput.setAttribute("id", "event-name-input")
  eventNameDiv.append(eventNameInput)

  const eventLocationDiv = document.createElement("div")
  eventLocationDiv.classList.add("create-event-form-div")
  eventLocationDiv.classList.add("form-div")
  eventLocationDiv.setAttribute("id", "create-event-location-div")
  formElement.append(eventLocationDiv)
  const locationLabel = document.createElement("label")
  locationLabel.setAttribute("for", "event-location-input")
  locationLabel.innerText = "event location"
  eventLocationDiv.append(locationLabel)
  const eventLocationInput = document.createElement("input")
  eventLocationInput.setAttribute("type", "text")
  eventLocationInput.setAttribute("placeholder", "event location")
  eventLocationInput.setAttribute("id", "event-location-input")
  eventLocationDiv.append(eventLocationInput)

  const eventDescriptionDiv = document.createElement("div")
  eventDescriptionDiv.classList.add("create-event-form-div")
  eventDescriptionDiv.classList.add("form-div")
  eventDescriptionDiv.setAttribute("id", "create-event-description-div")
  formElement.append(eventDescriptionDiv)
  const descriptionLabel = document.createElement("label")
  descriptionLabel.setAttribute("for", "event-description-input")
  descriptionLabel.innerText = "event description"
  eventDescriptionDiv.append(descriptionLabel)
  const eventDescriptionInput = document.createElement("input")
  eventDescriptionInput.setAttribute("type", "text")
  eventDescriptionInput.setAttribute("placeholder", "event description")
  eventDescriptionInput.setAttribute("id", "event-description-input")
  eventDescriptionDiv.append(eventDescriptionInput)

  const eventDateDiv = document.createElement("div")
  eventDateDiv.classList.add("create-event-form-div")
  eventDateDiv.classList.add("form-div")
  eventDateDiv.setAttribute("id","create-event-date-div")
  formElement.append(eventDateDiv)
  const dateLabel = document.createElement("label")
  dateLabel.setAttribute("for","event-date-input")
  dateLabel.innerText = "event date"
  eventDateDiv.append(dateLabel)
  const eventDateInput = document.createElement("input")
  eventDateInput.setAttribute("type", "date")
  eventDateInput.setAttribute("id", "event-date-input")
  eventDateDiv.append(eventDateInput)

  const eventCapacityDiv = document.createElement("div")
  eventCapacityDiv.classList.add("create-event-form-div")
  eventCapacityDiv.classList.add("form-div")
  eventCapacityDiv.setAttribute("id", "create-event-capacity-div")
  formElement.append(eventCapacityDiv)
  const capacityLabel = document.createElement("label")
  capacityLabel.setAttribute("for", "event-capacity-input")
  capacityLabel.innerText = "capacity"
  eventCapacityDiv.append(capacityLabel)
  const eventCapacityInput = document.createElement("input")
  eventCapacityInput.setAttribute("type", "number")
  eventCapacityInput.setAttribute("id", "event-capacity-input")
  eventCapacityInput.setAttribute("placeholder", "capacity")
  eventCapacityDiv.append(eventCapacityInput)

  const submitEventBtn = document.createElement("button")
  submitEventBtn.setAttribute("id", "submit-event-btn")
  submitEventBtn.classList.add("submit-btn")
  formElement.append(submitEventBtn)
  submitEventBtn.addEventListener("click", async (e)=> {
    e.preventDefault()
    await createEventSubmit()
  })
  const submitEventBtnText = document.createElement("p")
  submitEventBtnText.setAttribute("id", "submit-event-btn-text")
  submitEventBtnText.innerText = "publish"
  submitEventBtn.append(submitEventBtnText)
  const arrow = printIcon("https://res.cloudinary.com/dgrhbsilh/image/upload/v1716960281/14_RTC_P10_be-to-fe-js/icons/arrow_hfuzjx.png")
  arrow.classList.add("displaced")
  submitEventBtn.append(arrow)

  introAnimation(createEventSection)
}
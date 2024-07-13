import "./create_event.css"
import "../../elements/forms/forms.css"
import { app } from "../../../data/global_variables"
import { createEventSubmit } from "../../../functions/create_event/create_event_submit"
import { clearSections } from "../../../functions/sections/clear_sections"
import { printBrand } from "../../elements/brand/at-events"
import { printIcon } from "../../elements/brand/icons"
import { introAnimation } from "../../../functions/sections/intro_animation"
import { printPopup } from "../../elements/popups/popups"
import { createFormElement, createFormFieldNumber, createFormFieldSelect, createFormFieldText, createFormSubmitBtn } from "../../elements/forms/forms"

export const printCreateEventSection = () => {
  
  const createEventSection = document.createElement("section")
  createEventSection.setAttribute("id", "create_event_section")
  createEventSection.style.top = "100svh"
  setTimeout(() => {
    app.append(createEventSection)
    printBrand()
  }, 400);

  sessionStorage.setItem("currentPage", "create-event")


  const createEventTitleDiv = document.createElement("div")
  createEventTitleDiv.setAttribute("id", "create-event-title-div")
  createEventTitleDiv.classList.add("form-title-div")
  createEventSection.append(createEventTitleDiv)
  const createEventTitle = document.createElement("h2")
  createEventTitle.innerText = "create event"
  createEventTitle.classList.add("form-title")
  createEventTitle.setAttribute("id", "create-event-title")
  createEventTitleDiv.append(createEventTitle)

  const formElement = createFormElement("create-event", createEventSection)

  const eventNameDiv = createFormFieldText("create-event", "event-name", formElement, "text")

  const eventLocationDiv = createFormFieldText("create-event", "event-location", formElement, "text")

  const eventDescriptionDiv = createFormFieldText("create-event", "event-description", formElement, "text")

  const eventDateDiv = createFormFieldText("create-event", "event-date", formElement, "date")

  const eventCapacityDiv = createFormFieldNumber("create-event", "event-capacity", formElement, "capacity")

  // const eventColorDiv = document.createElement("div")
  // eventColorDiv.classList.add("create-event-form-div")
  // eventColorDiv.classList.add("form-div")
  // eventColorDiv.setAttribute("id", "create-event-color-div")
  // formElement.append(eventColorDiv)
  // const colorLabel = document.createElement("label")
  // colorLabel.setAttribute("for", "event-color-input")
  // colorLabel.innerText = "color"
  // eventColorDiv.append(colorLabel)
  // const eventColorInput = document.createElement("select")
  // // eventColorInput.setAttribute("type", "select")
  // eventColorInput.setAttribute("id", "event-color-input")
  // eventColorDiv.append(eventColorInput)
  // const colors = ["red", "yellow", "orange", "purple", "lightblue", "aquagreen", "white"]
  // colors.forEach(color => {
  //   const eventColorInputOpt = document.createElement("option")    
  //   eventColorInputOpt.setAttribute("value", color)
  //   eventColorInputOpt.innerText = color
  //   eventColorInput.append(eventColorInputOpt)
  // });

  const eventColorDiv = createFormFieldSelect("create-event", "color", formElement, ["red", "yellow", "orange", "purple", "lightblue", "aquagreen", "white"])

  const submitEventBtn = createFormSubmitBtn("create-event", formElement, "publish")
  submitEventBtn.addEventListener("click", async (e)=> {
    e.preventDefault()
    printPopup("Event submited, wait a second", "yellow")
      await createEventSubmit()
  })

  const arrow = printIcon("https://res.cloudinary.com/dgrhbsilh/image/upload/v1716960281/14_RTC_P10_be-to-fe-js/icons/arrow_hfuzjx.png")
  arrow.classList.add("displaced")
  submitEventBtn.append(arrow)

  introAnimation(createEventSection)
}
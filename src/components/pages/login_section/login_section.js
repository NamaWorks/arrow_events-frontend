import "../../elements/forms/forms.css"
import "./login_section.css"

import { app } from "../../../data/global_variables";
import { loginSubmit } from "../../../functions/login/login_submit";
import { clearSections } from "../../../functions/sections/clear_sections";
import { printBrand } from "../../elements/brand/at-events";
import { introAnimation } from "../../../functions/sections/intro_animation";
import { createFormFieldText, createFormSubmitBtn } from "../../elements/forms/forms";
import { createEventSubmit } from "../../../functions/create_event/create_event_submit";

export const printLogin = () => {
  clearSections()
  sessionStorage.setItem("currentPage", "login")
  const loginSection = document.createElement("section")
  loginSection.setAttribute("id", "login_section")
  loginSection.style.top = "100svh"
  setTimeout(() => {
    app.append(loginSection)
    printBrand()
  }, 400);


  const loginTitleDiv = document.createElement("div")
  loginTitleDiv.setAttribute("id", "login-title-div")
  loginTitleDiv.classList.add("form-title-div")
  loginSection.append(loginTitleDiv)
  const loginTitle = document.createElement("h2")
  loginTitle.innerText = "login"
  loginTitle.classList.add("form-title")
  loginTitle.setAttribute("id", "create-event-title")
  loginTitleDiv.append(loginTitle)

  const formElement = document.createElement("form")
  formElement.setAttribute("id", "login-form")
  formElement.classList.add("form-element")
  loginSection.append(formElement)


  createFormFieldText("login", "username", formElement, "text")


  createFormFieldText("login", "password", formElement, "password")

  const submitLoginBtn = createFormSubmitBtn("login", formElement, "enter")
  submitLoginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    loginSubmit()
  })


  introAnimation(loginSection)
}
import "../../elements/forms/forms.css"
import "./signup_section.css"

import { app } from "../../../data/global_variables"
import { clearSections } from "../../../functions/sections/clear_sections"
import { signupSubmit } from "../../../functions/signup/signup_submit"
import { printBrand } from "../../elements/brand/at-events"
import { introAnimation } from "../../../functions/sections/intro_animation"
import { printPopup } from "../../elements/popups/popups"
import { loginSubmitFromSignUp } from "../../../functions/signup/login_submit_from_signup"
import { createFormElement, createFormFieldText, createFormSubmitBtn, createPfpFormField } from "../../elements/forms/forms"

export const printSignup = () => {
  clearSections()
  sessionStorage.setItem("currentPage", "signup")
  const signupSection = document.createElement("section")
  signupSection.setAttribute("id", "signup_section")
  signupSection.style.top = "100svh"
  setTimeout(() => {
    printBrand()
    app.append(signupSection)
  }, 400);

  const formElement = createFormElement("signup", signupSection)

  const pfpInput = createPfpFormField("signup", formElement)

  createFormFieldText("signup", "username", formElement, "text")

  createFormFieldText("signup", "email", formElement, "email")

  createFormFieldText("signup", "password", formElement, "password")

  const submitSignupBtn = createFormSubmitBtn("signup", formElement, "sign up")
  submitSignupBtn.addEventListener("click", async (e) => {
    e.preventDefault()
    printPopup("Signup submited, wait a second", "yellow")
    let signupStatus = await signupSubmit()
    console.log(signupStatus)
    signupStatus = 201 ? loginSubmitFromSignUp() : console.log(`something went wrong`)
  })

  introAnimation(signupSection)
}
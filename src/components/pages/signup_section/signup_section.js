import "../../elements/forms/forms.css"
import "./signup_section.css"

import { app } from "../../../data/global_variables"
import { clearSections } from "../../../functions/sections/clear_sections"
import { signupSubmit } from "../../../functions/signup/signup_submit"
import { printBrand } from "../../elements/brand/at-events"
import { introAnimation } from "../../../functions/sections/intro_animation"
import { printPopup } from "../../elements/popups/popups"
import { loginSubmitFromSignUp } from "../../../functions/signup/login_submit_from_signup"

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


  const signupTitleDiv = document.createElement("div")
  signupTitleDiv.classList.add("form-title-div")
  signupTitleDiv.setAttribute("id", "signup-title-div")
  signupSection.append(signupTitleDiv)
  const signupTitle = document.createElement("h2")
  signupTitle.innerText = "signup"
  signupTitle.classList.add("form-title")
  signupTitleDiv.append(signupTitle)

  const formElement = document.createElement("form")
  formElement.setAttribute("id", "signup-form")
  formElement.classList.add("form-element")
  signupSection.append(formElement)

  const pfpDiv = document.createElement("div")
  pfpDiv.classList.add("form-div")
  pfpDiv.classList.add("signup-form-div")
  pfpDiv.setAttribute("id", "signup-image-input")
  formElement.append(pfpDiv)
  const pfpLabel = document.createElement("label")
  pfpLabel.setAttribute("for", "pfp-input")
  // pfpLabel.innerText = "profile picture"
  pfpLabel.innerHTML = "profile picture <span class='pfp-note'>click to add</span>"
  pfpDiv.append(pfpLabel)
  const pfpInput = document.createElement("input")
  pfpInput.setAttribute("id", "pfp-input")
  pfpInput.setAttribute("type", "file")  
  pfpInput.setAttribute("accept", "image/png, image/jpg")
  pfpDiv.append(pfpInput)

  pfpInput.addEventListener("change", ()=>{ pfpInput.value ? pfpLabel.innerHTML = "profile picture <span class='pfp-note'>already added</span>" : pfpLabel.innerHTML = "profile picture <span class='pfp-note'>click to add</span>"})
  


  const usernameDiv = document.createElement("div")
  usernameDiv.classList.add("form-div")
  usernameDiv.classList.add("signup-form-div")
  usernameDiv.setAttribute("id", "signup-username-div")
  formElement.append(usernameDiv)
  const usernameLabel = document.createElement("label")
  usernameLabel.setAttribute("for", "signup-username-input")
  usernameLabel.innerText = "username"
  usernameDiv.append(usernameLabel)
  const usernameInput = document.createElement("input")
  usernameInput.setAttribute("type", "text")
  usernameInput.setAttribute("placeholder", "username")
  usernameInput.setAttribute("id", "signup-username-input")
  usernameDiv.append(usernameInput)

  const emailDiv = document.createElement("div")
  emailDiv.classList.add("form-div")
  emailDiv.classList.add("signup-form-div")
  emailDiv.setAttribute("id", "signup-email-div")
  formElement.append(emailDiv)
  const emailLabel = document.createElement("label")
  emailLabel.setAttribute("for", "signup-email-input")
  emailLabel.innerText = "email"
  emailDiv.append(emailLabel)
  const emailInput = document.createElement("input")
  emailInput.setAttribute("type", "email")
  emailInput.setAttribute("placeholder", "your@email.com")
  emailInput.setAttribute("id", "signup-email-input")
  emailDiv.append(emailInput)

  const passwordDiv = document.createElement("div")
  passwordDiv.classList.add("form-div")
  passwordDiv.classList.add("signup-form-div")
  passwordDiv.setAttribute("id", "signup-password-div")
  formElement.append(passwordDiv)
  const passwordLabel = document.createElement("label")
  passwordLabel.setAttribute("for", "signup-password-input")
  passwordLabel.innerText = "password"
  passwordDiv.append(passwordLabel)
  const passwordInput = document.createElement("input")
  passwordInput.setAttribute("type", "password")
  passwordInput.setAttribute("placeholder", "password")
  passwordInput.setAttribute("id", "signup-password-input")
  passwordDiv.append(passwordInput)

  const submitSignupBtn = document.createElement("button")
  submitSignupBtn.classList.add("submit-btn")
  submitSignupBtn.setAttribute("id", "submit-signup-btn")
  submitSignupBtn.addEventListener("click", async (e) => {
    e.preventDefault()
    printPopup("Signup submited, wait a second", "yellow")
    let signupStatus = await signupSubmit()
    console.log(signupStatus)
    signupStatus = 201 ? loginSubmitFromSignUp() : console.log(`something went wrong`)
  })
  formElement.append(submitSignupBtn)
  const submitSignupBtnText = document.createElement("p")
  submitSignupBtnText.innerText = "sign up"
  submitSignupBtn.append(submitSignupBtnText)

  introAnimation(signupSection)
}
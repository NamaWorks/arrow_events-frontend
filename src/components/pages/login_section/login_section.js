import "../../elements/forms/forms.css"
import "./login_section.css"

import { app } from "../../../data/global_variables";
import { loginSubmit } from "../../../functions/login/login_submit";
import { clearSections } from "../../../functions/sections/clear_sections";
import { printBrand } from "../../elements/brand/at-events";
import { introAnimation } from "../../../functions/sections/intro_animation";

export const printLogin = () => {
  clearSections()
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

  const usernameDiv = document.createElement("div")
  usernameDiv.classList.add("login-form-div")
  usernameDiv.classList.add("form-div")
  usernameDiv.setAttribute("id", "login-username-div")
  formElement.append(usernameDiv)
  const usernameLabel = document.createElement("label")
  usernameLabel.setAttribute("for", "login-username-input")
  usernameLabel.innerText = "username"
  usernameDiv.append(usernameLabel)
  const usernameInput = document.createElement("input")
  usernameInput.setAttribute("type", "text")
  usernameInput.setAttribute("placeholder", "username")
  usernameInput.setAttribute("id", "login-username-input")
  usernameDiv.append(usernameInput)

  const passwordDiv = document.createElement("div")
  passwordDiv.classList.add("login-form-div")
  passwordDiv.classList.add("form-div")
  passwordDiv.setAttribute("id", "login-password-div")
  formElement.append(passwordDiv)
  const passwordLabel = document.createElement("label")
  passwordLabel.setAttribute("for", "login-password-input")
  passwordLabel.innerText = "password"
  passwordDiv.append(passwordLabel)
  const passwordInput = document.createElement("input")
  passwordInput.setAttribute("type", "password")
  passwordInput.setAttribute("placeholder", "password")
  passwordInput.setAttribute("id", "login-password-input")
  passwordDiv.append(passwordInput)

  const submitLoginBtn = document.createElement("button")
  submitLoginBtn.setAttribute("id", "submit-login-btn")
  submitLoginBtn.classList.add("submit-btn")
  submitLoginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    loginSubmit()
  })
  formElement.append(submitLoginBtn)
  const submitLoginBtnP = document.createElement("p")
  submitLoginBtnP.innerText = "enter"
  submitLoginBtn.append(submitLoginBtnP)


  introAnimation(loginSection)
}
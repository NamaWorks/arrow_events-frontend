
import "./edit_profile_section.css"

import { api, app } from "../../../data/global_variables"
import { deactivateAccount } from "../../../functions/edit_profile/deactivate_account"
import { submitProfileChanges } from "../../../functions/edit_profile/edit_profile_submit"
import { clearSections } from "../../../functions/sections/clear_sections"
import { introAnimation } from "../../../functions/sections/intro_animation"
import { printPopup } from "../../elements/popups/popups"
import { createFormElement, createFormFieldText, createFormSubmitBtn, createPfpFormField } from "../../elements/forms/forms"

export const printEditProfileSection = async () => {
  clearSections()

  sessionStorage.setItem("currentPage", "edit-profile")

  const user = localStorage.getItem("user")

  const userJson = JSON.parse(user)
  const userId = userJson.user._id
  
  const userFetch = await fetch(api+"users/" + userId)
  const userResponse = await userFetch.json()

  const editProfileSection = document.createElement("section")
  editProfileSection.setAttribute("id", "loged-user-sectiown")
  editProfileSection.classList.add("user-section")
  editProfileSection.style.top = "100svh"

  setTimeout(() => {
    app.append(editProfileSection)
  }, 400);

  const {profilePicture} = userResponse

  const formElement = createFormElement("edit-profile", editProfileSection)

  const profilePictureDiv = document.createElement("div")
  profilePictureDiv.setAttribute("id", "user-pfp-div")
  profilePictureDiv.classList.add("user-image-div")
  formElement.append(profilePictureDiv)

  const img = document.createElement("img")
  img.setAttribute("src" , profilePicture)
  profilePictureDiv.append(img)

  const changePfpDiv = createPfpFormField("edit-profile", formElement)

  const usernameDiv = createFormFieldText("edit-profile", "username", formElement, "text")
  
  const passwordDiv = createFormFieldText("edit-profile", "password", formElement, "password")

  const submitChangesBtn = createFormSubmitBtn("edit-profile", formElement, "submit changes")
  submitChangesBtn.addEventListener("click", (e) => {
    e.preventDefault()
    printPopup("Change in user submited, wait a second", "yellow")
    submitProfileChanges()
  } )

if(userJson.user.active){
  const deactivateAccountBtn = document.createElement("button")
  deactivateAccountBtn.setAttribute("id", "deactivate-acc-btn")
  deactivateAccountBtn.innerText = "deactivate account"
  deactivateAccountBtn.classList.add("std-btn")
  deactivateAccountBtn.addEventListener("click", (e) =>{
    e.preventDefault()
    deactivateAccount()
  })
  formElement.append(deactivateAccountBtn)
}

introAnimation(editProfileSection)
}
import "../../elements/buttons/std_buttons.css"
import "../user_page/user_section.css"
import "../../elements/forms/forms.css"
import "./edit_profile_section.css"

import { api, app } from "../../../data/global_variables"
import { deactivateAccount } from "../../../functions/edit_profile/deactivate_account"
import { submitProfileChanges } from "../../../functions/edit_profile/edit_profile_submit"
import { clearSections } from "../../../functions/sections/clear_sections"
import { introAnimation } from "../../../functions/sections/intro_animation"
import { printPopup } from "../../elements/popups/popups"

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
  const {email} = userResponse
  const {username} = userResponse

  const formElement = document.createElement("form")
  formElement.setAttribute("id", "edit-profile-form")
  editProfileSection.append(formElement)

  const profilePictureDiv = document.createElement("div")
  profilePictureDiv.setAttribute("id", "user-pfp-div")
  profilePictureDiv.classList.add("user-image-div")
  formElement.append(profilePictureDiv)

  const img = document.createElement("img")
  img.setAttribute("src" , profilePicture)
  profilePictureDiv.append(img)

  const changePfpDiv = document.createElement("div")
  changePfpDiv.classList.add("form-div")
  changePfpDiv.setAttribute("id", "change-pfp-div")
  formElement.append(changePfpDiv)
  const changeProfilePictureLabel = document.createElement("label")
  changeProfilePictureLabel.setAttribute("for", "change-pfp-input")
  // changeProfilePictureLabel.innerText = "change profile picture"
  
  const changeProfilePictureInput = document.createElement("input")
  changeProfilePictureInput.setAttribute("id", "change-pfp-input")
  changeProfilePictureInput.setAttribute("type", "file")
  changeProfilePictureInput.setAttribute("accept", "image/png, image/jpg")
  changePfpDiv.append(changeProfilePictureInput)
  
    changeProfilePictureLabel.innerHTML = "change profile picture <span class='pfp-note'>click to add</span>"
    changeProfilePictureInput.addEventListener("change", ()=>{ changeProfilePictureInput.value ? changeProfilePictureLabel.innerHTML = "change profile picture <span class='pfp-note'>already added</span>" : changeProfilePictureLabel.innerHTML = "change profile picture <span class='pfp-note'>click to add</span>"})
    changePfpDiv.append(changeProfilePictureLabel)


  const usernameDiv = document.createElement("div")
  usernameDiv.classList.add("form-div")
  usernameDiv.setAttribute("id" , "change-username-div")
  formElement.append(usernameDiv)
  const changeUsernameLabel = document.createElement("label")
  changeUsernameLabel.setAttribute("for", "change-username-input") 
  changeUsernameLabel.innerText = "change username"
  usernameDiv.append(changeUsernameLabel)
  const changeUsernameInput = document.createElement("input")
  changeUsernameInput.setAttribute("type", "text")
  changeUsernameInput.setAttribute("id","change-username-input")
  changeUsernameInput.setAttribute("placeholder", "new username")
  usernameDiv.append(changeUsernameInput)
  
  const passwordDiv = document.createElement("div")
  passwordDiv.classList.add("form-div")
  passwordDiv.setAttribute("id", "change-password-div")
  formElement.append(passwordDiv)
  const changePasswordLabel = document.createElement("label")
  changePasswordLabel.setAttribute("for", "change-password-input")
  changePasswordLabel.innerText = "change password"
  passwordDiv.append(changePasswordLabel)
  const changePasswordInput = document.createElement("input")
  changePasswordInput.setAttribute("type", "text")
  changePasswordInput.setAttribute("id", "change-password-input")
  changePasswordInput.setAttribute("placeholder", "change password")
  passwordDiv.append(changePasswordInput)

  const submitChangesBtn = document.createElement("button")
  submitChangesBtn.setAttribute("id", "save-changes-btn")
  submitChangesBtn.classList.add("std-btn")
  
  submitChangesBtn.addEventListener("click", (e) => {
    e.preventDefault()
    printPopup("Change in user submited, wait a second", "yellow")
    submitProfileChanges()
  } )
formElement.append(submitChangesBtn)
const submitChangesBtnText = document.createElement("p")
submitChangesBtnText.innerText = "submit changes"
submitChangesBtn.append(submitChangesBtnText)

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
} // else if (!userJson.user.active){
  // const activateAccountBtn = document.createElement("button")
  // activateAccountBtn.setAttribute("id", "activate-acc-btn")
  // activateAccountBtn.innerText = "activate account"
  // // prepare event listener for this button
  // activateAccountBtn.addEventListener("click", (e) =>{
  //   e.preventDefault()

  // })
  // formElement.append(activateAccountBtn)
// }

introAnimation(editProfileSection)
}
import { printPopup } from "../../components/elements/popups/popups"
import { api } from "../../data/global_variables"
import { logoutSubmit } from "../logout/logout_submit"

export const submitProfileChanges = async () => {
  const user = JSON.parse(localStorage.getItem("user")).user
  const token = JSON.parse(localStorage.getItem("user")).token
  let currentUsername = user.username
  let currentPassword = user.password

  let newUsername = document.querySelector("#change-username-input").value
  let newPassword = document.querySelector("#change-password-input").value
  let newPfp = document.querySelector("#change-pfp-input").files[0]
  
  if(newUsername == ""){
    newUsername = currentUsername
  }

  const formData = new FormData()
  formData.append("username", newUsername)
  formData.append("password", newPassword)
  formData.append("profilePicture", newPfp)

  const data = await fetch(`${api}users/update/${user._id}`, {
    headers: {
      //  "Content-type": "application/json",
       "Authorization": "Bearer " + token
    },
    method: "PUT",
    body: formData
  })


  const dataResponse = await data.json()
  if(data.status == 200) {
    printPopup("user data updated", "green")
    // alert(`user data updated`)
    setTimeout(() => {
      logoutSubmit()
    }, 600);
  } else {
    printPopup("error at saving changes", "red")
    // alert(`error at saving changes`) 
    // console.log(data.message)
  }
}
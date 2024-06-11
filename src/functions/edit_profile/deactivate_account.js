import { printPopup } from "../../components/elements/popups/popups"
import { printEvents } from "../../components/pages/events_section/events_section"
import { api } from "../../data/global_variables"
import { logoutSubmit } from "../logout/logout_submit"

export const deactivateAccount = async () => {
  const userEl = JSON.parse(localStorage.getItem("user"))
  const userId = userEl.user._id
  const token = userEl.token

  console.log(userEl)
  


  const data = await fetch(api + "users/update/" + userId, {
    headers: {
      "Content-type": "application/json",
      "Authorization": "Bearer " + token
    },
    method: "PUT",
    body: JSON.stringify({
      username : userEl.user.username,
      email : userEl.user.email,
      password : userEl.user.password,
      profilePicture : userEl.user.profilePicture,
      role : userEl.user.role,
      active: false,
    })
  })

  const dataResponse = await data.json()
  if(data.status == 200) {
    // alert(`user deleted`)
    printPopup("user deactivated", "green")
    console.log(dataResponse)
    setTimeout(() => {
      logoutSubmit()
    }, 450);
  } else {
    // alert(`error at saving changes`)
    printPopup("error at saving changes", "red")
  }
}
import { printNavbar } from "../../components/elements/navbar/navbar"
import { printPopup } from "../../components/elements/popups/popups"
import { printEvents } from "../../components/pages/events_section/events_section"
import { api } from "../../data/global_variables"
import { outroAnimation } from "../sections/intro_animation"

 export const loginSubmitFromSignUp = async () => {
  const username = document.querySelector("#signup-username-input").value;
  const password = document.querySelector("#signup-password-input").value;
  console.log(username + password)
  const data = await fetch(api+"users/login", {
    headers: {
      "Content-type" : "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      username: username,
      password:password
    })
  })

  
  const dataResponse = await data.json()
  
  if(data.status == 200){
    localStorage.setItem("user", JSON.stringify(dataResponse))
    // sessionStorage.setItem("user", dataResponse.token)
    printPopup("welcome " + username + "!", "green")
    // alert(`welcome ${username}`)
  
    const signupSection = document.querySelector("#signup_section")
    outroAnimation(signupSection)
    setTimeout(() => {
    signupSection.remove()
      printNavbar()
      printEvents()
    }, 400);
  
  } else { 
    console.log(dataResponse)
    // alert(`username or password incorrect`) 
    printPopup("username or password incorrect", "red")
  }

  
}


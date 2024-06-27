
import { logoutSubmit } from "../../../functions/logout/logout_submit"
import { outroAnimation } from "../../../functions/sections/intro_animation"
import { printCreateEventSection } from "../../pages/create_event/create_event_section"
import { printEvents } from "../../pages/events_section/events_section"
import { printLogin } from "../../pages/login_section/login_section"
import { printSignup } from "../../pages/signup_section/signup_section"
import { printLogedUserSection } from "../../pages/user_page/user_section"

export const checkNavbar = () => {

  if(localStorage.getItem("user")){
    if(document.getElementById("login-li")){document.getElementById("login-li").remove()}
    if(document.getElementById("signup-li")){document.getElementById("signup-li").remove()}
  } else if(!localStorage.getItem("user")){
    if(document.getElementById("logout-li")) {document.getElementById("logout-li").remove()}
    if(document.getElementById("user-li")) {document.getElementById("user").remove()}
    if(document.getElementById("create_event-li")) {document.getElementById("create_event-li").remove()}
    if(document.getElementById("user-li")) {document.getElementById("user-li").remove()}
  }


  if(document.getElementById("logout")) {document.getElementById("logout").addEventListener("click", function (){
    const currentSection = document.querySelector("section")
    outroAnimation(currentSection)
    logoutSubmit()
  })}

  if(document.getElementById("signup")) {document.getElementById("signup").addEventListener("click", function (){
    const currentSection = document.querySelector("section")
    outroAnimation(currentSection)
    printSignup()
  })}

  if(document.getElementById("events")) {

    document.getElementById("events").addEventListener("click", function (){
      const currentSection = sessionStorage.getItem("currentPage")
      if(!(currentSection == "events")){
        const currentSection = document.querySelector("section")
        outroAnimation(currentSection)
        printEvents()
      }
  })
}



  if(document.getElementById("login")) {document.getElementById("login").addEventListener("click", function (){
    const currentSection = document.querySelector("section")
outroAnimation(currentSection)
    printLogin()
  })}

  if(document.getElementById("create_event")) {document.getElementById("create_event").addEventListener("click", function (){
    const currentSection = document.querySelector("section")
outroAnimation(currentSection)
    printCreateEventSection()
  })}

  if(document.getElementById("user")) {document.getElementById("user").addEventListener("click", function (){
    const currentSection = document.querySelector("section")
outroAnimation(currentSection)
    printLogedUserSection()
  })}
}


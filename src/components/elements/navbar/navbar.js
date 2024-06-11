import "./navbar.css"

import { data } from "../../../data/data"
import { app } from "../../../data/global_variables"
import { checkNavbar } from "./navbar_checker"
import { navigate } from "../../../router/navigate"

export const printNavbar = () => {

  if(document.querySelector("nav")){
    document.querySelector("nav").remove()
  }

  let nav = document.createElement("nav")

  let ulNav = document.createElement("ul")
  ulNav.classList.add("ul-nav")

  nav.append(ulNav)

  for (const navElement in data.navItems) {
    const squareDiv = document.createElement("div")
    squareDiv.classList.add("color-nav-item")
    squareDiv.setAttribute("id", `${navElement}-color-square`)
    const li = document.createElement("li")
    li.classList.add("nav-li")
    li.setAttribute("id", `${navElement}-li`)
    const btnLi = document.createElement("button")
    btnLi.setAttribute("id", `${navElement}`)
    btnLi.setAttribute("href", `/${navElement}`)
    
    btnLi.innerText = data.navItems[navElement].text;

    const { page, text, path } = data.navItems[navElement]

    btnLi.addEventListener("click", (e) => {navigate({ e, page, text, path })})
    
    li.append(squareDiv)
    li.append(btnLi)
    ulNav.append(li)
  }

  app.insertBefore(nav, app.firstChild)

  checkNavbar()
  
}
import "./std_buttons.css"

export const createStdBtn = (section, innerText, classToAdd) => {


  const newBtn = document.createElement("button")
  newBtn.innerText = innerText

  section.append(newBtn)

  newBtn.classList.add(classToAdd)
  newBtn.classList.add("std-btn")

  return newBtn
}
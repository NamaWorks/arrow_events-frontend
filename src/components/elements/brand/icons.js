import "./icons.css"

export const printIcon = (url) => {
  const iconDiv = document.createElement("div")
  iconDiv.classList.add("icon-div")
  const iconImg = document.createElement("img")
  iconImg.setAttribute("src", url)
  iconImg.setAttribute("alt", "icon")
  iconImg.classList.add("icon")
  iconDiv.append(iconImg)

  return iconDiv
}

// X => https://res.cloudinary.com/dgrhbsilh/image/upload/v1716960281/14_RTC_P10_be-to-fe-js/icons/x_umxuk7.png

// arrow=> https://res.cloudinary.com/dgrhbsilh/image/upload/v1716960281/14_RTC_P10_be-to-fe-js/icons/arrow_hfuzjx.png
const colors = ["red", "yellow", "orange", "purple", "lightblue", "aquagreen", "white"]

export function setRandomColorClass (div) {
  let randomIndex = Math.floor(Math.random() * colors.length)
  div.classList.add(colors[randomIndex])
}
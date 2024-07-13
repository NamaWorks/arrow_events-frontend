import "./forms.css"

export const createFormFieldText = (section, field, container, type) => {
  const formFieldDiv = document.createElement("div")
  formFieldDiv.classList.add("form-div")
  formFieldDiv.classList.add(`${section}-form-div`)
  formFieldDiv.setAttribute("id", `${section}-${field}-div`)
  container.append(formFieldDiv)

  const formFieldLabel = document.createElement("label")
  formFieldLabel.setAttribute("for", `${section}-${field}-input`)
  formFieldLabel.innerText = field
  formFieldDiv.append(formFieldLabel)

  const formFieldInput = document.createElement("input")
  formFieldInput.setAttribute("type", `${type}`)
  formFieldInput.setAttribute("placeholder", `${field}`)
  formFieldInput.setAttribute("id", `${section}-${field}-input`)
  formFieldDiv.append(formFieldInput)

  return formFieldDiv
}

export const createFormSubmitBtn = (section, container, innerText) => {
  const submitBtn = document.createElement("button")
  submitBtn.classList.add("submit-btn")
  submitBtn.setAttribute("id", `submit-${section}-btn`)

  const submitBtnText = document.createElement("p")
  submitBtnText.innerText = innerText
  submitBtn.append(submitBtnText)

  container.append(submitBtn)

  return submitBtn
}

export const createFormElement = (section, container) => {
  const formElement = document.createElement("form")
  formElement.setAttribute("id", `${section}-form`)
  formElement.classList.add("form-element")
  container.append(formElement)
   return formElement
}

export const createPfpFormField = (section, container) => {
  const pfpDiv = document.createElement("div")
  pfpDiv.classList.add("form-div")
  pfpDiv.classList.add(`${section}-form-div`)
  pfpDiv.setAttribute("id", `${section}-image-div`)
  container.append(pfpDiv)

  const pfpLabel = document.createElement("label")
  pfpLabel.setAttribute("for", "pfp-input")
  pfpLabel.innerHTML = "profile picture <span class='pfp-note'>click to add</span>"
  pfpDiv.append(pfpLabel)

  const pfpInput = document.createElement("input")
  pfpInput.setAttribute("id" ,"pfp-input")
  pfpInput.setAttribute("type", "file")
  pfpInput.setAttribute("accept", "image/png, image/jpg")
  pfpDiv.append(pfpInput)

  pfpInput.addEventListener("change", ()=>{ pfpInput.value ? pfpLabel.innerHTML = "profile picture <span class='pfp-note'>already added</span>" : pfpLabel.innerHTML = "profile picture <span class='pfp-note'>click to add</span>"})

  return pfpInput
}

export const createFormFieldNumber = (section, field, container, innerText) => {
  const numberFieldDiv = document.createElement("div")
  numberFieldDiv.classList.add(`${section}-form-div`)
  numberFieldDiv.classList.add("form-div")
  numberFieldDiv.setAttribute("id", `${section}-capacity-div`)
  container.append(numberFieldDiv)

  const numberFieldLabel = document.createElement("label")
  numberFieldLabel.setAttribute("for", `${section}-${field}-input`)
  numberFieldLabel.innerText = innerText
  numberFieldDiv.append(numberFieldLabel)

  const numberFieldInput = document.createElement("input")
  numberFieldInput.setAttribute("type", "number")
  numberFieldInput.setAttribute("id", `${section}-${field}-input`)
  numberFieldInput.setAttribute("placeholder", field)
  numberFieldDiv.append(numberFieldInput)
}

export const createFormFieldSelect = (section, field, container, options) => {
  const selectFieldDiv = document.createElement("div")
  selectFieldDiv.classList.add(`${section}-form-div`)
  selectFieldDiv.classList.add("form-div")
  selectFieldDiv.setAttribute("id", `${section}-${field}-div`)
  container.append(selectFieldDiv)

  const selectLabel = document.createElement("label")
  selectLabel.setAttribute("for", `${section}-${field}-label`)
  selectLabel.innerText = field
  selectFieldDiv.append(selectLabel)

  const selectInput = document.createElement("select")
  selectInput.setAttribute("id", `${section}-${field}-input`)
  selectFieldDiv.append(selectInput)

  options.forEach(item => {
    const itemOption = document.createElement("option")
    itemOption.setAttribute("value", item)
    itemOption.innerText = item
    selectInput.append(itemOption)
  });
}
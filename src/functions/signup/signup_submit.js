import { printPopup } from "../../components/elements/popups/popups";
import { printLogin } from "../../components/pages/login_section/login_section";
import { api } from "../../data/global_variables";
import { outroAnimation } from "../sections/intro_animation";

export const signupSubmit = async () => {
  const username = document.querySelector("#signup-username-input").value;
  const password = document.querySelector("#signup-password-input").value;
  const email = document.querySelector("#signup-email-input").value;
  // En el caso de la imagen, tendremos que usar otra clave del nodo, ya que value nos dará un fakepath
  const profilePicture = document.querySelector("#pfp-input").files[0]

  const formData = new FormData()
  formData.append("username",username)
  formData.append("password", password)
  formData.append("email", email)
  formData.append("profilePicture", profilePicture)
  const data = await fetch(api+"users/new", {
    // headers: {
    //   "Content-type": "multipart/form-data",
    // },
    method: "POST",
    body: formData
  });
  const dataResponse = await data.json();
  console.log(dataResponse)

  if(data.status == 201){
    printPopup("signed up succesfully", "green")
    // const currentSection = document.querySelector("section")
    // outroAnimation(currentSection)
    // setTimeout(() => {
    // currentSection.remove()
    //   printLogin()
    // }, 400);
    return data.status
  } else { 
    printPopup("error at signup", "red")
    return data.status
    // alert(`error at signup`) 
  }
  
}
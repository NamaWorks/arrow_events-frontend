export const clearSections = () => {
  const sections = document.querySelectorAll("section")
  sections.forEach((section) => {
    setTimeout(() => {
      section.remove() 
    }, 450);
  })
}
export const typewriter = (p) => {
  const speed = 5
  let pArr = p.innerHTML.split("")
  p.innerHTML = ""

  let i = 0
  let pJoint = pArr.join("")
  
    const typewriterIn = () => {      
      if(i<pJoint.length) {
        setTimeout(() => {
          p.innerHTML += pJoint.charAt(i)
          i++
          setTimeout(typewriterIn, speed)
        }, 20);
      }
    }
    typewriterIn()
    
}
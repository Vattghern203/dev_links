const toggleSwitch = document.querySelector("#toggle-switch")
const body = document.body
const profileAvatar = document.querySelector("#profile__avatar")

toggleSwitch.addEventListener("click", () => {
  
  body.classList.toggle('light')

  const functionDelayed = setTimeout(changeAvatar, 650)

  functionDelayed()
})

function changeAvatar () {

  return body.classList.contains("light") ? profileAvatar.setAttribute('src', "assets/img/avatar-light.jpg") : profileAvatar.setAttribute('src', "assets/img/avatar.jpg")
}
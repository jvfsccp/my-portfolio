const hamburguerIcon = document.querySelector(".hamburger")
const navItems = document.querySelector("header nav ul")

hamburguerIcon.addEventListener("click", () => {
  navItems.classList.toggle("show")
})

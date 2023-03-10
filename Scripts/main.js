const hamburger = document.querySelector(".hamburger");
const nav_link_container = document.querySelector(".nav_link_container");

hamburger.addEventListener("click", ()=>{
  hamburger.classList.toggle("active");
  nav_link_container.classList.toggle("active");
})

.document.querySelectorAll(".nav_link_container").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  nav_link_container.classList.remove("active");
}))
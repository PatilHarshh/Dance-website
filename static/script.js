let menubar = document.querySelector("#menu")
// let menubar = document.getElementById('menu-bar')
let navv = document.querySelector(".navbar")
let searchbar = document.querySelector("#searchbar")
let bar = document.querySelector("#search-form")

menubar.onclick = ()=>{
  navv.classList.toggle('active')
  menubar.classList.toggle('fa-times')

}
searchbar.onclick = ()=>{
  bar.classList.toggle('active')
}
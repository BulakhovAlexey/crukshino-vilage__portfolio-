// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js"
// Підключення списку активних модулів
import { flsModules } from "./modules.js"

//elem hover
const elements = document.querySelectorAll(".element__item")
const parentElements = document.querySelector(".element")
const description = document.querySelector(".element__desc")
let descriptionHeight = description.clientHeight
let descriptionWidth = description.clientWidth
let wrap = document.querySelector(".interactice-map__wrap")
let title = document.querySelector(".description__title > span")
let price = document.querySelector(".description__price-num")
let area = document.querySelector(".description__area-num > span")
let logo = document.querySelector(".description__round")
let areaVillage = document.querySelector(
  ".description__area-village-num > span"
)
function showDesc(element) {
  title.innerHTML = element.innerHTML
  logo.innerHTML = element.innerHTML
  area.innerHTML = element.dataset.area + " "
  areaVillage.innerHTML = element.dataset.village + " "
  element.dataset.price !== undefined
    ? (price.innerHTML = element.dataset.price)
    : (price.innerHTML = "по запросу")
  let descriptionHeight = description.clientHeight
  description.style.top =
    element.offsetTop + 40 + descriptionHeight > 750
      ? element.offsetTop - descriptionHeight + "px"
      : element.offsetTop + 40 + "px"
  description.style.left = element.offsetLeft - 60 + "px"
  description.style.opacity = "1"
  description.style.visibility = "visible"
  element.style.opacity = "0"
}
function hideDesc(element) {
  description.style.opacity = "0"
  description.style.visibility = "hidden"
  element.style.opacity = "1"
}

// if hover / click
function openDesc() {
  if (!isMobile.any()) {
    elements.forEach((element) => {
      if (element.classList.contains("_free")) {
        element.addEventListener("mouseover", () => {
          showDesc(element)
        })
        element.addEventListener("mouseout", () => {
          hideDesc(element)
        })
      }
    })
  } else {
    parentElements.addEventListener("click", (e) => {
      if (!e.target.classList.contains("element__item")) {
        description.style.opacity = "0"
        description.style.visibility = "hidden"
      }
      if (e.target.classList.contains("_free")) {
        e.preventDefault()
        showDesc(e.target)
        e.target.style.opacity = "1"
      }
    })
  }
}
openDesc()
//========================================================================================================================================================
//zoom cart
let buttons = document.querySelector(".zoom")
let buttomPlus = document.querySelector(".zoom-plus")
let buttomMinus = document.querySelector(".zoom-minus")
wrap.style.zoom = 100 + "%"
buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("zoom-plus")) {
    buttomMinus.classList.remove("_disabled")
    let zoomArr = wrap.style.zoom.split("%")
    console.log(zoomArr)
    if (zoomArr[0] != 140) {
      wrap.style.zoom = +zoomArr[0] + 20 + "%"
      console.log(wrap.style.zoom)
    } else {
      buttomPlus.classList.add("_disabled")
      return false
    }
  }
  if (e.target.classList.contains("zoom-minus")) {
    buttomPlus.classList.remove("_disabled")
    let zoomArr = wrap.style.zoom.split("%")
    if (zoomArr[0] != 100) {
      wrap.style.zoom = +zoomArr[0] - 20 + "%"
    } else {
      buttomMinus.classList.add("_disabled")
      return false
    }
  }
})
//========================================================================================================================================================

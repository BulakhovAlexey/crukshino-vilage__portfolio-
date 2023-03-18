/* Полевые маски (на работе) */

// Соединение функциональности «Frilation» Frilater
// Соединение списка активных модулей
import { flsModules } from "../modules.js"

// Модульное соединение
import "inputmask/dist/inputmask.min.js"

// phone number mask
const inputTel = document.querySelectorAll("input[type='tel']")
if (inputTel.length) {
  flsModules.inputmask = Inputmask("+7(999)999-99-99").mask(inputTel)
}

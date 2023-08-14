const wrapper = document.querySelector(".wrapper")
const loginLink = document.querySelector(".login-link")
const registerLink = document.querySelector(".register-link")
const btn = document.querySelector("#btn")
const iconClose = document.querySelector("#close")

registerLink.addEventListener(
    "click",
    () => {
        wrapper.classList.add('active')
    }
)

loginLink.addEventListener(
    "click",
    () => {
        wrapper.classList.remove('active')
    }
)

btn.addEventListener(
    "click",
    () => {
        wrapper.classList.add('active-popup')
    }
)

iconClose.addEventListener(
    "click",
    function () {
        console.log("run")
    }
)
const leftArrow = document.querySelector(".arrow_left")
const rightArrow = document.querySelector(".arrow_right")

let buyer = document.querySelector(".buyer")

document.addEventListener('click', right)

function right(event) {
    if (event.target.closest(".arrow_right")) {
        if (buyer.nextElementSibling) {
            buyer.classList.remove('active')
            buyer = buyer.nextElementSibling
            buyer.classList.toggle('active')
        }
        else {
            buyer.classList.remove('active')
            buyer = buyer.parentElement.firstElementChild
            buyer.classList.toggle('active')
        }
    }
    if (event.target.closest(".arrow_left")) {
        if (buyer.previousElementSibling) {
            buyer.classList.remove('active')
            buyer = buyer.previousElementSibling
            buyer.classList.toggle('active')
        }
        else {
            buyer.classList.remove('active')
            buyer = buyer.parentElement.lastElementChild
            buyer.classList.toggle('active')
        }
    }
}

const timer = document.querySelector(".order__timer")

const overTime = 30
const timerFunc = (time) => {
    setInterval(() => { time - 1 }, 1000)
}

timer.innerHTML(` ${timerFunc(overTime)}`)
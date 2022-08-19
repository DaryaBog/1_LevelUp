const leftArrow = document.querySelector('.arrow_left')
const rightArrow = document.querySelector('.arrow_right')

let buyer = document.querySelector('.buyer')


document.addEventListener('click', event => {
    // --------carousel-------------
    if (event.target.closest('.arrow_right')) {
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
    if (event.target.closest('.arrow_left')) {
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
    // ----------Button----------
    if (event.target.closest('.buy')) {
        event.preventDefault()
        const point = document.querySelector('.order__sale')
        point.scrollIntoView({
            behavior: 'smooth'
        })
    }
})



// ----------------Timer----------------
function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date())
    let seconds = Math.floor((t / 1000) % 60)
    let minutes = Math.floor((t / 1000 / 60) % 60)
    return {
        'total': t,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(endtime) {
    const clock = document.querySelector('.order__timer')
    const min = clock.querySelector('.order__min')
    const sec = clock.querySelector('.order__sec')

    function updateClock() {
        const t = getTimeRemaining(endtime)

        min.innerHTML = ('0' + t.minutes).slice(-2)
        sec.innerHTML = ('0' + t.seconds).slice(-2)

        if (t.total <= 0) {
            clearInterval(timeinterval)
        }
    }

    updateClock()
    const timeinterval = setInterval(updateClock, 1000)
}

const deadline = new Date(Date.parse(new Date()) + 30 * 60 * 1000)
initializeClock(deadline)

// --------------Valid--------------


const inputPhone = document.querySelector('.order__phone')
inputPhone.addEventListener('blur', function (event) {
    let btn = document.querySelector('.order__buy ')
    let value = this.value
    let check = /^\d+$/.test(value)
    console.log(value)
    if (check) {
        this.classList.remove('invalid')
        this.classList.add('valid')
        btn.disabled = false

    } else {
        this.classList.remove('valid')
        this.classList.add('invalid')
        btn.disabled = true
    }
})
const inputName = document.querySelector('.order__name')
inputName.addEventListener('focus', function (event) {
    let labels = document.querySelectorAll('label')
    if (event.target.closest('.order__name') || event.target.closest('.order__phone')) {
        for (let label of labels) {
            label.classList.add('label_active')
        }
    } else {
        for (let label of labels) {
            label.classList.remove('label_active')
        }
    }
})
inputPhone.addEventListener('focus', function (event) {
    let labels = document.querySelectorAll('label')
    if (event.target.closest('.order__phone') || event.target.closest('.order__name')) {
        for (let label of labels) {
            label.classList.add('label_active')
        }
    } else {
        for (let label of labels) {
            label.classList.remove('label_active')
        }
    }
})



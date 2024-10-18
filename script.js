const days = document.querySelector("#days")
const hours = document.querySelector("#hours")
const minutes = document.querySelector("#minutes")
const seconds = document.querySelector("#seconds")

// input section
const daysinput = document.querySelector("#daysinput")
const launch = document.querySelector("#launch-button")
const hoursinput = document.querySelector("#hoursinput")
const minuteinput = document.querySelector("#minuteinput")
const secondinput = document.querySelector("#secondsinput")
const stop = document.querySelector("#stop-button")


let secondsCount = 0
let minutesCounter = 0
let hoursCounter = 0
let daysCounter = 0

let interval = undefined


launch.addEventListener("click", () => {
    if(interval) {
        clearInterval(interval)
    }
    let Daysvalue = Number(daysinput.value) || 0
    daysCounter = Daysvalue
    daysinput.value = ""

    let Hoursvalue = Number(hoursinput.value) || 0
    hoursCounter = Hoursvalue
    hoursinput.value = ""

    let Minutesvalue = Number(minuteinput.value) || 0
    minutesCounter = Minutesvalue
    minuteinput.value = ""
 
    let secondValue = Number(secondinput.value) || 0
    secondsCount = secondValue
    secondinput.value = ""

    interval = setInterval(secondCooldown, 1000) 
})

stop.addEventListener("click", () => {
    if(interval) {
        clearInterval(interval)
    }
    
     secondsCount = 0
     minutesCounter = 0
     hoursCounter = 0
     daysCounter = 0
    
  updateDisplay()
})

function updateDisplay() {
 
    seconds.textContent = String(secondsCount).padStart(2, "0")

    minutes.textContent = String(minutesCounter).padStart(2, "0")

    hours.textContent = String(hoursCounter).padStart(2, "0")

    days.textContent = String(daysCounter).padStart(2, "0")
}




function secondCooldown() {
    if(!daysCounter  && !hoursCounter && !minutesCounter && !secondsCount ) {
        if(interval) {
         clearInterval(interval)
        }

    } else {
        if(secondsCount === 0) {
            minutesCooldown()
            secondsCount = 59
        } else {
            secondsCount--
        }
    }
    updateDisplay()
}


function minutesCooldown() {
    
    if(minutesCounter === 0) {
        hoursCooldown() 
        minutesCounter = 59
    } else {
        minutesCounter--
    }

}

function hoursCooldown() {

    if(hoursCounter === 0) {
        daysCooldown()
        hoursCounter = 23
    } else {
        hoursCounter--
    }
}


function daysCooldown() {
    if(daysCounter === 0) {
        daysCounter = 0
    } else {
        daysCounter--
    }
}

updateDisplay()

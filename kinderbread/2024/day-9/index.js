let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let timerEl = document.getElementById("timer-el")
let homePoints = 0
let guestPoints = 0

function addOneHome() {
    homePoints += 1
    // homePoints = homePoints + 1
    homeScore.textContent = homePoints
}

function addTwoHome() {
    homePoints += 2
    homeScore.textContent = homePoints
}

function addThreeHome() {
    homePoints += 3
    homeScore.textContent = homePoints
}

function addFourHome() {
    homePoints += 4
    homeScore.textContent = homePoints
}

function addOneGuest() {
    guestPoints += 1
    // homePoints = homePoints + 1
    guestScore.textContent = guestPoints
}

function addTwoGuest() {
    guestPoints += 2
    guestScore.textContent = guestPoints
}

function addThreeGuest() {
    guestPoints += 3
    guestScore.textContent = guestPoints
}

function addFourGuest() {
    guestPoints += 4
    guestScore.textContent = guestPoints
}

function resetPoints() {
    homePoints = 0
    guestPoints = 0
    homeScore.textContent = homePoints
    guestScore.textContent = guestPoints
}
// Strech Goals

// Setting a Round Timer
// let startingMinutes = 0
// let time = startingMinutes * 60

// function setTimer3min() {
//     let startingMinutes = startingMinutes + 3
//     timerEl.innerHTML = `3:00`
// }

// function startTimer() {
//     let minutes = Math.floor(time / 60)
//     let seconds = time % 60

//     timerEl.textContent = `${minutes}: ${seconds}`
//     time--
// }

// function stopTimer() {

// }

// function resetTimer() {

// }
// Highlighting Winning Team

// function highlightingWinningTeam(homePoints, guestPoints) {
//     if(homePoints > guestPoints) {
//         return `<h1 class="score" id="home-score" style="color: white;">${home}</h1>`
//     } else if (guestPoints > homePoints) {
//         return `<h1 class="score" id="guest-score" style="color: white;">${guestScore}</h1>`
//     } else {
//         return `${homeScore}`
//     }
// }

// highlightingWinningTeam(homePoints, guestPoints)
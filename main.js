const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.getElementById('time-left')
let score = document.getElementById('score')
let result = 0
let currentTime = timeLeft.textContent

function countDown() {
  currentTime--
  timeLeft.textContent = currentTime
  if(currentTime === 0 ) {
    clearInterval(timerId)
    alert('GAME OVER! Your final score is ' + result)
    clearInterval(timerId);
    location.reload()
  }
}
let timerId = setInterval(countDown, 1000)

function randomSquare() {
  square.forEach(className => {
    className.classList.remove('mole')
  })
  let randomPosition = square[Math.floor(Math.random() * 9)]
  randomPosition.classList.add('mole')
  hitPosition = randomPosition.id
}

square.forEach(id => {
  id.addEventListener('mouseup', () => {
    if(id.id === hitPosition){
      result = result + 1
      score.textContent = result
      hitPosition = null
    }
  })
})

function moveMole() {
  setInterval(randomSquare, 500)
}

moveMole()

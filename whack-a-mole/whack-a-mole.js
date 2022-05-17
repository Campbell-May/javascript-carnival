// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole')

let moleTable = document.getElementsByTagName('td')
let moleTableArr = Array.from(moleTable)

console.log(moleTableArr)

function getRandomItem(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length)
  let randomCell = arr[randomIndex]

  let img = document.createElement('img')
  img.classList.add('mole')
  img.src = './mole.PNG'

  randomCell.appendChild(img)
}
getRandomItem(moleTableArr)

function findMole() {
  let hit = document.getElementsByClassName('mole')
  for (let i = 0; i < hit.length; i++) {
    hit[i].onclick = whackedMole
  }
}
findMole()
function whackedMole(e) {
  let mole = e.target
  console.log('hit')
  if (mole.src.match('./mole.PNG')) {
    mole.parentNode.removeChild(mole)
    getRandomItem(moleTableArr)
    var audio = new Audio()
    audio.src = './whack-audio.wav'
    audio.play()
  }
  findMole()
}

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

  var img = document.createElement('img')
  img.classList.add('mole')
  img.src = './mole.PNG'

  randomCell.appendChild(img)
}
getRandomItem(moleTableArr)

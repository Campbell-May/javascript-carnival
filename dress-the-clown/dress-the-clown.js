// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

let head = document.getElementById('head')
let body = document.getElementById('body')
let feet = document.getElementById('feet')
let headIndex = 0
let bodyIndex = 0
let feetIndex = 0

let clothingIndex = 0

function changeClownClothes() {
  if (clothingIndex == 0) {
    head.src = './images/head' + headIndex + '.png'
  }
  if (clothingIndex == 1) {
    body.src = './images/body' + bodyIndex + '.png'
  }
  if (clothingIndex == 2) {
    feet.src = './images/shoes' + feetIndex + '.png'
  }
}

function clothingIndexer() {
  if (clothingIndex > 2) {
    clothingIndex = 0
  }
  if (clothingIndex < 0) {
    clothingIndex = 2
  }
  console.log(clothingIndex)
}

//document.addEventListener('keydown', changeClownHead(ArrowRight))

document.onkeydown = checkKey
function checkKey(e) {
  e = e || window.event

  if (e.code == 'ArrowUp') {
    clothingIndex++
    clothingIndexer()
  } else if (e.code == 'ArrowDown') {
    clothingIndex--
    clothingIndexer()
  } else if (e.code == 'ArrowLeft') {
    if (clothingIndex == 0) {
      headIndex--
      if (headIndex < 0) {
        headIndex = 5
      }
    }
    if (clothingIndex == 1) {
      bodyIndex--
      if (bodyIndex < 0) {
        bodyIndex = 5
      }
    }
    if (clothingIndex == 2) {
      feetIndex--
      if (feetIndex < 0) {
        feetIndex = 5
      }
    }
    changeClownClothes()
  } else if (e.code == 'ArrowRight') {
    if (clothingIndex == 0) {
      headIndex++
      if (headIndex === 6) {
        headIndex = 0
      }
    }
    if (clothingIndex == 1) {
      bodyIndex++
      if (bodyIndex === 6) {
        bodyIndex = 0
      }
    }
    if (clothingIndex == 2) {
      feetIndex++
      if (feetIndex === 6) {
        feetIndex = 0
      }
    }
    changeClownClothes()
  }
}
console.log(clothingIndex)

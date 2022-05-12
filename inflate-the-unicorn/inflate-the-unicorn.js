// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

let unicorn = document.getElementsByTagName('img')

function clickUnicorn(e) {
  let uni = e.target
  console.log('hello')
  if (uni.src.match('./images/unicorn-0.png')) {
    uni.src = './images/unicorn-1.png'
  } else if (uni.src.match('./images/unicorn-1.png')) {
    uni.src = './images/unicorn-2.png'
  } else if (uni.src.match('./images/unicorn-2.png')) {
    uni.src = './images/unicorn-3.png'
  } else if (uni.src.match('./images/unicorn-3.png')) {
    alert('unicorn' + uni.id + ' Says thank you')
  }
}
for (let i = 0; i < unicorn.length; i++) {
  unicorn[i].onclick = clickUnicorn
}

let unicorn1 = {}

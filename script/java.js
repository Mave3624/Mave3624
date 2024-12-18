const image =document.querySelectorAll('.imgHolder')

function transform(color) {
  color = '#'+Math.floor(Math.random() * 1000000)
  for(a= 0; a<image.length; a++) {
    image[a].style.border = '2px solid ' + color
  }
  setTimeout(() => transform(), 1000)
}

transform()
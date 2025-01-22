const image =document.querySelectorAll('.imgHolder>img')

function transform(color) {
  color = '#'+Math.floor(Math.random() * 1000000)
  for(a= 0; a<image.length; a++) {
    image[a].style.borderColor = color
  }
  setTimeout(() => transform(), 1000)
}

transform()
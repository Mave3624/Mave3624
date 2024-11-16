const caution = document.querySelector('.notice')
const submit = document.querySelector('#button')
const input = document.querySelector('#input')

function Slidecolor() {
    let color = '#'+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)
    caution.style.border = `2px solid ${color}`
    setTimeout(Slidecolor, 1000)
}
Slidecolor()
const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('.btn2')
const square = document.querySelector('.color')
const removeColor = document.querySelector('.remove-color')

function redColor () {
    //square.classList.add('red')
    //square.classList.remove('blue')
    //toggle działa jak włącznik wyłącznik i mozna nim odpalać klase i ją wyłączać
    square.classList.toggle('red')
}

function blueColor () {
    square.classList.add('blue')
    square.classList.remove('red')
}

btn1.addEventListener('click', redColor)
btn2.addEventListener('click', blueColor)

function cleanColor() {
    square.classList.remove('blue')
    square.classList.remove('red')
}

removeColor.addEventListener('click', cleanColor)
const arrowIcon = document.querySelector('.fas');
const btn = document.querySelector('.arrow');
const img = document.querySelector('.item1');

function showItem() {
    img.classList.toggle('show')

    if(img.classList.contains('show')) {
        //console.log('NOK');
        arrowIcon.style.transform = 'rotate(180deg)'
    } else {
        //console.log('OK');
        arrowIcon.style.transform = 'rotate(0deg)'
    }
}

btn.addEventListener('click', showItem)
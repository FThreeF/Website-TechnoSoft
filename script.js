'use strict'

const title = document.querySelector('.header__title')

const menuButtons = document.querySelectorAll('.header__link')

title.onclick = () => {
    scrollTo('description')
}

menuButtons.forEach(element => {
    element.onclick = () => {
        scrollTo(element.id);
    }
})




function scrollTo(element) {
    let el = document.querySelector(`.${element}`)
    window.scroll({
        left: 0,
        top: el.offsetTop,
        behavior: 'smooth',
    })
}











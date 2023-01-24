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










function onEntry(entry) {
    entry.forEach(change => {
        change.target.classList.add(element-show);
    })
}


let options = {
    threshold: [0.5]
}

let observer = new IntersectionObserver(onEntry, options)

let elements = document.querySelectorAll('.element-animation')

for (let elm of elements) {
    observer.observe(elm);
}
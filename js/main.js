const linksPage = document.querySelector('#linksPage')
const menu = document.querySelector('#menu')
const links = document.querySelectorAll('#linksPage nav ul li a')
let active = false

menu.addEventListener('click', () => {
    if (active === true) {
        linksPage.style.transform = 'translateX(100vw)'
        active = false
    } else {
        linksPage.style.transform = 'translateX(0vw)'
        active = true
    }
})

links.forEach( link => {
    link.addEventListener('click', () => {
        if (active === true) {
            linksPage.style.transform = 'translateX(100vw)'
            active = false
        } else {
            linksPage.style.transform = 'translateX(0vw)'
            active = true
        }
    })
});
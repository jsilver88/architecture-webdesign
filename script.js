const searchLink = document.getElementById('search__link')
const searchBtn = document.getElementById('search__button')
const aboutTabs = document.querySelectorAll('.about__tabs li')
const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.navbar__list')

searchLink.addEventListener('click', () => {
  searchBtn.classList.toggle('active')
})

aboutTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tab.classList.toggle('active')
  })
})

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active')
  navLinks.classList.toggle('active')
})

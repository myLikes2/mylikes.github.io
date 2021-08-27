const toggleBtn = document.querySelector('.toggle-btn-container')
const menuButtons = document.querySelector('.buttons')


const servicesButton = document.querySelector('#services-btn')
const contactButton = document.querySelector('#contact-btn')

//Contact Page//

function menuToggle() {
  menuButtons.classList.toggle('toggle-block-btn')
}

function homeNav() {
  location.href = 'https://mylikes2.github.io/mylikes.github.io/'
}

function servicesNav() {
  location.href = 'https://mylikes2.github.io/mylikes.github.io/services.html'
}

function telegramNavigator() {
  location.href = 'https://telegram.me/mylikes2'
}

function contactNav() {
  // location.href = 'https://mylikes2.github.io/mylikes.github.io/contact.html'
  location.href = '/contact.html'
}
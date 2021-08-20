const toggleBtn = document.querySelector('.toggle-btn-container')
const menuButtons = document.querySelector('.buttons')


const servicesButton = document.querySelector('#services-btn')
const contactButton = document.querySelector('#contact-btn')

//Contact Page//

const homeButton = document.querySelector('#contact-pg-home-btn')

function menuToggle() {
  menuButtons.classList.toggle('toggle-block-btn')
}

homeButton.addEventListener('click', () => {
  location.href = 'https://mylikes2.github.io/mylikes.github.io/'
})



contactButton.addEventListener('click', () => {
  location.href = 'https://mylikes2.github.io/mylikes.github.io/contact.html'
})

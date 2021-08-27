// Table //
const servicesTable = document.querySelector('#service-table')

//Services Header Titles//
let instagramBtn = document.querySelector('#insta-btn')
let facebookBtn = document.querySelector('#facebook-btn')
let youtubeBtn = document.querySelector('#youtube-btn')
let tiktokBtn = document.querySelector('#tiktok-btn')


function homeNav() {
  location.href = 'https://mylikes2.github.io/mylikes.github.io/'
}

function contactNav() {
  location.href = 'https://mylikes2.github.io/mylikes.github.io/contact.html'
}

const menuButtons = document.querySelector('.buttons')
function menuToggle() {
  menuButtons.classList.toggle('toggle-block-btn')
}


function telegramNav() {
  location.href = 'https://telegram.me/mylikes2'
}

const filler = document.querySelector('.filler')


function getInstagram() {

  instagramBtn.classList.remove('header-inactive')
  instagramBtn.classList.add('headers-active')

  facebookBtn.classList.add('header-inactive')
  facebookBtn.classList.remove('headers-active')

  youtubeBtn.classList.add('header-inactive')
  youtubeBtn.classList.remove('headers-active')

  tiktokBtn.classList.add('header-inactive')
  tiktokBtn.classList.remove('headers-active')

  filler.style.display = 'none'

  let instagramSection = document.querySelectorAll('.instagram-section')
  for(let i = 0; i<instagramSection.length; i++) {
    instagramSection[i].style.display = 'none'
  }


  let facebookSection = document.querySelectorAll('.facebook-section')
  for(let i = 0; i<facebookSection.length; i++) {
    facebookSection[i].style.display = 'none'
  }


  let youtubeSection = document.querySelectorAll('.youtube-section')
  for(let i = 0; i<youtubeSection.length; i++) {
    youtubeSection[i].style.display = 'none'
  }
  
  
  let tiktokSection = document.querySelectorAll('.tiktok-section')
  for(let i = 0; i<tiktokSection.length; i++) {
    tiktokSection[i].style.display = 'none'
  }


  fetch('./services.json')
      .then(res => res.json())
      .then(data => {
        for(let i = 0; i < data.instagram.length; i++) {

          const instaRow = document.createElement('TR')
          instaRow.classList.add('instagram-section')

          const instaId = document.createElement('TD')
          instaId.classList.add('small-width')
          instaId.textContent = data.instagram[i].id

          const instaName = document.createElement('TD')
          instaName.textContent = data.instagram[i].serviceName
          instaName.classList.add('text-width')

          const instaPrice = document.createElement('TD')
          instaPrice.classList.add('medium-width')
          instaPrice.textContent = data.instagram[i].price

          const instaMin = document.createElement('TD')
          instaMin.textContent = data.instagram[i].minQty
          instaMin.classList.add('text-width')

          const instaMax = document.createElement('TD')
          instaMax.textContent = data.instagram[i].maxQty
          instaMax.classList.add('text-width')

          const instaTime = document.createElement('TD')
          instaTime.classList.add('view-btn')
          instaTime.textContent = data.instagram[i].time
             
          instaRow.appendChild(instaId)
          instaRow.appendChild(instaName)
          instaRow.appendChild(instaPrice)
          instaRow.appendChild(instaMin)
          instaRow.appendChild(instaMax)
          instaRow.appendChild(instaTime)


          servicesTable.appendChild(instaRow)

        }
      })
}

function getFacebook() {

  instagramBtn.classList.add('header-inactive')
  instagramBtn.classList.remove('headers-active')

  facebookBtn.classList.remove('header-inactive')
  facebookBtn.classList.add('headers-active')

  youtubeBtn.classList.add('header-inactive')
  youtubeBtn.classList.remove('headers-active')

  tiktokBtn.classList.add('header-inactive')
  tiktokBtn.classList.remove('headers-active')


  filler.style.display = 'none'

  let instagramSection = document.querySelectorAll('.instagram-section')
  for(let i = 0; i<instagramSection.length; i++) {
    instagramSection[i].style.display = 'none'
  }


  let facebookSection = document.querySelectorAll('.facebook-section')
  for(let i = 0; i<facebookSection.length; i++) {
    facebookSection[i].style.display = 'none'
  }


  let youtubeSection = document.querySelectorAll('.youtube-section')
  for(let i = 0; i<youtubeSection.length; i++) {
    youtubeSection[i].style.display = 'none'
  }
  
  
  let tiktokSection = document.querySelectorAll('.tiktok-section')
  for(let i = 0; i<tiktokSection.length; i++) {
    tiktokSection[i].style.display = 'none'
  }
  fetch('./services.json')
      .then(res => res.json())
      .then(data => {
        for(let i = 0; i < data.facebook.length; i++) {

          const instaRow = document.createElement('TR')
          instaRow.classList.add('facebook-section')

          const instaId = document.createElement('TD')
          instaId.classList.add('small-width')
          instaId.textContent = data.facebook[i].id

          const instaName = document.createElement('TD')
          instaName.textContent = data.facebook[i].serviceName
          instaName.classList.add('text-width')

          const instaPrice = document.createElement('TD')
          instaPrice.classList.add('medium-width')
          instaPrice.textContent = data.facebook[i].price

          const instaMin = document.createElement('TD')
          instaMin.textContent = data.facebook[i].minQty
          instaMin.classList.add('text-width')

          const instaMax = document.createElement('TD')
          instaMax.textContent = data.facebook[i].maxQty
          instaMax.classList.add('text-width')

          const instaTime = document.createElement('TD')
          instaTime.classList.add('view-btn')
          instaTime.textContent = data.facebook[i].time

          instaRow.appendChild(instaId)
          instaRow.appendChild(instaName)
          instaRow.appendChild(instaPrice)
          instaRow.appendChild(instaMin)
          instaRow.appendChild(instaMax)
          instaRow.appendChild(instaTime)


          servicesTable.appendChild(instaRow)

        }
      })
}


function getYoutube() {

  instagramBtn.classList.add('header-inactive')
  instagramBtn.classList.remove('headers-active')

  facebookBtn.classList.add('header-inactive')
  facebookBtn.classList.remove('headers-active')

  youtubeBtn.classList.remove('header-inactive')
  youtubeBtn.classList.add('headers-active')

  tiktokBtn.classList.add('header-inactive')
  tiktokBtn.classList.remove('headers-active')

  filler.style.display = 'none'

  let instagramSection = document.querySelectorAll('.instagram-section')
  for(let i = 0; i<instagramSection.length; i++) {
    instagramSection[i].style.display = 'none'
  }


  let facebookSection = document.querySelectorAll('.facebook-section')
  for(let i = 0; i<facebookSection.length; i++) {
    facebookSection[i].style.display = 'none'
  }


  let youtubeSection = document.querySelectorAll('.youtube-section')
  for(let i = 0; i<youtubeSection.length; i++) {
    youtubeSection[i].style.display = 'none'
  }
  
  
  let tiktokSection = document.querySelectorAll('.tiktok-section')
  for(let i = 0; i<tiktokSection.length; i++) {
    tiktokSection[i].style.display = 'none'
  }
  fetch('./services.json')
      .then(res => res.json())
      .then(data => {
        for(let i = 0; i < data.youtube.length; i++) {

          const instaRow = document.createElement('TR')
          instaRow.classList.add('youtube-section')

          const instaId = document.createElement('TD')
          instaId.classList.add('small-width')
          instaId.textContent = data.youtube[i].id

          const instaName = document.createElement('TD')
          instaName.textContent = data.youtube[i].serviceName
          instaName.classList.add('text-width')

          const instaPrice = document.createElement('TD')
          instaPrice.classList.add('medium-width')
          instaPrice.textContent = data.youtube[i].price

          const instaMin = document.createElement('TD')
          instaMin.textContent = data.youtube[i].minQty
          instaMin.classList.add('text-width')

          const instaMax = document.createElement('TD')
          instaMax.textContent = data.youtube[i].maxQty
          instaMax.classList.add('text-width')

          const instaTime = document.createElement('TD')
          instaTime.classList.add('view-btn')
          instaTime.textContent = data.youtube[i].time

          instaRow.appendChild(instaId)
          instaRow.appendChild(instaName)
          instaRow.appendChild(instaPrice)
          instaRow.appendChild(instaMin)
          instaRow.appendChild(instaMax)
          instaRow.appendChild(instaTime)


          servicesTable.appendChild(instaRow)

        }
      })
}


function getTikTok() {

  instagramBtn.classList.add('header-inactive')
  instagramBtn.classList.remove('headers-active')

  facebookBtn.classList.add('header-inactive')
  facebookBtn.classList.remove('headers-active')

  youtubeBtn.classList.add('header-inactive')
  youtubeBtn.classList.remove('headers-active')

  tiktokBtn.classList.remove('header-inactive')
  tiktokBtn.classList.add('headers-active')

  filler.style.display = 'none'
  
  let instagramSection = document.querySelectorAll('.instagram-section')
  for(let i = 0; i<instagramSection.length; i++) {
    instagramSection[i].style.display = 'none'
  }


  let facebookSection = document.querySelectorAll('.facebook-section')
  for(let i = 0; i<facebookSection.length; i++) {
    facebookSection[i].style.display = 'none'
  }


  let youtubeSection = document.querySelectorAll('.youtube-section')
  for(let i = 0; i<youtubeSection.length; i++) {
    youtubeSection[i].style.display = 'none'
  }
  
  
  let tiktokSection = document.querySelectorAll('.tiktok-section')
  for(let i = 0; i<tiktokSection.length; i++) {
    tiktokSection[i].style.display = 'none'
  }
  fetch('./services.json')
      .then(res => res.json())
      .then(data => {
        for(let i = 0; i < data.tiktok.length; i++) {

          const instaRow = document.createElement('TR')
          instaRow.classList.add('tiktok-section')

          const instaId = document.createElement('TD')
          instaId.classList.add('small-width')
          instaId.textContent = data.tiktok[i].id

          const instaName = document.createElement('TD')
          instaName.textContent = data.tiktok[i].serviceName
          instaName.classList.add('text-width')

          const instaPrice = document.createElement('TD')
          instaPrice.classList.add('medium-width')
          instaPrice.textContent = data.tiktok[i].price

          const instaMin = document.createElement('TD')
          instaMin.textContent = data.tiktok[i].minQty
          instaMin.classList.add('text-width')

          const instaMax = document.createElement('TD')
          instaMax.textContent = data.tiktok[i].maxQty
          instaMax.classList.add('text-width')

          const instaTime = document.createElement('TD')
          instaTime.classList.add('view-btn')
          instaTime.textContent = data.tiktok[i].time

          instaRow.appendChild(instaId)
          instaRow.appendChild(instaName)
          instaRow.appendChild(instaPrice)
          instaRow.appendChild(instaMin)
          instaRow.appendChild(instaMax)
          instaRow.appendChild(instaTime)


          servicesTable.appendChild(instaRow)

        }
      })
}

const model = document.querySelector('#model')
let serviceTitle = document.querySelector('#service-title-text')
let servicePrice = document.querySelector('#service-price-text')
let serviceMin = document.querySelector('#service-min-text')
let serviceMax = document.querySelector('#service-max-text')

function modelOpen(serviceNameData, servicePriceData, serviceMinData, serviceMaxData) {
  model.style.display = 'block'
  serviceTitle.textContent = 'Service :' + serviceNameData
  servicePrice.textContent = 'Price :' + servicePriceData
  serviceMin.textContent = 'Min Qty :' + serviceMinData
  serviceMax.textContent = 'Max Qty :' + serviceMaxData
}

function modelClose() {
  model.style.display = 'none'
}

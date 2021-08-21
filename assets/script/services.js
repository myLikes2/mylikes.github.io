function getService() {
  fetch("/services.json")
    .then(res => res.json())
    .then(data => {
      for(let i = 0; i<data.instagram.length; i++) {
        console.log(data.instagram[i].serviceName)
        console.log(data.instagram[i].price)
        console.log(data.instagram[i].time)
      }
    })
}
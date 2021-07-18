console.log('%c HI', 'color: firebrick')

const container = document.querySelector("#dog-image-container")
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

fetch (imgUrl)
.then(resp => resp.json())
.then(images => {
    const imgs = images.message
    let imgsArray =  imgs.map((img) => {
    let i = `<img src=${img}>`
    return i 
})

imgsArray.forEach(element => {
    container.innerHTML += element
});
   
})  
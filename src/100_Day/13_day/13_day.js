const openImg = document.querySelectorAll(".gallery__img");
const showSelectImg = document.getElementById("show-img")
const openImgActive = document.getElementById("open-img");
const closeImg = document.getElementById("close")


console.log(showSelectImg)
openImg.forEach(open =>{
    open.addEventListener("click",  function readInfo(){
        const getImg = (this.childNodes[1].src);
        showSelectImg.setAttribute("src", getImg)
        openImgActive.classList.toggle('open-img--active');
        console.log(openImgActive)
    });
})
closeImg.addEventListener("click", ()=>{
    openImgActive.classList.toggle('open-img--active');
    openImgActive.classList.toggle('open-img--close');
     closeImgActive()
})

// funcion asicrona que nos permite esperar a que la animacion termine para poder poder colocar display nonen en open-img
async function closeImgActive(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{openImgActive.classList.toggle('open-img--close');
    },3000)
    
    })
}
// const bottons = document.querySelectorAll(".keyboard__buttons");
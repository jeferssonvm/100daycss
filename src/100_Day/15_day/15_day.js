const imgUploader = document.getElementById("img-uploader")
const img = document.getElementById("content__img")


imgUploader.addEventListener('change',(e)=>{
    console.log(e.target.files[0].name)
    const nameImg = e.target.files[0].name;
    img.removeChild(img.firstElementChild)    
    img.appendChild(Object.assign(
        document.createElement('p'),{
        innerHTML:nameImg
    }))
})
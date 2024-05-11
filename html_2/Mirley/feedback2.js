const allStar = document.querySelectorAll('.rating .star1')
const ratingValue=document.querySelector('.rating input')
allStar.forEach((item,idx)=> {
    item.addEventListener('click',function(){
        let click=0
        ratingValue.value=idx + 1
        console.log(ratingValue.value)
        allStar.forEach(i=>{
            i.classList.replace('bxs-star','bx-star')
            i.classList.remove('active')
        })
        for(let i=0;i<allStar.length;i++){
            if(i<=idx){
                allStar[i].classList.replace('bx-star','bxs-star')
                allStar[i].classList.add('active')
            }else{
                allStar[i+1].style.setProperty('--i',click)
                click++
            }
        }
    })
})

const allStars = document.querySelectorAll('.rating .star2')
const ratingValues=document.querySelector('.rating input')
allStars.forEach((item,idx)=> {
    item.addEventListener('click',function(){
        let click=0
        ratingValues.value=idx + 1
        console.log(ratingValues.value)
        allStars.forEach(i=>{
            i.classList.replace('bxs-star','bx-star')
            i.classList.remove('active')
        })
        for(let i=0;i<allStars.length;i++){
            if(i<=idx){
                allStars[i].classList.replace('bx-star','bxs-star')
                allStars[i].classList.add('active')
            }else{
                allStars[i+1].style.setProperty('--i',click)
                click++
            }
        }
    })
})

const allStare = document.querySelectorAll('.rating .star3')
const ratingValuee=document.querySelector('.rating input')
allStare.forEach((item,idx)=> {
    item.addEventListener('click',function(){
        let click=0
        ratingValuee.value=idx + 1
        console.log(ratingValuee.value)
        allStare.forEach(i=>{
            i.classList.replace('bxs-star','bx-star')
            i.classList.remove('active')
        })
        for(let i=0;i<allStare.length;i++){
            if(i<=idx){
                allStare[i].classList.replace('bx-star','bxs-star')
                allStare[i].classList.add('active')
            }else{
                allStare[i+1].style.setProperty('--i',click)
                click++
            }
        }
    })
})

const allStarw = document.querySelectorAll('.rating .star4')
const ratingValuew=document.querySelector('.rating input')
allStarw.forEach((item,idx)=> {
    item.addEventListener('click',function(){
        let click=0
        ratingValuew.value=idx + 1
        console.log(ratingValuew.value)
        allStarw.forEach(i=>{
            i.classList.replace('bxs-star','bx-star')
            i.classList.remove('active')
        })
        for(let i=0;i<allStarw.length;i++){
            if(i<=idx){
                allStarw[i].classList.replace('bx-star','bxs-star')
                allStarw[i].classList.add('active')
            }else{
                allStarw[i+1].style.setProperty('--i',click)
                click++
            }
        }
    })
})

const rts=document.querySelector('section3')
const items=document.querySelectorAll('.item2')
const submit=document.querySelector('.submits')
const successPopup=document.querySelector('.success-popup')

items.forEach(item2=>{
    item2.addEventListener('click',()=>{
        items.forEach(item2=>{
            item2.classList.remove('active')
        })
        item2.classList.add('active')
    })
})

submit.addEventListener('click',()=>{
    successPopup.classList.add('success-popup-slide')
})
let homeSec=document.getElementById('homesec')
let aboutSec=document.getElementById('aboutsec')
let educationSec=document.getElementById('educationsec')
let portofolioSec=document.getElementById('portofoliosec')
let contactSec=document.getElementById('contactsec')
let home=document.getElementById('home')
let about=document.getElementById('about')
let education=document.getElementById('education')
let portofolio=document.getElementById('projects')
let contact=document.getElementById('contact')
let toggler=document.getElementById('navbarNav')
let btnhome=document.getElementById('btnhome')
let btnproject= document.getElementById('btnproject')
let arrow =document.getElementById('portofolioicon')


window.onload=function(){
    aboutSec.style.display='none'
    educationSec.style.display='none'
    contactSec.style.display='none'
    portofolioSec.style.display='none'
    homeSec.style.display='flex'
    home.classList.add('active')
    about.classList.remove('active')
    education.classList.remove('active')
    contact.classList.remove('active')
    portofolio.classList.remove('active')
    toggler.classList.remove('show')
}

home.onclick=function(){
    aboutSec.style.display='none'
    educationSec.style.display='none'
    contactSec.style.display='none'
    portofolioSec.style.display='none'
    homeSec.style.display='flex'
    home.classList.add('active')
    about.classList.remove('active')
    education.classList.remove('active')
    contact.classList.remove('active')
    portofolio.classList.remove('active')
    toggler.classList.remove('show')

}
function aboutsection(){
    homeSec.style.display='none'
    educationSec.style.display='none'
    contactSec.style.display='none'
    portofolioSec.style.display='none'
    aboutSec.style.display='flex'
    home.classList.remove('active')
    about.classList.add('active')
    education.classList.remove('active')
    contact.classList.remove('active')
    portofolio.classList.remove('active')
    toggler.classList.remove('show')
}
function educationsection(){
    homeSec.style.display='none'
    educationSec.style.display='flex'
    contactSec.style.display='none'
    portofolioSec.style.display='none'
    aboutSec.style.display='none'
    home.classList.remove('active')
    about.classList.remove('active')
    education.classList.add('active')
    contact.classList.remove('active')
    portofolio.classList.remove('active')
    toggler.classList.remove('show')
}
portofolio.onclick=function(){
    homeSec.style.display='none'
    educationSec.style.display='none'
    contactSec.style.display='none'
    portofolioSec.style.display='grid'
    aboutSec.style.display='none'
    home.classList.remove('active')
    about.classList.remove('active')
    education.classList.remove('active')
    contact.classList.remove('active')
    portofolio.classList.add('active')
    toggler.classList.remove('show')
}
contact.onclick=function(){
    homeSec.style.display='none'
    educationSec.style.display='none'
    contactSec.style.display='block'
    portofolioSec.style.display='none'
    aboutSec.style.display='none'
    home.classList.remove('active')
    about.classList.remove('active')
    education.classList.remove('active')
    contact.classList.add('active')
    portofolio.classList.remove('active')
    toggler.classList.remove('show')
}

// show more
let box1=document.getElementById('box1')
let box2=document.getElementById('box2')
let box3=document.getElementById('box3')
let box4=document.getElementById('box4')
let box5=document.getElementById('box5')
let box6=document.getElementById('box6')
let box7=document.getElementById('box7')
let box8=document.getElementById('box8')
let box9=document.getElementById('box9')

let hidebtn= document.getElementById('btnprojecthide')
let showbtn=document.getElementById('btnprojectshow')
function Showmore(){
hidebtn.style.display='flex'
showbtn.style.display='none'
box1.style.display='grid'
box2.style.display='grid'
box3.style.display='grid'
box4.style.display='grid'
box5.style.display='grid'
box6.style.display='grid'
box7.style.display='grid'
box8.style.display='grid'
box9.style.display='grid'

}

function hide(){
    hidebtn.style.display='none'
    showbtn.style.display='flex'
    box1.style.display='none'
    box2.style.display='none'
    box3.style.display='none'
    box4.style.display='none'
    box5.style.display='none'
    box6.style.display='none'
    box7.style.display='none'
    box8.style.display='none'
    box9.style.display='none'
    
}
arrow.onclick=function(){
    window.scrollTo({
        top:0,
        behavior:'smooth',
    })
}
/* let currentitem=3;
function Showmore(){
    let boxes =[...document.querySelectorAll('.portofolio .portfolio-container .portfolio-box')]
    for(var i=currentitem ;i<currentitem + 3; i++){
        boxes[i].style.display='grid';
    }
    
    currentitem+=3;
    if(currentitem >= boxes.length){
        btnproject.innerText='𝕊𝕙𝕠𝕨 𝕝𝕖𝕤𝕤'
       for(var i=3 ; i<=currentitem ;i--){
        boxes[i].style.display='none'
    }
    currentitem=currentitem+3
}
} */
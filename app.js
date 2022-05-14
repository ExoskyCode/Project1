const btnOpen = document.querySelector('.more');
const btnClose = document.querySelector('.close')
const modal = document.querySelector('.produits');
const headerBgModal = document.querySelector('header')

let toggle = false;

btnOpen.addEventListener('click', () => {
    toggle = !toggle;

    if(toggle === false){
        modal.style.display = "block"
        setTimeout(() => {
            modal.style.opacity = 1;
        }, 30);
        headerBgModal.style.opacity = 0;
    }
    else if(toggle === true){
        modal.style.opacity = 0;
        headerBgModal.style.opacity = 1;
        
        setTimeout(() => {
           modal.style.display = "none" 
        }, 30);
    }
})

btnClose.addEventListener('click', () => {
    toggle = !toggle;

    if(toggle === false){
        setTimeout(() => {
            modal.style.opacity = 1;
        }, 30);
        modal.style.display = "block"
    }
    else if(toggle === true){
        modal.style.opacity = 0;
        headerBgModal.style.opacity = 1;
        setTimeout(() => {
            modal.style.display = "none" 
         }, 30);
    }
})

let mainImg = document.querySelector('.main-img1-card1');
let mainImg2 = document.querySelector('.main-img1-card2');
let mainImg3 = document.querySelector('.main-img1-card3');
let mainImg4 = document.querySelector('.main-img1-card4');
let smallImg1 = document.querySelector('.small-img1-card1');
let smallImg2 = document.querySelector('.small-img2-card1');
let smallImg3 = document.querySelector('.small-img3-card1');
let smallImg4 = document.querySelector('.small-img4-card1');


smallImg1.addEventListener('click', function(){
    mainImg.style.opacity = 0;
    mainImg2.style.opacity = 1;
    mainImg3.style.opacity = 0;
    mainImg4.style.opacity = 0;
})
smallImg2.addEventListener('click', function(){
    mainImg.style.opacity = 0;
    mainImg2.style.opacity = 0;
    mainImg3.style.opacity = 1;
    mainImg4.style.opacity = 0;
})
smallImg3.addEventListener('click', function(){
    mainImg.style.opacity = 0;
    mainImg2.style.opacity = 0;
    mainImg3.style.opacity = 0;
    mainImg4.style.opacity = 1;
})



let mainImgCard2 = document.querySelector('.main-img2-card1');
let mainImg2Card2 = document.querySelector('.main-img2-card2');
let mainImg3Card2 = document.querySelector('.main-img2-card3');
let mainImg4Card2 = document.querySelector('.main-img2-card4');
let smallImg1Card2 = document.querySelector('.small-img1-card2');
let smallImg2Card2 = document.querySelector('.small-img2-card2');
let smallImg3Card2 = document.querySelector('.small-img3-card2');
let smallImg4Card2 = document.querySelector('.small-img4-card2');


smallImg1Card2.addEventListener('click', function(){
    mainImgCard2.style.opacity = 0;
    mainImg2Card2.style.opacity = 1;
    mainImg3Card2.style.opacity = 0;
    mainImg4Card2.style.opacity = 0;
})
smallImg2Card2.addEventListener('click', function(){
    mainImgCard2.style.opacity = 0;
    mainImg2Card2.style.opacity = 0;
    mainImg3Card2.style.opacity = 1;
    mainImg4Card2.style.opacity = 0;
})
smallImg3Card2.addEventListener('click', function(){
    mainImgCard2.style.opacity = 0;
    mainImg2Card2.style.opacity = 0;
    mainImg3Card2.style.opacity = 0;
    mainImg4Card2.style.opacity = 1;
})


let mainImgCard3 = document.querySelector('.main-img3-card1');
let mainImg2Card3 = document.querySelector('.main-img3-card2');
let mainImg3Card3 = document.querySelector('.main-img3-card3');
let mainImg4Card3 = document.querySelector('.main-img3-card4');
let smallImg1Card3 = document.querySelector('.small-img1-card3');
let smallImg2Card3 = document.querySelector('.small-img2-card3');
let smallImg3Card3 = document.querySelector('.small-img3-card3');
let smallImg4Card3 = document.querySelector('.small-img4-card3');


smallImg1Card3.addEventListener('click', function(){
    mainImgCard3.style.opacity = 0;
    mainImg2Card3.style.opacity = 1;
    mainImg3Card3.style.opacity = 0;
    mainImg4Card3.style.opacity = 0;
})
smallImg2Card3.addEventListener('click', function(){
    mainImgCard3.style.opacity = 0;
    mainImg2Card3.style.opacity = 0;
    mainImg3Card3.style.opacity = 1;
    mainImg4Card3.style.opacity = 0;
})
smallImg3Card3.addEventListener('click', function(){
    mainImgCard3.style.opacity = 0;
    mainImg2Card3.style.opacity = 0;
    mainImg3Card3.style.opacity = 0;
    mainImg4Card3.style.opacity = 1;
})

let mainImgCard4 = document.querySelector('.main-img4-card1');
let mainImg2Card4 = document.querySelector('.main-img4-card2');
let mainImg3Card4 = document.querySelector('.main-img4-card3');
let mainImg4Card4 = document.querySelector('.main-img4-card4');
let smallImg1Card4 = document.querySelector('.small-img1-card4');
let smallImg2Card4 = document.querySelector('.small-img2-card4');
let smallImg3Card4 = document.querySelector('.small-img3-card4');
let smallImg4Card4 = document.querySelector('.small-img4-card4');


smallImg1Card4.addEventListener('click', function(){
    mainImgCard4.style.opacity = 0;
    mainImg2Card4.style.opacity = 1;
    mainImg3Card4.style.opacity = 0;
    mainImg4Card4.style.opacity = 0;
})
smallImg2Card4.addEventListener('click', function(){
    mainImgCard4.style.opacity = 0;
    mainImg2Card4.style.opacity = 0;
    mainImg3Card4.style.opacity = 1;
    mainImg4Card4.style.opacity = 0;
})
smallImg3Card4.addEventListener('click', function(){
    mainImgCard4.style.opacity = 0;
    mainImg2Card4.style.opacity = 0;
    mainImg3Card4.style.opacity = 0;
    mainImg4Card4.style.opacity = 1;
})



let mainImgCard5 = document.querySelector('.main-img5-card1');
let mainImg2Card5 = document.querySelector('.main-img5-card2');
let mainImg3Card5 = document.querySelector('.main-img5-card3');
let mainImg4Card5 = document.querySelector('.main-img5-card4');
let smallImg1Card5 = document.querySelector('.small-img1-card5');
let smallImg2Card5 = document.querySelector('.small-img2-card5');
let smallImg3Card5 = document.querySelector('.small-img3-card5');
let smallImg4Card5 = document.querySelector('.small-img4-card5');


smallImg1Card5.addEventListener('click', function(){
    mainImgCard5.style.opacity = 0;
    mainImg2Card5.style.opacity = 1;
    mainImg3Card5.style.opacity = 0;
    mainImg4Card5.style.opacity = 0;
})
smallImg2Card5.addEventListener('click', function(){
    mainImgCard5.style.opacity = 0;
    mainImg2Card5.style.opacity = 0;
    mainImg3Card5.style.opacity = 1;
    mainImg4Card5.style.opacity = 0;
})
smallImg3Card5.addEventListener('click', function(){
    mainImgCard5.style.opacity = 0;
    mainImg2Card5.style.opacity = 0;
    mainImg3Card5.style.opacity = 0;
    mainImg4Card5.style.opacity = 1;
})


let mainImgCard6 = document.querySelector('.main-img6-card1');
let mainImg2Card6 = document.querySelector('.main-img6-card2');
let mainImg3Card6 = document.querySelector('.main-img6-card3');
let mainImg4Card6 = document.querySelector('.main-img6-card4');
let smallImg1Card6 = document.querySelector('.small-img1-card6');
let smallImg2Card6 = document.querySelector('.small-img2-card6');
let smallImg3Card6 = document.querySelector('.small-img3-card6');
let smallImg4Card6 = document.querySelector('.small-img4-card6');


smallImg1Card6.addEventListener('click', function(){
    mainImgCard6.style.opacity = 0;
    mainImg2Card6.style.opacity = 1;
    mainImg3Card6.style.opacity = 0;
    mainImg4Card6.style.opacity = 0;
})
smallImg2Card6.addEventListener('click', function(){
    mainImgCard6.style.opacity = 0;
    mainImg2Card6.style.opacity = 0;
    mainImg3Card6.style.opacity = 1;
    mainImg4Card6.style.opacity = 0;
})
smallImg3Card6.addEventListener('click', function(){
    mainImgCard6.style.opacity = 0;
    mainImg2Card6.style.opacity = 0;
    mainImg3Card6.style.opacity = 0;
    mainImg4Card6.style.opacity = 1;
})

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.style.top = `${e.pageY - 30}px`
    cursor.style.left = `${e.pageX - 30}px`
})

const allLinks = document.querySelectorAll('nav ul li');

allLinks.forEach(link => {
    const contact = link.getAttribute('data-contact');

    link.addEventListener('mouseenter', () => {
    cursor.classList.add('hovered');
    cursor.style.backgroundImage = `url(ressources/${contact}.png)`;
    })

    link.addEventListener('mouseout', () => {
        cursor.classList.remove('hovered');
        cursor.style.backgroundImage = `none`;
        })
});

const hoverContactLi = document.querySelectorAll('nav ul li');
const arrowContactLi = document.querySelectorAll('.fa-arrow-right-long');

hoverContactLi.addEventListener('mouseover', () => {
    arrowContactLi.style.transform = "scale(0.6)";
})
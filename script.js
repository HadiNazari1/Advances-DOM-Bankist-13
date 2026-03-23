'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
    e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));



btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }

});
const header = document.querySelector('header');

const message= document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML='We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">got it </button>';
header.append(message);

document.querySelector('.btn--close-cookie').addEventListener('click', function(){    message.remove();
});
const btnScrollTo=document.querySelector('.btn--scroll-to');
const section1=document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function(e){
    const s1coords=section1.getBoundingClientRect();
    console.log(s1coords);
    section1.scrollIntoView({behavior:'smooth'});
    
    
})
const randomInt=(min,max) => Math.floor(Math.random()*(max-min+1)+min);
const randomColor=() => `rgb(${randomInt(0,255)}, ${randomInt(0,255)}, ${randomInt(0,255)})`;
document.querySelector('.nav__link').addEventListener('click', function(e){
    this.style.backgroundColor= randomColor();
    e.preventDefault();

})
document.querySelector('.nav__links').addEventListener('click', function(e){
    this.style.backgroundColor=randomColor();
    e.preventDefault();

})
document.querySelector('.nav').addEventListener('click', function(e){
    this .style.backgroundColor=randomColor();

})

document.querySelector('.nav__link').addEventListener('click',function(e){

    e.preventDefault();
    if (e.target.classList.contains('nav__link')){
        const id=e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior:'smooth'});

    }

   
})


const h1= document.querySelector('h1');
h1.addEventListener('click',function(e){
    alert('You clicked the heading');
    e.stopImmediatePropagation();
    
})

const tabs=document.querySelectorAll('.operations__tab');
const tabsContainer= document.querySelector('.operations__tab-container');
const tabsContent=document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function(e){
  const clicked=e.target.closest('.operations__tab');
 //Guard clause
  if (!clicked) return;
//Remove active classes
  tabs.forEach(t=> t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c=> c.classList.remove('operations__content--active'));
//Activate tab
  clicked.classList.add('operations__tab--active');
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
})
const nav= document.querySelector('.nav');

const handleHolver=function(e){
    if (e.target.classList.contains('nav__link')){
        const link=e.target;
        const siblings=link.closest('.nav').querySelectorAll('.nav__link');
        const logo= link.closest('.nav').querySelector('img');
        siblings.forEach(el=> {
            if (el !== link) {
                el.style.opacity = this;
            }
        });
    }
}

nav.addEventListener('mouseover', handleHolver.bind(0.5));
nav.addEventListener('mouseout', handleHolver.bind(1));




'use strict';

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () =>{
  console.log(window.scrollY);
  console.log(`navbarHeight:${navbarHeight}`);

  if(window.scrollY > navbarHeight){
    navbar.classList.add('navbar--dark');
  }else{
    navbar.classList.remove('navbar--dark');
  }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click',(event) =>{
  console.log(event.target.dataset.link); 
  const target = event.target;
  const link = target.dataset.link;
  if(link ==null){
    return;
  }
  navbarMenu.classList.remove('open');
  console.log(event.target.dataset.link);
  scrollIntoView(link);
})

// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

//Handle click on "contact me" button on home
const homeContactBtn = document.querySelector('.home__contact ')
homeContactBtn.addEventListener('click', () =>{
  scrollIntoView('#contact')
});
 
//Make home slowly to transparent as the window scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

//show ''arrow-up" button when scrolling down
const arrowUp = document.querySelector('.arrow-up')
document.addEventListener('scroll', () =>{
  if(window.scrollY > homeHeight /2 ){
    arrowUp.classList.add('visible')
  }else{
    arrowUp.classList.remove('visible')
  }
})
//Projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if(filter == null){
    return;
  }
  //Remove selection from the previous item ammd slect the new one

  const active = document.querySelector('.category__btn.selected')
  active.classList.remove('selected');
  e.target.classList.add('selected');
  const target =
  e.target.nodName === 'BUTTON' ? e.target : e.target.parentNode;
  

  console.log(filter);
  projects.forEach((project)=> {
    console.log(project.dataset.type);
    if (filter === '*' || filter === project.dataset.type) {
      project.classList.remove('invisible');
    }else{
      project.classList.add('invisible');
    }
  })
 
})

function scrollIntoView(selector){
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior:'smooth'});

}
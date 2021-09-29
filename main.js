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
})
// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click',(event) =>{
  console.log(event.target.dataset.link); //data-link에 만든 아이디가 나오게 함
  const target = event.target;//undefined처리위해 아이디가 클릭되면 데이타 링크가 나오게하게끔
  const link = target.dataset.link; //언디파인일때는 하지말고.
  if(link ==null){
    return;
  }
  console.log(event.target.dataset.link);
  scrollIntoView(link);
})

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
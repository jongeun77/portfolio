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

  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({behavior: 'smooth'});
})

 window.addEventListener('scroll',function(){
   const header = document.querySelector('header') ;
   header.classList.toggle("sticky", window.scrollY > 0);
});


var navbar = document.querySelector(".nav");
document.querySelector("#menu").onclick = () =>{
    navbar.classList.toggle('active');
}

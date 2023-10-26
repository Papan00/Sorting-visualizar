


let navslide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links div');
    console.log(nav);
    
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');
        nav.style.animation = 'transition transform 1s ease-in-out';
     
     //Animate Links
    navLinks.forEach((link,index) => {
      if(link.style.animation){
         link.style.animation = '';
      }
        else{
        link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.5}s`;
    }
        // console.log(index/7);
        
    });

    //Burger Animation
    burger.classList.toggle('toggle');

    });
}

navslide();

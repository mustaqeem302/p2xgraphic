var tongleBtn = document.querySelector('.menu-bars');
var shownav_tag = document.querySelector('#navigation');
var renav=document.querySelector('.remove-icon');
var show=document.querySelector('.header-C2');
var re=document.querySelector('.header-C2-r1');





tongleBtn.addEventListener('click',function(){

   
  
        shownav_tag.setAttribute("class", "reponsive-nav");
        show.style.display="block";
        renav.style.display="block";
        
    
    
});

renav.addEventListener('click',function(){
    
    renav.style.display="none";
    show.style.display="none";
    
});

function myFunction(x) {
  if (x.matches) { // If media query matches
    show.style.display="none";
      
  } else {
    show.style.display="block";
    shownav_tag.setAttribute("class", "nav");
    
  }
}

var x = window.matchMedia("(max-width: 1080px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction)
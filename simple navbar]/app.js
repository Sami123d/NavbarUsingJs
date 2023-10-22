let centerNav = document.querySelector('.center-nav');
let rightNav = document.querySelector('.right-nav');
let tooglerNav = document.querySelector('.toogler-nav');
let widthOfScreen = window.innerWidth;


function navk(){
    if (widthOfScreen <= 900){
      
        centerNav.style.display= 'none';
        rightNav.style.display = 'none';
        tooglerNav.style.display = 'block';
     //
     }
     
}
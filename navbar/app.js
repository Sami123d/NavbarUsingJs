let takeleftNav = document.querySelector('.left-nav');

var wds =  0;
console.log(wds)

function closeBtn (){
    var wds = -300;
   takeleftNav.style.left =wds  +'px';
console.log(wds)

}

function tooglerBtn (){

    if (wds === 0){
takeleftNav.style.left =wds  +'px';
    console.log(wds + ">>>>togler")
    }
    // if (wds === -300){
    //     wds = -300;
    //     takeleftNav.style.left =wds  +'px'; 
    // }
    
    
}


let nuumber = 0;
let elemnt = document.querySelector('h1');
function increase() {
   let increaseNum = ++nuumber
   elemnt.textContent = increaseNum

}

function decrease() {
   if(nuumber > 0){
    let decreaseNum =  --nuumber
    elemnt.textContent = decreaseNum;
  
    
   }
   
}

function reset(){
    nuumber = 0;
    elemnt.textContent = nuumber
}
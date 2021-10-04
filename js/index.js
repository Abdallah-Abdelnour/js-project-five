let myBtn = document.querySelector('button');
let myInput = document.querySelector('input');
let myP = document.querySelector('.my-p');



myBtn.onclick = function(){
    if(myInput.value === ''){
        myInput.style.cssText = 'border: 2px solid #f19193;';
        myP.style.setProperty('opacity','1','important');
        //myP.style.cssText = 'opacity: 1;';
    }else if(myInput.value.search('@email.com')===-1){
        myInput.style.cssText = 'border-color: #cb6475;border-width: 2px;border-radius:solid;';
        myP.style.cssText = 'opacity: 1;';
    }else{
        myInput.value = '';
        myP.style.cssText = 'opacity: 0;';
    }
}
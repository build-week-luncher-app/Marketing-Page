const p = document.querySelector('.p');


const tween = new TweenMax();

tween.fromTo(p, 1, {x:0}, {x:100});

window.onload = function () {
    
    /* event listener for submit button*/
    document.getElementsByName("submit")[0].addEventListener('click', doThing);
    

    function doThing(){
       alert('Thank you for sharing!');
    }
    
}
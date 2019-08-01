const nav = document.querySelector('#nav');
const media = document.querySelector('#media');
const tile = document.querySelector('#tile');

nav.classList.add('animated', 'bounceInRight');
media.classList.add('animated', 'rotateInDownLeft');
tile.classList.add('animated', 'fadeInLeft');

window.onload = function () {
    
    /* event listener for submit button*/
    document.getElementsByName("submit")[0].addEventListener('click', doThing);
    

    function doThing(){
       alert('Thank you for sharing!');
    }
    
}
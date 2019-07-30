window.onload = function () {
    
    /* event listener */
    document.getElementsByName("submit")[0].addEventListener('click', doThing);
    
    /* function */
    function doThing(){
       alert('Thank you for sharing!');
    }
    
}
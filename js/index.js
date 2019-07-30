window.onload = function () {
    
    /* event listener */
    document.getElementsByName("share")[0].addEventListener('change', doThing);
    
    /* function */
    function doThing(){
       alert('Thank you for sharing!');
    }
    
}
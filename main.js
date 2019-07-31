const img = document.querySelectorAll("img");


const tl =new TimelineMax();
tl.from(img, 2, {x:600, ease:Bounce.easeOut})
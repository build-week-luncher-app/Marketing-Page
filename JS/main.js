const btn = document.querySelector(".btn");


const tl =new TimelineMax();
tl.from(btn, 2, {y:600, ease:Bounce.easeOut});
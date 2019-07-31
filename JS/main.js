const btn = document.querySelector(".btn");


const tl =new TimelineMax();
tl.fromTo(btn, 2, {height:"0%"},{height:"90%", ease: Power2.easeInOut});
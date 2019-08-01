const btn = document.querySelector(".btn");
const H2 = document.querySelector(".welcometo")
const welcome = document.querySelector(".welcome")
const nav = document.querySelector("#navi");


const tl =new TimelineMax();
tl.from(nav, 1, {x:1400, ease:Power4.easeOut});
tl.from(welcome, 2, {x: 1600, ease:Power4.easeOut});
tl.from(btn, 1, {y:-600, ease:Bounce.easeOut});
tl.from(H2, 1, {y:-600, ease:Bounce.easeOut});

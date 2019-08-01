const main = document.querySelector('.blog-main-content');
const nav = document.querySelector('.level');

const tl = new TimelineMax();

tl.fromTo(main, 2, {x: 1000}, {x: 0})
  .fromTo(nav, 2, {x: -2000}, {x: 0})
const main = document.querySelector('.blog-main-content');
const blog = document.querySelectorAll('.blog-content ');
const nav = document.querySelector('.level');

const tl = new TimelineMax();

tl.fromTo(main, 2, {x: 1000}, {x: 0})
  .fromTo(nav, 2, {x: -2000}, {x: 0},"-=2")
  .fromTo(blog, 2, {y: 2000}, {y: 0}, "-=2")
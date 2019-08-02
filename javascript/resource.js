const main = document.querySelector('.resource-main-content');
const resource = document.querySelectorAll('.resource-content ');
const nav = document.querySelector('.level');

const tl = new TimelineMax();

tl.fromTo(main, 2, {x: -2000}, {x: 0})
  .fromTo(nav, 2, {x: 2000}, {x: 0},"-=2")
  .fromTo(resource, 2, {y: -2000}, {y: 0}, "-=2")
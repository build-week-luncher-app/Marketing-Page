const form = document.querySelector('.contact-content');
const address = document.querySelector('.address-container');
const nav = document.querySelector('.level');

const tl = new TimelineMax();

tl.fromTo(form, 2, {y: 2000}, {y: 0})
  .fromTo(address, 2, {y: 2000}, {y: 0},"-=1.0")
  .fromTo(nav, 2, {x: 2000}, {x: 0, ease: Power2.easeInOut},"-=1.2");

const left = document.querySelector('.left-content');
const right = document.querySelector('.right-content');
const mainContent = document.querySelector('.main-content');

left.addEventListener('mouseenter', () => {
  mainContent.classList.add('hover-left');
});

left.addEventListener('mouseleave', () => {
  mainContent.classList.remove('hover-left');
});

right.addEventListener('mouseenter', () => {
  mainContent.classList.add('hover-right');
});

right.addEventListener('mouseleave', () => {
  mainContent.classList.remove('hover-right');
});
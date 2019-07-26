const left = document.querySelector('.left-content');
const right = document.querySelector('.right-right');
const mainContent = document.querySelector('.main-content');

left.addEventListener('mouseenter', () => {
  ServiceWorkerContainer.classList.add('hover-left');
});

left.addEventListener('mouseleave', () => {
  ServiceWorkerContainer.classList.remove('hover-left');
});

right.addEventListener('mouseenter', () => {
  ServiceWorkerContainer.classList.add('hover-right');
});

right.addEventListener('mouseleave', () => {
  ServiceWorkerContainer.classList.remove('hover-right');
});
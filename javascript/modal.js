const luncherModal = document.querySelector('#split-modal-left');
const feedModal = document.querySelector('#split-modal-right');
const luncherModalBtn = document.querySelector('.luncher');
const feedModalBtn = document.querySelector('.feed')
const closeLuncherBtn = document.querySelector('.close-button-left');
const closeFeedBtn = document.querySelector('.close-button-right');

// Listen for open click
luncherModalBtn.addEventListener('click', openLuncherModal);
feedModalBtn.addEventListener('click', openFeedModal);

// Listen for close click
closeLuncherBtn.addEventListener('click', closeLuncherModal);
closeFeedBtn.addEventListener('click', closeFeedModal);

// Listen for outside click
window.addEventListener('click', outsideLuncherClick);
window.addEventListener('click', outsideFeedClick);

// Function to open modals
function openLuncherModal() {
  luncherModal.style.display = 'block';
}

// Function to close modals
function closeLuncherModal() {
  luncherModal.style.display = 'none';
}

// Function to close modal outside of X
function outsideLuncherClick(event) {
  if (event.target == luncherModal) {
    luncherModal.style.display = 'none';
  }
}

// Function to open feed modal
function openFeedModal() {
  feedModal.style.display = 'block';
}

// Function to close feed modal
function closeFeedModal() {
  feedModal.style.display = 'none';
}

// Function to close feed modal outside of X
function outsideFeedClick(event) {
  if (event.target == feedModal) {
    feedModal.style.display = 'none';
  }
}
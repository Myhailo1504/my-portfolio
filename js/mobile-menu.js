const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelectorAll('.modal-btn-open');
const modalBtnClose = document.querySelectorAll('.modal-btn-close');
const menuLinks = document.querySelectorAll('.link__mobile-menu');

const toggleModal = () => {
  modal.classList.toggle('is-hidden');
};

modalBtnOpen.forEach(btn => {
  btn.addEventListener('click', toggleModal);
});

modalBtnClose.forEach(btn => {
  btn.addEventListener('click', toggleModal);
}); 
menuLinks.forEach(link => {
  link.addEventListener('click', toggleModal);
});
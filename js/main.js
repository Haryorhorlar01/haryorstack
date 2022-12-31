const selelectEl = el => document.querySelector(el);

const menuToggle = selelectEl('.menu_toggle');
const body = selelectEl('body');
const loader = selelectEl('.loader');

menuToggle.addEventListener('click', () => body.classList.toggle('open'));

window.addEventListener('load', e => {

  setTimeout(() => {
    loader.classList.add('.fadout');

    setTimeout(() => {
      loader.style.display = "none";
    }, 1000);
  }, 5000)
})
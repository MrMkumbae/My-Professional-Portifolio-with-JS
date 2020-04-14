var i = 0;
var images = [];
var time = 3000;

images[0] = "images/slide1.jpg";
images[1] = "images/slide2.jpg";
images[2] = "images/slide3.jpg";
images[3] = "images/slide4.jpg";

function replaceImage() {
   document.slide.src = images[i];

   if (i < images.length - 1) {
      i++;
   } else {
      i = 0
   }

   setTimeout("replaceImage()", time);
}

window.onload = replaceImage;

const navSlide = () => {
   const burger = document.querySelector('.burger');
   const nav = document.querySelector('.nav-links');
   const navLinks = document.querySelectorAll('.nav-links li');

   burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
   });

   navLinks.forEach((link, index) => {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;
   });

}

navSlide();

var toka = document.querySelectorAll("button.toka");

for (var i = 0; i < toka.length; i++) {
   toka[i].onclick = function () {
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("show");
   }
}

const openModalButtons = document.querySelectorAll(`[data-modal-target]`)
const closeModalButtons = document.querySelectorAll(`[data-close-button]`)
const overlay = document.getElementById(`overlay`)

openModalButtons.forEach(button => {
   button.addEventListener(`click`, () => {
      const modal = document.querySelector(button.dataset.modalTarget)
      openModal(modal)
   })
})

closeModalButtons.forEach(button => {
   button.addEventListener(`click`, () => {
      const modal = button.closest('.modal')
      closeModal(modal)

   })
})

function openModal(modal) {
   if (modal == null) return
   modal.classList.add('active')
   overlay.classList.add('active')
}

function closeModal(modal) {
   if (modal == null) return
   modal.classList.remove('active')
   overlay.classList.remove('active')
}
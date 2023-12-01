
let colorBtn = document.querySelector('#color')
let placeBtn = document.querySelector('#place')
let ritualBtn = document.querySelector('#ritual')
let skillBtn = document.querySelector('.drop')

function colorGen(evt){
    evt.preventDefault()

    alert('Blue is my favorite color')
}

function placeGen(evt){
    evt.preventDefault()

    alert('The Jeju island of South Korea')
}

function ritualGen(evt){
    evt.preventDefault()

    alert('Temple worship')
}

colorBtn.addEventListener('click', colorGen)
placeBtn.addEventListener('click', placeGen)
ritualBtn.addEventListener('click', ritualGen)

skillBtn.textContent = ('Click to View')

let slideIndex = 1;
showSlides(slideIndex);

// controls next/previous slides
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// function controls thumbnail
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

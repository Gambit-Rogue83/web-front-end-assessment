console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();

	alert('Your message has been submitted successfully');
}

function imgHover(evt) {
	evt.preventDefault()

	alert('Pawsitively Pretty')
}

let img = document.querySelector('img')
let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
img.addEventListener('mouseover', imgHover)

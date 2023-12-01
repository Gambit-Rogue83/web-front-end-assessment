
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

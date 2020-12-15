// Adding and removing 'X' on form
let formBtn = document.getElementById('close-form');
let form = document.getElementsByClassName('form');

//console.log(formBtn)
//console.log(form)
// form.addEventListener('click', function () {
//     form.style.display = 'none';
// })

function toggler() {
    form[0].classList.toggle('hide');
    if (formBtn.innerText === 'X') {
        formBtn.innerText = '+';
        //form[0].classList.remove('hide');
    } else {
        formBtn.innerText = 'X';
        //form[0].classList.add('hide');
    }
}

let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');

let emailList = [];

function validateForm() {
    if (nameInput.value === false && emailInput.value === false) {
        nameInput.style.border = '2px solid red';
        emailInput.style.border = '2px solid red';
        alert('you must enter a name and an email address to subscribe!')
    } else if (nameInput.value === false) {
        nameInput.style.border = '2px solid red';
        alert('please enter a name to subscribe')
    } else if (emailInput.value === false) {
        emailInput.style.border = '2px solid red';
        alert('please enter an email address to subscribe')
    } else {
        emailList.push({ name: nameInput.value, email: emailInput.value });
        //displayThankYou();
    }
}

form[0].addEventListener('submit', function (event) {
    event.preventDefault();
    validateForm();

})


// let formContainer = document.getElementById('form-container');
// let displayThankYou = () => {
//     formContainer.innerText = 'Thank you for subscribing!'
// }




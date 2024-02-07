// "use strict";
const success = document.querySelector('.success');
const newsletter = document.querySelector('.newsletter');
const submitBtn = document.querySelector('.submit-btn');
const successBtn = document.querySelector('.success-btn');
const emailInput = document.querySelector('#email')
const errorMsg = document.querySelector('.error-msg')

const submitEmail = function (el) {
    el.preventDefault()
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)) {
        newsletter.classList.add('hidden');
        success.classList.remove('hidden');
    } else {
        errorMsg.style.display = 'inline';
        emailInput.style.border = '1px solid #ff6257';
        setTimeout(() => {
            errorMsg.style.display = 'none';
            emailInput.style.border = '1px solid #9294a0';
            emailInput.style.background = '#fefefe';
            emailInput.focus();
        }, 2000);
    }
};

const returnHome = function () {
    newsletter.classList.remove('hidden');
    success.classList.add('hidden');
    emailInput.value = '';
    emailInput.focus();
};

submitBtn.addEventListener('click', submitEmail);
successBtn.addEventListener('click', returnHome);
'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++) {
    // btnsOpenModal[i].addEventListener('click', openModal);
   btnsOpenModal[i].addEventListener('click', function () {
        console.log('button clicked');
        modal.classList.remove('hidden');
    });
}
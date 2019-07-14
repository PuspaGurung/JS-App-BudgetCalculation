import '../scss/style.scss';

document.querySelector('.cancel-entry').addEventListener('click', function () {
    let dd = document.querySelector('#pop-up__box');
    dd.style.visibility = 'hidden';
});

function addIncome() {
    console.log('hi');
}

addIncome();

'use strict';

const form = document.querySelector('form');
const name = document.querySelector('#name');
const surname = document.querySelector('#surname');
const birthDate = document.querySelector('#birthDate');
const select = document.querySelector('#select');

const resultObj = {
    name: '',
    surname: '',
    birthDate: '',
    select: ''
};

form.addEventListener('submit', ev => {
    ev.preventDefault();
    resultObj.name = name.value;
    resultObj.surname = surname.value;
    resultObj.birthDate = birthDate.value;
    resultObj.select = select.value;

    console.log(resultObj);
    console.log(JSON.stringify(resultObj));
});
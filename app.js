/*function person(firstName, lastName, age){
   return 'You, '+ firstName + ' ' + lastName +', are a rockin '+ age +' year old.')
}*/
let firstName = document.getElementById('.firstName');
let lastName = document.getElementById('lastName');
let age = document.getElementById('age');
let subBtn = document.getElementById('subBtn')
let createPerson = document.getElementById('createPerson');


subBtn.addEventListener('click', createPerson){
    createPerson.innerHTML = 'You, ' + firstName + ' ' + lastName +' , are invited to attend Hogwarts Scool of Witchcraft & Wizardry...' + (age - 11) + ' years late. Oops.'
}   



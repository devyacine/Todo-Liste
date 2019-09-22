`use strict`;

// declare the variables

const button = document.getElementById('enter');
const input = document.getElementById('userinput');
const ul = document.querySelector('ul');
let li;

//describe function  click
function Click() {
    if (input.value.length > 0) {
        CreatedTodoliste();
    }
}
//describe function to keypress
function Keypress(ENTER) {
    if (input.value.length > 0 && (ENTER.keyCode === 13)) {
        CreatedTodoliste();
    }
}

//add function to created todolist
function CreatedTodoliste() {
    li = document.createElement('li');
    ul.insertAdjacentElement('beforeend', li);
    li.append(document.createTextNode(input.value));
    input.value = "";

}




button.addEventListener("click", Click);
input.addEventListener("keypress", Keypress);
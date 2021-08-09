let addNewThingButton = document.querySelector(".inputfield button");
let toDoContainer = document.getElementsByClassName("todoitems");
let inputField = document.querySelector(".inputfield input");

addNewThingButton.addEventListener('click', function() {
    var paragraph = document.createElement('p')
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
})

function logValue(id){
    var el = document.getElementById(id);
    console.log(el.value);
}

function getValue(id){
    var el = document.getElementById(id);
    return el.value;
} 

function addErrorClass (elementId) {
    var element = document.getElementById(elementId);
    element.className = 'error-input';
}

function addErrorClassToAllInputs() {
    addErrorClass('first-name');
    addErrorClass('last-name');
    addErrorClass('adress-1')
}

function addErrorClassToLastName () {
    addErrorClass ('last-name');
}

function onFirstNameKeyup (){
    addErrorClass ('first-name')
};

var FirstNameE1 = document.getElementById('first-name');
var sendButton = document.getElementById('send-button');
var firstNameId = 'first-name';
var lastNameId = 'last-name';

logValue(firstNameId);
logValue(firstNameId);
logValue(firstNameId);

logValue(lastNameId);
logValue(lastNameId);
logValue(lastNameId);

//sendButton.addEventListener('click', addErrorClassToLastName);
FirstNameE1.addEventListener('keydown', onFirstNameKeyup);

//var value = getValue(lastNameId);

//window.alert(value);

//window.setTimeout(addErrorClassToAllInputs, 2000);
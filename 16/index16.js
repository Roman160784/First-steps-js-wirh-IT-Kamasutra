var operationButton = document.getElementsByClassName('operation-button');
var input1 = document.getElementById('number1');
var input2 = document.getElementById('number2');
var calculatorDisplay = document.getElementById('display');

for (let i = 0; i < operationButton.length; i++) {
    var button = operationButton[i];
    button.addEventListener('click',onOperationsButtonClick);
}

function onOperationsButtonClick(eventObject) {
    var clickedElement = eventObject.currentTarget;
    var operation = clickedElement.innerHTML;
    makeOperation(operation);
}

function  makeOperation(operationCode) {
   var number1 = Number(input1.value); 
   var number2 = Number(input2.value); 

   if (operationCode === '+') { 
       var result = number1 + number2;}
else if (operationCode === '-') {
    var result = number1 - number2;}
else if (operationCode === '*') {
    var result = number1 * number2;}
else if (operationCode === '/') {
    var result = number1 / number2;}
    else{
        window.alert ('check code');}
window.alert(result);
}
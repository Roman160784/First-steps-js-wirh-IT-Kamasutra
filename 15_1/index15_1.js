var buttonPlus = document.getElementById('buttonPlus');
var buttonMinus = document.getElementById('buttonMinus');
var buttonMultiply = document.getElementById('buttonMultiply');
var buttonDevide = document.getElementById('buttonDevide');


var input1 = document.getElementById('number1');
var input2 = document.getElementById('number2');

function onButtonPlusClick() {
    var Number1 = Number(input1. value);
    var Number2 = Number(input2. value);

    summ = Number1 + Number2;
    window.alert(summ);
}
function onButtonMinusClick() {
    var Number1 = Number(input1. value);
    var Number2 = Number(input2. value);

    summ = Number1 - Number2;
    window.alert(summ);
}
function onButtonMultiplyClick() {
    var Number1 = Number(input1. value);
    var Number2 = Number(input2. value);

    summ = Number1 * Number2;
    window.alert(summ);
}
function onButtonDevideClick() {
    var Number1 = Number(input1. value);
    var Number2 = Number(input2. value);

    summ = Number1 / Number2;
    window.alert(summ);
}

buttonPlus.addEventListener ('click', onButtonPlusClick);
buttonMinus.addEventListener ('click', onButtonMinusClick);
buttonMultiply.addEventListener ('click', onButtonMultiplyClick);
buttonDevide.addEventListener ('click', onButtonDevideClick);
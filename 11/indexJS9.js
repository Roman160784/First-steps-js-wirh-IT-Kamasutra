var  firstNameE1;
var lastNameE2;
var adress1;
var citiesE1;
var citiesId;
var hobbies;
var picture;
var avatar;
var hobby1

citiesId = 'cities';



function alertValues (elementParamter){
    //console.log(elementParamter.value);
    //console.log(elementParamter.className);   
};



function getEl(id){
    console.log('somebody');
    var el = document.getElementById(id);
    return el;
}

firstNameE1 = document.getEl('first-name');
alertValues (firstNameE1);

lastNameE2 = document.getEl('last-name');
alertValues (lastNameE2);

adress1 = document.getEl('adress-1');
alertValues (adress1);

citiesE1 = document.getEl(citiesId);
alertValues (citiesE1);


hobbies = document.getEl('hobby');
alertValues (hobbies);

picture = document.getElementById('picture');
avatar = document.getElementById('avatar');
hobby1 = document.getElementById('hobby');

firstNameE1.className = 'new-class';

firstNameE1.value = 'Ramzes';
lastNameE2.value = 'Egorov';
//lastNameE2.setAttribute('value', 'Egorov');
window.alert(lastNameE2.className);
lastNameE2.className = 'error-input';
//avatar.src = 'https://sun2.velcom-by-minsk.userapi.com/Qs1rxfIEe4cmS-K50pOWU9U_59BLC4vln1qwbQ/RB-GqrP8Xuo.jpg';
avatar.title = 'I am avatar';
lastNameE2.title = 'wrong last name';
citiesE1.value = 'Kiev';
hobby1.value = 'I am not here';
//picture.innerHTML = 'abracadabra';
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


firstNameE1 = document.getElementById('first-name');
lastNameE2 = document.getElementById('last-name');
adress1 = document.getElementById('adress-1');
citiesE1 = document.getElementById(citiesId);
hobbies = document.getElementById('hobby');
picture = document.getElementById('picture');
avatar = document.getElementById('avatar');
hobby1 = document.getElementById('hobby');

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
//find elements
var showPrevBtn = document.getElementById('show-prev-btn');
var showNextBtn = document.getElementById('show-next-btn');
var slideImage = document.getElementById('slide-img');

//subscribe to events
showPrevBtn.addEventListener('click', onShowPrevBtnClick);
showNextBtn.addEventListener('click', onShowNextBtnClick);

//create images array
var imagesUrls = [];
imagesUrls.push('https://shkolazhizni.ru/img/content/i196/196691_or.jpg');
imagesUrls.push('https://shkolazhizni.ru/img/content/i202/202606_or.jpg');
imagesUrls.push('https://testyourmind.ru/wp-content/uploads/2019/01/figth-iskusstvo.jpg');

//add img in brouser
var currentIndex = 0;
slideImage.src = imagesUrls[currentIndex];
showPrevBtn.disabled = true; 

function onShowPrevBtnClick () {
    currentIndex--;
    slideImage.src = imagesUrls[currentIndex];
    showNextBtn.disabled = false; 

//desabled prev button if need
if (currentIndex === 0) {
    showPrevBtn.disabled = true; 
    }
}

function onShowNextBtnClick () {
    currentIndex++;
    slideImage.src = imagesUrls[currentIndex];
    showPrevBtn.disabled = false; 

    //desabled next button if need
    if (currentIndex === imagesUrls.length - 1) {
        showNextBtn.disabled = true; 
    }
}

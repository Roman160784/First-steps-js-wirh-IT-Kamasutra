var slider1 = {
    imagesUrls: [],
    currentIndex: 0,
    showPrevBtn: document.getElementById('show-prev-btn'),
    showNextBtn: document.getElementById('show-next-btn'),
    slideImage: document.getElementById('slide-img'),

    start: function name(params) {
        var that = this;
            this.showPrevBtn.addEventListener('click', function (event) {
                that.onShowPrevBtnClick(event);
            });
            this.showNextBtn.addEventListener('click', function (event) {
                that.onShowNextBtnClick(event);
            });

            //create images array

            this.imagesUrls.push('https://shkolazhizni.ru/img/content/i196/196691_or.jpg');
            this.imagesUrls.push('https://shkolazhizni.ru/img/content/i202/202606_or.jpg');
            this.imagesUrls.push('https://testyourmind.ru/wp-content/uploads/2019/01/figth-iskusstvo.jpg');

            this.slideImage.src = this.imagesUrls[this.currentIndex];
            this.showPrevBtn.disabled = true; 
    },

    onShowPrevBtnClick: function (event) {
        this.currentIndex--;
        this.slideImage.src = this.imagesUrls[this.currentIndex];
        this.showNextBtn.disabled = false;

        //desabled prev button if need
        if (this.currentIndex === 0) {
            this.showPrevBtn.disabled = true;
        }
    },

    onShowNextBtnClick: function (event) {
        this.currentIndex++;
        this.slideImage.src = this.imagesUrls[this.currentIndex];
        this.showPrevBtn.disabled = false;

        //desabled next button if need
        if (this.currentIndex === this.imagesUrls.length - 1) {
            this.showNextBtn.disabled = true;
        }
    }
} 
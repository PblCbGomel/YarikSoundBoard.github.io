let icons = ['icon1.png', 'icon2.png', 'icon3.png'];
let indexImg = 0;
let timeChange = 8000;

setInterval(function changeImg() {
    ++indexImg;
    if(indexImg == icons.length) {
        indexImg = 0;
    }

    document.getElementById('icon').src = './Icons/' + icons[indexImg];
}, timeChange);

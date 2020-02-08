let bigPic = document.querySelector('.big-pic');
let img = document.querySelectorAll('img');
let left = document.querySelector('.left');
let right = document.querySelector('.right');

let index = 1;

left.addEventListener('click', function () {

    for (let k = 0; k < img.length; k++) {
        img[k].classList.remove('active');
    }
    img[index].classList.add('active')
    
    index++;

    if(index == img.length - 1){
        index = 0
    }
})
right.addEventListener('click', function () {

    for (let k = 0; k < img.length; k++) {
        img[k].classList.remove('active');
    }
    img[index].classList.add('active')
    
    index++;

    if(index == img.length - 1){
        index = 0
    }
})





'user strict';
const secCon = document.querySelector('.sec-con');
const gallery = secCon.querySelector('.gallery');
const galleryUl = gallery.querySelector('ul');
const galleryUlLi = galleryUl.querySelectorAll('li');
const centerBtn = secCon.querySelector('.centerBtn');
const spanArrow = centerBtn.querySelectorAll('span.arrow');
const items = secCon.querySelector('.items')
const itemsUl = items.querySelector('ul')
const itemsUlLi = itemsUl.querySelectorAll('li');

let i = -1;

function autoGallery() {
    if (i >= galleryUlLi.length - 1) i = -1;
    i++
    let gab = galleryUlLi[1].offsetLeft - galleryUlLi[0].offsetLeft;
    let goto = (-gab * i) + 'px';
    gallery.style.left = goto;
    gallery.style.transition = 'all .5s'

    itemsUlLi.forEach((val, idx) => {
        if (idx == i) {
            val.classList.add('on');
        } else {
            val.classList.remove('on');
        }
    });
    if (i >= galleryUlLi.length - 1) i = -1;
}
let setIn = setInterval(autoGallery, 5000);

const overOut = secCon.querySelectorAll('.overOut');
overOut.forEach(el => {
    el.addEventListener('mouseover', () => clearInterval(setIn));
    el.addEventListener('mouseout', () => setIn = setInterval(autoGallery, 5000));
});

itemsUl.addEventListener('click', () => {
    let _this = event.target;
    itemsUlLi.forEach((el, idx) => {
        if (el == _this) {
            el.classList.add('on');
            i = idx;
            let gab = galleryUlLi[1].offsetLeft - galleryUlLi[0].offsetLeft;
            let goto = (-gab * i) + 'px';
            gallery.style.left = goto;
            gallery.style.transition = 'all .5s'
        } else {
            el.classList.remove('on')
        }
    });
});
centerBtn.addEventListener('click', () => {
        let _this = event.target;

        spanArrow.forEach((el, idx) => {
            if (el == _this) {
                if (el.classList.contains('arrowLeft')) {
                    i--;
                    if (i < 0) i = galleryUlLi.length - 1;
                    let gab = galleryUlLi[1].offsetLeft - galleryUlLi[0].offsetLeft;
                    let goto = (-gab * i) + 'px';
                    gallery.style.left = goto;
                    gallery.style.transition = 'all .5s'
                    itemsUlLi.forEach((val, idx) => {
                        if (idx == i) {
                            val.classList.add('on');
                        } else {
                            val.classList.remove('on');
                        }
                    });

                }else{
                    i++;
                    if(i>galleryUlLi.length-1)i=0;
                    let gab = galleryUlLi[1].offsetLeft - galleryUlLi[0].offsetLeft;
                    let goto = (-gab * i) + 'px';
                    gallery.style.left = goto;
                    gallery.style.transition = 'all .5s';
                    itemsUlLi.forEach((val, idx) => {
                        if (idx == i) {
                            val.classList.add('on');
                        } else {
                            val.classList.remove('on');
                        }
                    });
                }
            }
        });
    });
    (() => autoGallery())();
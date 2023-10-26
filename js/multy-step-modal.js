window.addEventListener('load', function () {

    let overlay = document.querySelector('.overlay');
    let close = document.querySelector('.clouse_wrapper')

    document.querySelectorAll('.btn_popup_amts').forEach((el) => {
        el.addEventListener('click', function () {
            overlay.classList.add('popup_active');

            close.addEventListener('click', function () {
                overlay.classList.remove('popup_active');
            });
        });
    });

    window.addEventListener('click', function (e) {
        if (e.target === overlay) {
            overlay.classList.remove('popup_active');
        }
    });

const tabs = document.querySelectorAll('.tab');
const clouse = document.querySelector('.clouse');
const btnSubmit = document.querySelector('.btn_submit');
const btnPrev = document.querySelector('.btn_prev');
const btnNext = document.querySelector('.btn_next');
const bullets = document.querySelectorAll('.bullet');

// clouse.addEventListener('click' function(){

// });

let currentTab = 0;

showTab(currentTab);

function showTab(n) {
    tabs[n].classList.add('tab_active');

    if (n == 0) {
        btnPrev.disabled = true;
        btnSubmit.disabled = true;
    }
    else {
        btnPrev.disabled = false;
    }

    if (n == (tabs.length - 1)) {
        btnSubmit.disabled = false;
    }
}

btnNext.addEventListener('click', function (e) {
    e.preventDefault();
    if (currentTab == tabs.length) {
    }
    tabs.forEach(element => {
        element.classList.remove('tab_active');
    });

    currentTab++;
    tabs[currentTab].classList.add('tab_active');
    showTab(currentTab);
    getIndex();

});

btnPrev.addEventListener('click', function (e) {
    e.preventDefault();

    tabs.forEach(element => {
        element.classList.remove('tab_active');
    });

    currentTab = currentTab - 1;
    tabs[currentTab].classList.add('tab_active');
    showTab(currentTab);
    getIndex();
});

function getIndex() {
    let count = 0;
    tabs.forEach(function (item) {

        if (item.className == 'tab tab_active') {
            bulletSetActive(count);
        }
        count++;
    });
}

function bulletSetActive(num) {
    bullets.forEach(item => {
        item.classList.remove('bullet_active');
    });
    bullets[num].classList.add('bullet_active');
}
});

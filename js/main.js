
window.addEventListener('load', function () {

    // меню бургер

    const menuBurger = document.querySelector('.btn_menu');
    const mobileClouse = document.querySelector('.momile_clouse');
    const mobileList = document.querySelector('.mobile_list');
    const navMobile = document.querySelector('.nav_mobile');

    menuBurger.addEventListener('click', function () {

        if (navMobile.classList.contains('display_none')) {
            navMobile.classList.remove('display_none');
        }

    });

    mobileClouse.addEventListener('click', function () {

        navMobile.classList.add('display_none');

    });

    mobileList.addEventListener('click', function () {

        navMobile.classList.add('display_none');

    });


    // аккордион
    const accordion = document.querySelectorAll('.accordion');

    for (item of accordion) {
        item.addEventListener('click', function () {

            if (this.classList.contains('active')) {
                this.classList.remove('active');
            } else {
                for (el of accordion) {
                    el.classList.remove('active');
                }
                this.classList.add('active');
            }

        });

    }

    document.querySelectorAll('.accordion').forEach((el) => {
        el.addEventListener('click', () => {

            let content = el.nextElementSibling;

            if (content.style.maxHeight) {
                document.querySelectorAll('.accordion_content').forEach((el) => el.style.maxHeight = null)
            } else {
                document.querySelectorAll('.accordion_content').forEach((el) => el.style.maxHeight = null)
                content.style.maxHeight = content.scrollHeight + 'px'
            }

        });
    });

});

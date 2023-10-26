//PopUp форма

window.addEventListener('load', function () {

    let overlay = document.querySelector('.overlay');
    let close = document.querySelector('.close')

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
});
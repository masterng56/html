// аккордион

window.addEventListener('load', function () {

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
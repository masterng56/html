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
    let tabInputs = '';
    // const bullets = document.querySelectorAll('.bullet');

    // clouse.addEventListener('click' function(){

    // });

    let currentTab = 0;

    showTab(currentTab);

    let currentStep = document.querySelectorAll('.tab_active input');
    console.log(currentStep[0]);

    function showTab(currentTab) {
        tabs[currentTab].classList.add('tab_active');

        if (currentTab == 0) {
            btnPrev.disabled = true;
            btnPrev.style.color = "white";
            btnSubmit.disabled = true;
            btnSubmit.style.display = "none";
            
        }
        else {
            btnPrev.disabled = false;
        }

        if (currentTab == (tabs.length - 1)) {
            btnSubmit.disabled = false;
            btnNext.disabled = true;
            btnNext.style.display = "none";
            btnSubmit.style.display = "block";
        }
    }

    btnNext.addEventListener('click', function (e) {
        e.preventDefault();
        tabInputs = document.querySelectorAll('.tab_active input');
        
        if(validateFields(tabInputs)){
            validateFields(tabInputs);
            console.log(validateFields(tabInputs));
            removeActive()
        btnPrev.disabled = false;
        btnPrev.style.color = "#0260A2";
        currentTab++;
        tabs[currentTab].classList.add('tab_active');
        showTab(currentTab);
        getIndex();
        if (currentTab == (tabs.length - 1)) {
            btnSubmit.disabled = false;
            btnNext.disabled = true;
        }
        }
        
        
      

    });

    btnPrev.addEventListener('click', function (e) {
        e.preventDefault();
        removeActive()
        btnNext.disabled = false;
        btnNext.style.display = "block";
        currentTab = currentTab - 1;
        tabs[currentTab].classList.add('tab_active');
        showTab(currentTab);
        getIndex();
    });

    function getIndex() {
        let count = 0;
        tabs.forEach(function (item) {

            if (item.className == 'tab tab_active') {
                // bulletSetActive(count);
            }
            count++;
        });
    }

    // function bulletSetActive(num) {
    //     bullets.forEach(item => {
    //         item.classList.remove('bullet_active');
    //     });
    //     bullets[num].classList.add('bullet_active');
    // }

    function removeActive() {
        tabs.forEach(element => {
            element.classList.remove('tab_active');
        });
    }

    function validateFields(array){
        array.forEach(element => {
            if(element.value === ''){
                element.classList.add('err');
                return false;
            }
            else{
                element.classList.remove('err');
                return true;
                console.log('true');
            }
        });
    }
});

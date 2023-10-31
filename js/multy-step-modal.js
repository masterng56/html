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
	const tabOne = document.querySelectorAll('.tab_one');
	const tabTwo = document.querySelectorAll('.tab_two');
	const clouse = document.querySelector('.clouse');
	const btnSubmit = document.querySelector('.btn_submit');
	const btnPrev = document.querySelector('.btn_prev');
	const btnNext = document.querySelector('.btn_next');
	const errMessage = document.querySelector('.err_message');
	const pattern = {
		name: /^[а-яА-ЯёЁ]{2}/,
		email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		phone: /^((\+7|7|8)+([0-9]){10})$/,
		text: /^[а-яА-ЯёЁa-zA-Z0-9]{3}/,
	}

	let errors = [];
	let tabInputs = '';
	let validate = '';
	// const bullets = document.querySelectorAll('.bullet');


	let currentTab = 0;

	showTab(currentTab);

	let currentStep = document.querySelectorAll('.tab_active input');
	let inputName = document.querySelector('input[name = "name"]');
	let inputOtchestvo = document.querySelector('input[name = "otchestvo"]');
	let inputFamilia = document.querySelector('input[name = "familia"]');
	let inputEmail = document.querySelector('input[name = "email"]');
	let inputPhone = document.querySelector('input[name = "phone"]');
	let inputEducation = document.querySelector('input[name = "education"]');
	let inputСity = document.querySelector('input[name = "city"]');
	let inputCheckbox = document.querySelector('input[name = "agree"]');

	function validationData(str, rx) {
		return rx.test(String(str));
	}


	btnNext.addEventListener('click', function (e) {
		e.preventDefault();
		let nameValue = inputName.value;
		let otchestvoValue = inputOtchestvo.value;
		let familiaValue = inputFamilia.value;

		let emailValue = inputEmail.value;
		let phoneValue = inputPhone.value;
		let educationValue = inputEducation.value;
		let cityValue = inputСity.value;

		let emptyInputs = Array.from(currentStep).filter(input => input.value === '');

		currentStep.forEach(function (input) {
			if (input.value === '') {
				input.classList.add('err');
			}

			else {
				input.classList.remove('err');

			}

			if (emptyInputs.length !== 0) {
				errMessage.innerText = 'Заполните все поля';
				message();
				return false;
			}

			if (!validationData(nameValue, pattern.name)) {
				inputName.classList.add('err');
				errMessage.innerText = 'Пле "Имя" заполнено не правильно';

				message();
				return false;
			}
			else {
				inputName.classList.remove('err');
			}

			if (!validationData(otchestvoValue, pattern.name)) {
				inputOtchestvo.classList.add('err');
				errMessage.innerText = 'Поле "Отчество" заполнено не правильно';

				message();
				return false;
			}
			else {
				inputOtchestvo.classList.remove('err');

			}

			if (!validationData(familiaValue, pattern.name)) {
				inputFamilia.classList.add('err');
				errMessage.innerText = 'Поле "Фамилия" заполнено не правильно';

				message();
				return false;
			}
			else {
				inputFamilia.classList.remove('err');

			}

			if (!validationData(emailValue, pattern.email)) {
				inputEmail.classList.add('err');
				errMessage.innerText = 'Поле "Email" заполнено не правильно';

				message();
				return false;
			}
			else {
				inputEmail.classList.remove('err');

			}

			if (!validationData(phoneValue, pattern.phone)) {
				inputPhone.classList.add('err');
				errMessage.innerText = 'Поле "Телефон" заполнено не правильно';

				message();
				return false;
			}
			else {
				inputPhone.classList.remove('err');
			}

			if (!validationData(inputEducation.value, pattern.text)) {
				inputEducation.classList.add('err');
				errMessage.innerText = 'Поле "Предметы по ЕГЭ" заполнено не правильно';

				message();
				return false;
			}
			else {
				inputEducation.classList.remove('err');

			}

			if (!validationData(cityValue, pattern.text)) {
				inputСity.classList.add('err');
				errMessage.innerText = 'Поле "Место рождения" заполнено не правильно';

				message();
				return false;
			}
			else {
				inputСity.classList.remove('err');
			}

		});
		removeActive()
		btnPrev.disabled = false;
		btnPrev.style.color = "#0260A2";
		currentTab++;

		tabs[currentTab].classList.add('tab_active');
		getIndex();
		btnPrev.disabled = false;
		btnSubmit.disabled = false;
		btnNext.disabled = true;
		btnNext.style.display = "none";
		btnSubmit.style.display = "block";

	});

	btnSubmit.addEventListener('click', function (e) {
		let stepInputs = document.querySelectorAll('.tab_active input');
		emptyInputs = Array.from(currentStep).filter(input => input.value === '');
		let textArea = document.querySelector('textarea[name="whyyou"]');
		let subjectsInput = document.querySelector('input[name="subjects"]');
		let pointsInput = document.querySelector('input[name="points"]');
		let averageInput = document.querySelector('input[name="average"]');
		let checkboxInput = document.querySelector('#form_agree');
		let agree_label = document.querySelector('.agree_label');

		e.preventDefault();
		console.log(currentStep);
		stepInputs.forEach(function (input) {
			if (!subjectsInput.value === '') {
				if (!validationData(subjectsInput.value, pattern.text)) {
					errMessage.innerText = 'Поле "Средний бал" заполнено не правильно';
					subjectsInput.classList.add('err');
					message();
					return false;
				}
				else {
					subjectsInput.classList.remove('err');
				}
			}


			if (!pointsInput.value === '') {
				if (!validationData(pointsInput.value, pattern.text)) {
					errMessage.innerText = 'Поле "Средний бал" заполнено не правильно';
					console.log(textArea);
					pointsInput.classList.add('err');
					message();
					return false;
				}
				else {
					pointsInput.classList.remove('err');
				}
			}

			if (!validationData(averageInput.value, pattern.text)) {
				errMessage.innerText = 'Поле "Средний бал" заполнено не правильно';
				console.log(textArea);
				averageInput.classList.add('err');
				message();
				return false;
			}
			else {
				averageInput.classList.remove('err');
			}

			if (!validationData(textArea.value, pattern.text)) {
				errMessage.innerText = 'Поле "Почему вы" заполнено не правильно';
				
				textArea.classList.add('err');
				message();
				return false;
			}
			else {
				textArea.classList.remove('err');
			}

			if (!checkboxInput.checked) {
				errMessage.innerText = 'Примите согласие на обработку данных';
				
				agree_label.classList.add('err');
				message();
				return false;
			}
			else {
				agree_label.classList.remove('err');
				errMessage.innerText = 'Заявка отправлена!';
				message();
			}

		});


	});
	errMessage.innerText = 'Заявка отправлена!';
	message();

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
			btnSubmit.disabled = false;
			btnNext.disabled = true;
			btnNext.style.display = "none";
			btnSubmit.style.display = "block";

		}

		// if (currentTab == (tabs.length - 1)) {
		// 	btnSubmit.disabled = false;
		// 	btnNext.disabled = true;
		// 	btnNext.style.display = "none";
		// 	btnSubmit.style.display = "block";
		// }
	}

	// Обработка клика на кнопку вперед
	// btnNext.addEventListener('click', function (e) {
	// 	e.preventDefault();
	// 	tabInputs = document.querySelectorAll('.tab_active input');
	// 	validateFields(tabInputs);

	// 	if (validate == 'false') {
	// 		message();
	// 	}

	// 	if (validate == 'true') {
	// 		removeActive()
	// 		btnPrev.disabled = false;
	// 		btnPrev.style.color = "#0260A2";
	// 		currentTab++;
	// 		tabs[currentTab].classList.add('tab_active');
	// 		showTab(currentTab);
	// 		getIndex();
	// 		if (currentTab == (tabs.length - 1)) {
	// 			btnSubmit.disabled = false;
	// 			btnNext.disabled = true;
	// 		}
	// 	}

	// });

	// Обработка клика на кнопку назад
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



	// function validateFields(array) {
	// 	array.forEach(element => {

	// if (element.getAttribute('name') == 'name') {
	// 	if (element.value === '') {

	// validate = 'false';
	// element.classList.add('err');
	// errMessage.innerText = "поле имя не должно быть пустым";
	// }
	// if (element.value !== '') {
	// console.log(element.value);
	// element.classList.remove('err');
	// 	}
	// }
	// else {
	// 	if (!element.value === '') {
	// element.classList.remove('err');
	// validate = 'true';
	// console.log('true');
	// 	}

	// }

	// if(element.getAttribute('name') == 'name'){
	//     console.log(element.getAttribute('name'));
	//     console.log(element);
	// }

	// 	});
	// }

	function message() {
		errMessage.classList.add('err_message_ative');
		setTimeout(function () {
			errMessage.classList.remove('err_message_ative');
		}, 2000);
	}




	function removeActive() {
		tabs.forEach(element => {
			element.classList.remove('tab_active');
		});
	}

	function getIndex() {
		let count = 0;
		tabs.forEach(function (item) {

			if (item.className == 'tab tab_active') {
				// bulletSetActive(count);
			}
			count++;
		});
	}

	// Буллеты
	// function bulletSetActive(num) {
	//     bullets.forEach(item => {
	//         item.classList.remove('bullet_active');
	//     });
	//     bullets[num].classList.add('bullet_active');
	// }


});

const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
// let copyToClipboardBtn = document.getElementById('copy-to-clipboard');

const input = document.getElementById('link-input');
const linkForm = document.getElementById('link-form');
const errMsg = document.getElementById('err-msg');

btn.addEventListener('click', navToggle);
linkForm.addEventListener('submit', formSubmit);

// Toggle Mobile Menu
function navToggle() {
	btn.classList.toggle('open');
	menu.classList.toggle('flex');
	menu.classList.toggle('hidden');
}

// Validate a URL
function validURL(str) {
	var pattern = new RegExp(
		'^(https?:\\/\\/)?' + // protocol
			'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
			'((\\d{1,3}\\.){3}\\d{1,3}))' +
			'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
			'(\\?[;&a-z\\d%_.~+=-]*)?' +
			'(\\#[-a-z\\d_]*)?$',
		'i'
	);
	return !!pattern.test(str);
}

function formSubmit(e) {
	e.preventDefault();

	if (input.value === '') {
		errMsg.innerHTML = 'Please enter something';
		input.classList.add('border-red');
	} else if (!validURL(input.value)) {
		errMsg.innerHTML = 'Please enter a valid URL';
		input.classList.add('border-red');
	} else {
		errMsg.innerHTML = '';
		input.classList.remove('border-red');
		alert('Success');
	}
}

// Select on pressing COPY
function copyToClipboard(e, name) {
    e.preventDefault();
    let data = document.querySelector('[data-' + name + ']');
    let url = data.value;

    data.select();
    data.setSelectionRange(0, 99999); /* For mobile devices */
    navigator.clipboard.writeText(url);
    document.execCommand('copy');
}
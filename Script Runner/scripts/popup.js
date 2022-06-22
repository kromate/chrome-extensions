// ----------------- Beginning of Tab Logic -----------------

let tabsContainer = document.querySelector('#tabs');
let tabTogglers = tabsContainer.querySelectorAll('#tabs li');

tabTogglers.forEach(function (toggler) {
	toggler.addEventListener('click', function (e) {
		e.preventDefault();
		console.log(this);
		let tabName = this.getAttribute('data-name');
		console.log(tabName);
		let tabContents = document.querySelector('#tab-contents');
		for (let i = 0; i < tabContents.children.length; i++) {
			console.log(tabTogglers[i].classList);
			tabTogglers[i].classList.remove('active_tab');
			tabContents.children[i].classList.remove('hidden');
			if ('#' + tabContents.children[i].id === tabName) {
				continue;
			}

			tabContents.children[i].classList.add('hidden');
		}

		e.target.classList.add('active_tab');
	});
});

// ------------- End of Tab Logic ----------------------------

// ------------- Beginning of Editor Logic -------------------
let selectMenu = document.querySelector('#lang_type');
let editor = document.querySelector('#board');
let copyBtn = document.querySelector('#copy');
let formatBtn = document.querySelector('#format');
let languageType = 'html';

selectMenu.addEventListener('change', (e) => {
	languageType = e.target.value;
});
formatBtn.addEventListener('click', async () =>
{
	console.log('Clicked');
	console.log(languageType);
	formatBtn.innerHTML = 'loading...';
	formatBtn.disabled = true;
	let sentData = {
		type: 'formatCode',
		value: editor.value,
		lang: languageType,
	}
	chrome.runtime.sendMessage(sentData, (response) =>
	{
	editor.value = response
	formatBtn.innerHTML = 'Format';
	formatBtn.disabled = false;
});

});
copyBtn.addEventListener('click', (e) => {
	editor.select();
	if (document.execCommand('copy')) {
		console.log('copied');
		chrome.notifications.create({
			title: 'Code Formatter',
			message: 'Code copied successfully',
			iconUrl: 'assets/ext-icon.png',
			type: 'basic',
		});
	}
});

// ------------- End of Editor Logic ---------------------------

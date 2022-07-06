import { storageGet } from './helpers.js';

export const initTabs = () => {
	let tabsContainer = document.querySelector('#tabs');
	let tabTogglers = tabsContainer.querySelectorAll('#tabs li');

	tabTogglers.forEach(function (toggler) {
		toggler.addEventListener('click', function (e) {
			e.preventDefault();
			let tabName = this.getAttribute('data-name');
			let tabContents = document.querySelector('#tab-contents');
			for (let i = 0; i < tabContents.children.length; i++) {
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
};

export const fetchScript = async () => {
	let scripts = await storageGet();
	console.log(scripts);
	// console.log(uuidv4());
};

export const uuidv4 = () => {
	return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
		(
			c ^
			(crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
		).toString(16)
	);
};

export const saveCode = () => {
	let title = document.getElementById('title').value;
	let desc = document.getElementById('desc').value;
	let code = document.getElementById('code').value;
	document.getElementById('editor').addEventListener('submit', () => {
		alert({
			title,
			desc,
			code,
		});
	});
};

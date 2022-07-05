import { storageGet } from './helpers.js';

export const initTabs = () => {
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
};

export const fetchScript = async () => {
	let scripts = await storageGet();
	console.log(scripts);
};

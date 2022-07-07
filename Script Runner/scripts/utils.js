import {
	emptyState,
	storageGet,
	storageRemove,
	storageSet,
	isEmpty,
	createBody,
} from './helpers.js';

let contentBody = document.querySelector('#commandList');
let currentTab = '';
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
	contentBody.innerHTML = '';
	if (isEmpty(scripts)) {
		contentBody.innerHTML = emptyState();
	} else {
		for (let item in scripts) {
			appendElements(scripts[item]);
		}
	}
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
	document.getElementById('editor').addEventListener('submit', async (e) => {
		e.preventDefault();
		let id = uuidv4();
		let title = document.getElementById('title').value;
		let desc = document.getElementById('desc').value;
		let code = document.getElementById('code').value;
		let data = {
			title,
			desc,
			code,
			id,
		};

		await storageSet({ [id]: data });
		clearForm();
		await fetchScript();
	});
};

export const appendElements = (obj) => {
	const { code, id } = obj;
	contentBody.appendChild(createBody(obj));
	document.getElementById(id).addEventListener('click', () => runCode(code));
	document
		.getElementById(`del-${id}`)
		.addEventListener('click', () => delCode(id));
};
export const clearForm = () => {
	document.getElementById('title').value = '';
	document.getElementById('desc').value = '';
	document.getElementById('code').value = '';
};

export const runCode = (code) => {
	console.log('Running...', code);
	chrome.scripting.executeScript(
		{
			target: { tabId: currentTab },
			files: ['script.js'],
		},
		() => {
			Alert('Helloe');
		}
	);
};
export const delCode = async (id) => {
	await storageRemove(id);
	await document.getElementById(`node-${id}`).remove();
	await fetchScript();
};

export const initCurrentChromeTab = () => {
	chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
		console.log(tabs[0]);
		currentTab = tabs[0];
	});
};

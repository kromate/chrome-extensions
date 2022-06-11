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

let selectMenu = document.querySelector('#lang_type');
let editor = document.querySelector('#board');
let copyBtn = document.querySelector('#copy');

selectMenu.addEventListener('change', (e) =>
{
	console.log(e.target.value);
});
copyBtn.addEventListener('click', (e) =>
{
	editor.select()
	if (document.execCommand('copy'))
	{
		console.log('copied');
		chrome.notifications.create({
			title: 'Code Formatter',
			message: 'Code copied successfully',
			iconUrl: 'assets/ext-icon.png',
			type: 'basic',
		})
	}
});

let options = {
	indent_inner_html: false,
	indent_size: 2,
	indent_char: '\t',
	wrap_line_length: 78,
	brace_style: 'expand',
	preserve_newlines: true,
	max_preserve_newlines: 5,
	indent_handlebars: false,
	extra_liners: ['/html'],
	selector_separator: ' ',
	end_with_newline: false,
	newline_between_rules: true,
	space_around_selector_separator: true,
};

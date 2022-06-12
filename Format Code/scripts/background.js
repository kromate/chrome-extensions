importScripts('./prettier/standalone.js');
importScripts('./prettier/html.js');
importScripts('./prettier/css.js');
importScripts('./prettier/typescript.js');

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	const { type, value, lang } = message;
	if (type === 'formatCode') {
		let formatted = prettier.format(value, {
			parser: lang,
			plugins: prettierPlugins,
      tabWidth: 4,
      printWidth: 120,
      useTabs:true,
      bracketSameLine:true,
      htmlWhitespaceSensitivity:'ignore',
		});
		sendResponse(formatted);
	}
});

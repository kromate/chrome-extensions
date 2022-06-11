importScripts('./prettier/standalone.js')
importScripts('./prettier/html.js')
importScripts('./prettier/css.js')
importScripts('./prettier/typescript.js')

chrome.runtime.onMessage.addListener((message, sender, sendResponse) =>
{
 const { type, value, lang } = message;
  if (type === 'formatCode')
  {
    console.log(message);
  //  let formatted = prettier.format(editor.value, {
	// 	parser: lang,
	// 	plugins: prettierPlugins,
	// 	indent_size: 4,
	// })
    sendResponse('formatted');
  }
});




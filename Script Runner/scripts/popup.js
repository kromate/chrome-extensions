import {
	fetchScript,
	initCurrentChromeTab,
	initTabs,
	saveCode,
} from './utils.js';

initTabs();
fetchScript();
saveCode();
initCurrentChromeTab();

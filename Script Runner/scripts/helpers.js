export const storageGet = (data) => {
	return new Promise((resolve) => chrome.storage.sync.get(data, resolve));
};

export const storageSet = (data) => {
	return new Promise((resolve) => chrome.storage.sync.set(data, resolve));
};

export const storageRemove = (id) => {
	return new Promise((resolve) => chrome.storage.sync.remove(id, resolve));
};

export const emptyState = () => {
	return ` <img src="./assets/empty.svg" alt="empty icon" height='150px' width='150px'>
        <p class="text-center text-sm w-56 mt-6">
          You currently have no saved Commands
        </p>`;
};

function isEmpty(obj) {
	return Object.keys(obj).length === 0;
}

export const storageGet = (data) => {
  return new Promise(resolve => chrome.storage.sync.get(data, resolve));
};

export const storageSet = (data) => {
  return new Promise(resolve => chrome.storage.sync.set(data, resolve));
};
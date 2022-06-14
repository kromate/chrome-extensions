export const storageGet = (data) => {
  return new Promise(resolve => chrome.storage.local.get(data, resolve));
};

export const storageSet = (data) => {
  return new Promise(resolve => chrome.storage.local.set(data, resolve));
};
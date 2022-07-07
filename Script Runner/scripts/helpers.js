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

export const isEmpty = (obj) => {
	return Object.keys(obj).length === 0;
};

export const createBody = (obj) => {
	const { title, desc, id } = obj;
	const node = document.createElement('details');
	node.className = `w-full mt-2 w-full bg-white px-2.5 py-2 border`;
	node.setAttribute('id', `node-${id}`);
	node.innerHTML = `<summary class="flex items-center  py-4  max-w-[100%]  text-sm">
			${title}
            <button class="ml-auto" id=${id} >
              <svg class="fill-current opacity-75 w-5 h-5 ml-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" fill="white" stroke="#000" />
                <path
                  d="M16.7088 11.6649H14.7535H14.4841L14.3359 11.4399L13.4214 10.0512L13.4019 10.0268L13.3764 10.0064L11.0764 8.47311L11.0755 8.47252C10.9395 8.38139 10.7846 8.34709 10.6416 8.36454C10.4826 8.38393 10.3294 8.45803 10.2269 8.56839C10.2268 8.5685 10.2267 8.56861 10.2266 8.56872L8.71327 10.2082L8.79858 10.2864L10.298 8.64685L10.3055 8.63862L10.3134 8.63073C10.3563 8.58787 10.4339 8.52269 10.5481 8.48636C10.6796 8.44451 10.8494 8.44687 11.0041 8.54528L11.013 8.55099L11.013 8.55109L11.8887 9.13488L12.3203 9.42262L12.0169 9.84336L10.7301 11.6277C10.4695 11.9947 10.5125 12.5011 10.8316 12.8203L12.7719 14.7605L13.0203 15.0089C12.9984 14.8928 12.9424 14.7827 12.8546 14.695L10.9144 12.7547C10.6285 12.4689 10.5934 12.0073 10.8269 11.6811L10.8267 11.6813L11.2334 11.9718L10.8272 11.6807L16.7088 11.6649ZM16.7088 11.6649V11.7638V11.6649ZM13.0228 15.0232L12.8655 15.3377L11.6305 17.8078H11.7496L12.9674 15.3875L13.0228 15.0232ZM13.0228 15.0232C13.0427 15.1449 13.0252 15.2725 12.9676 15.3873L13.0228 15.0232ZM9.64688 14.8152L10.1003 14.3617L10.1659 14.4273L9.71243 14.8807L9.71061 14.8826C9.59585 14.9985 9.44587 15.0605 9.29333 15.0605H7.26929V14.9616H9.29333H9.50043L9.64688 14.8152ZM14.259 11.505L13.8435 11.783L14.2603 11.5069L14.2596 11.5058C14.2594 11.5056 14.2592 11.5053 14.259 11.505ZM13.3991 7.3531C13.3991 6.70634 13.935 6.17041 14.5818 6.17041C15.2369 6.17041 15.7817 6.71249 15.7817 7.3531C15.7817 7.99371 15.2369 8.53579 14.5818 8.53579C13.935 8.53579 13.3991 7.99987 13.3991 7.3531ZM15.6827 7.3531C15.6827 6.731 15.1706 6.26931 14.5818 6.26931C13.9773 6.26931 13.498 6.74858 13.498 7.3531C13.498 7.96098 13.9785 8.43689 14.5818 8.43689C15.1706 8.43689 15.6827 7.9752 15.6827 7.3531Z"
                  fill="#000" stroke="#000" />
              </svg>
            </button>
            <svg class="fill-current opacity-75 w-4 h-5 ml-3 turn" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.1875 1.94531L8.64844 2.46094L5.95312 5.17969L5.4375 5.69531L5.95312 6.23438L11.7188 12L5.95312 17.7656L5.4375 18.3047L5.95312 18.8203L8.64844 21.5391L9.1875 22.0547L9.72656 21.5391L18.7266 12.5391L19.2422 12L18.7266 11.4609L9.72656 2.46094L9.1875 1.94531ZM9.1875 4.07812L17.1094 12L9.1875 19.9219L7.54688 18.2812L13.3125 12.5391L13.8516 12L13.3125 11.4609L7.54688 5.71875L9.1875 4.07812Z"
                fill="black" />
            </svg>
          </summary>
          <div class="mt-4 leading-normal text-xs ">${desc}</div>
		 <button id=del-${id} class="btn bg-orange-600 text-white px-5 py-1 rounded-md mt-3 disabled:bg-red-500 float-right">Delete</button> 
		  `;

	return node;
};

export const runner = () => {
	console.log('Ello');
	alert('Hello');
};

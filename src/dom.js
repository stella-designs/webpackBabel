console.log('dom file');

const body = document.querySelector('body');

const styleBody = () => {
    body.style.background = 'peachpuff';
};

const addTitle = (text) => {
    const title = document.createElement('h1');
    title.textContent = text;
    body.appendChild(title);
};

addTitle('Hello from the DOM file');

const contact = 'mario@email.com';

export {styleBody, addTitle, contact};
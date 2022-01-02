const users = [
    { name: 'mario', premium: true },
    { name: 'frank', premium: false },
    { name: 'bill', premium: true },
    { name: 'sally', premium: true },
    { name: 'george', premium: false },
];

const getPremUsers = (users) => {
    return users.filter(user => user.premium);
};

export { getPremUsers, users as default };
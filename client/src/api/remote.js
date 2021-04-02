const host = 'http://localhost:5000/';

async function register (name, email, password) {
    const res = await fetch(host + 'auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            password
        })
    });

    //каквото ни е върнъл сървъра
    return await res.json();
}

async function login (email, password) {
    const res = await fetch(host + 'auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    });

    return await res.json();
}

//взимаме един продукт
async function fetchPage (page) {
    const res = await fetch(host + 'furniture/all?page=' + page);
    return await res.json();
}

//взимаме един продукт детайлс
async function fetchDetails (id) {
    const res = await fetch(host + 'furniture/details/' + id);
    return await res.json();
}


async function fetchSearchPage (query, page) {
    const res = await fetch(host + `furniture/all?page=${page}&search=${query}`);
    return await res.json();
}

async function fetchStats () {
    const res = await fetch(host + `stats`);
    return await res.json();
}


export { register, login, fetchPage, fetchDetails, fetchSearchPage, fetchStats };
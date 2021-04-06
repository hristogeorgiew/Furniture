const host = 'http://localhost:5000/';

async function register(name, email, password) {
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
    return await res.json();
}

async function login(email, password) {
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

async function createPets(pet) {

    const res = await fetch(host + 'hotels/create', {
        method: 'POST',
        headers: {
            'Authorization': 'bearer ' + localStorage.getItem('authToken'),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pet)
    });
    return await res.json();
}



export { register, login, createPets };
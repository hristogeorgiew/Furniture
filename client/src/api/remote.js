async function register (name, email, password) {
    return await fetch('http://localhost:5000/auth/signup'), {
        method: 'POST',
        body: {
            name,
            email,
            password
        }
    };
}

async function login (email, password) {
    return await fetch('http://localhost:5000/auth/login'), {
        method: 'POST',
        body: {
            email,
            password
        }
    };
}

export { register, login };
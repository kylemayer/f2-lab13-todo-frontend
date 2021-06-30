import request from 'superagent';

const URL = 'https://arcane-journey-95948.herokuapp.com';

const async function signup(email, password) {
    const data = await request
        .post(`${URL}/auth/signup`)
        .send({
            email: email,
            password: password
        })
    return data.body.token;
}


const async function login() {
    const data = await request

}

const async function getTodos() {
    const data = await request

}

const async function getTodo() {
    const data = await request

}

const async function complete() {
    const data = await request

}
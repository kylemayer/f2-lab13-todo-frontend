import request from 'superagent';

const URL = 'https://arcane-journey-95948.herokuapp.com';

export async function signup(email, password) {
    const data = await request
        .post(`${URL}/auth/signup`)
        .send({
            email: email,
            password: password
        })
    return data.body.token;
}


export async function login(email, password) {
    const data = await request
        .post(`${URL}/auth/signin`)
        .send({
            email: email,
            password: password
        })
    return data.body.token;
}

export async function getTodos(token) {
    const data = await request
    .get(`${URL}/api/todos`)
    .set('Authorization', token)

    return data.body;
}

export async function addTodo(todo, token) {
    const data = await request
        .post(`${URL}/api/todos`)
        .send({
            todo: todo,
            completed: false,
        })
        .set('Authorization', token)

        return data.body;
}

export async function complete(id, token) {
    const data = await request
        .put(`${URL}/api/todos/${id}`)
        .set('Authorization', token)

        return data.body;
}
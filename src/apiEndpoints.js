import axios from "axios";

export const host = "http://localhost:5000";

export const api = axios.create({
    baseURL: `http://localhost:5000/`
})

export const apiProducts = axios.create({
    baseURL: `http://localhost:5000/produtos`
})

export const apiSign = axios.create({
    baseURL: 'http://localhost:5000/cadastros'
})

export const sendMessageRoute = `${host}/api/messages/addmsg`;
export const recieveMessageRoute = `${host}/api/messages/getmsg`;
    baseURL: 'http://localhost:5000/users'
})

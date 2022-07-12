import axios from "axios";

let axiosUsers = axios.create({baseURL: 'https://jsonplaceholder.typicode.com/Users'});

let creatUser = (User) => axiosUsers.post('', User);

export {creatUser};
import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users'
});

const takeUsers = () => axiosInstance.get('');
const takeUserPosts = (id)=> axiosInstance(`${id}/posts`)

export {takeUsers, takeUserPosts};
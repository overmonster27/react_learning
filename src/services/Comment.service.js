import axios from "axios";

let axiosPost = axios.create({baseURL: 'https://jsonplaceholder.typicode.com/comments'});

let creatComment = (post) => axiosPost.post('', post);

export {creatComment};
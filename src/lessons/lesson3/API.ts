import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com',
};
const key = '9fe4584a';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        return axiosInstance.get(configOMB.baseURL + `?t=${title}&apikey=${key}`)
            // .then(response => response.data)

    },
    searchFilmsByType: (title: string, type: string) => {
        return axiosInstance.get(configOMB.baseURL + `?t=${title}&type=${type}&apikey=${key}`)
            // .then(response => response.data)
    }
};

export default API;

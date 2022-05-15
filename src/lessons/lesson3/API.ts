import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com',
};
const key = '9fe4584a';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        const query = `?apikey=${key}&s=${title}`
        return axiosInstance.get<{}, TestType<ResponseType>>(`https://cors-everywhere-me.herokuapp.com/` + configOMB.baseURL + query)

    },
    searchFilmsByType: (title: string, type: string) => {
        const query = `?apikey=${key}&type=${type}&s=${title}`
        return axiosInstance.get(`https://cors-everywhere-me.herokuapp.com/` + configOMB.baseURL + query)
    }
};

type TestType<T> = {
    data: T
}

type ResponseType = {
    Search: Array<string>
    Error: string
    Response: string
}

export default API;

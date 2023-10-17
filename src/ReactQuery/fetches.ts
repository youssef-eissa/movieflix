import axios from "axios";



const key = 'e5a319653f57fe3b2a8b69afa1a4377f';

export const fetchPopularMovies = ({ pageParam = 1 }) => {
    return axios.get(`https://api.themoviedb.org/3/movie/popular?page=${pageParam}&api_key=${key}`);
}
export const fetchTopRatedMovies = ({ pageParam = 1 }) => {
    return axios.get(`https://api.themoviedb.org/3/movie/top_rated?page=${pageParam}&api_key=${key}`);
}

export const fetchUpcomingMovies = ({ pageParam = 1 }) => {
    return axios.get(`https://api.themoviedb.org/3/movie/upcoming?page=${pageParam}&api_key=${key}`);
}






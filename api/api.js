import axios from 'axios';

export const API = 'http://localhost:3000/movies'

export const deleteMovieServer = (id) => axios.delete(`${API}/${id}`);
export const getMoviesServer = () => axios.get(API);
export const addMovieServer = (item) => axios.post(API, item);
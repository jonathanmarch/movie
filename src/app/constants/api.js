import moment from 'moment';

const today = moment().format('YYYY-MM-DD');
const lastMonth = moment().subtract(30, 'days').format('YYYY-MM-DD');

const API_KEY = '3ce2bdc33570dc825f66bb02306749e8';
const API_BASE = 'http://api.themoviedb.org/3';

export const API_POPULAR_MOVIES = `${API_BASE}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;
export const API_CINEMA_MOVIES = `${API_BASE}/discover/movie?primary_release_date.gte=${lastMonth}&primary_release_date.lte=${today}&sort_by=popularity.desc&api_key=${API_KEY}`;
export const API_SEARCH = `${API_BASE}/search/movie?language=en-US&page=1&include_adult=true&api_key=${API_KEY}`;

import axios from "./axios";
const api = {};
const baseURL = process.env.REACT_APP_SERVER_BASE_URL || 'https://api.cricapi.com'
const apiKey = process.env.REACT_APP_API_KEY|| '7f61536a-0ae8-4ab3-a67a-fcc9d04d2d36'

api.getMatchInfo = function (id) {
    const url = `${baseURL}/v1/match_info?apikey=${apiKey}&offset=0&id=${id}`;
    return axios.get(url);
};
api.getAllSeries = function () {
    const url = `${baseURL}/v1/series?apikey=${apiKey}&offset=0&search=T20WC`;
    return axios.get(url);
};
api.getSeriesInfo = function (id) {
    console.log(`${baseURL}/v1/series?apikey=${apiKey}&offset=0&id=${id}`);
    
    const url = `${baseURL}/v1/series_info?apikey=${apiKey}&offset=0&id=${id}`;
    return axios.get(url);
};

  export default api;

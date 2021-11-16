import axios from "axios";

const apiService = () => {
    const _apiKey = 'apikey=313b46e7';
    const _apiBase = `http://www.omdbapi.com`;

    const getResource = async (url) => {
        let res; 

        try {
            res = await axios.get(`${_apiBase}${url}`);
        } catch (err) {
            throw new Error(`Faliled to load data, error: ${err.status}`);
        }

        return res.data; 
    }

    const getSearchResults = async (title) => {
        let res; 

        try {
            res = await getResource(`/?${_apiKey}&s=${title}&pageSize=10`)
        } catch (err) {
            throw new Error(`Failed to load films with name '${title}', error: ${err.status} `)
        }

        return res.Search; 
    }

    const getFilmData = async (id) => {
        let res; 

        try {
            res = await getResource(`/?${_apiKey}&i=${id}`)
        } catch (err) {
            throw new Error(`Cannot find film data, error: ${err.status}`);
        }
        return res; 
    }

    return {getSearchResults, getFilmData};
}

export default apiService; 
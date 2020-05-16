import axios from 'axios';

const baseURL = "https://www.googleapis.com/books/v1/volumes?key=" + process.env.REACT_APP_API_KEY + "&q=";

function searchBooks(query) {
    return axios.get(baseURL + query);
}

export default searchBooks;
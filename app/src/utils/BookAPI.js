import axios from 'axios';

const baseURL = "https://www.googleapis.com/books/v1/volumes?key=" + process.env.REACT_APP_API_KEY + "&q=";

const BookAPI = {
    searchBooks: function(query) {
        return axios.get(baseURL + query);
    },
    saveBook: function(body) {
        return axios.post("/api/savedbooks", body);
    },
    getSavedBooks: function() {
        return axios.get("/api/savedbooks");
    },
    deleteBook: function(id) {
        return axios.delete(`/api/savedbooks/${id}`);
    }
}

export default BookAPI;
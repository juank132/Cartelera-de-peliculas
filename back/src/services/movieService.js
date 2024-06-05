const axios = require("axios");
// const promesa = axios.get(`https://students-api.up.railway.app/movies`);
const Movie = require("../models/movie");



module.exports = {
        getMoviesService: async () => {
        const movie = await Movie.find();
        return movie;
        },

        addMoviesService: async (movi) => {
        const movie = await Movie.create(movi);
        return movie;
        }
}

       



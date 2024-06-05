const moviesService = require("../services/movieService");

module.exports = {
    appMovies: async(req, res) => {
        try {
            const movies = await moviesService.getMoviesService()
            res.status(202).json(movies)

        } catch (error) {
            res.status(500).json({
                error: "Error interno del servidor"
            })
        }
    },

    postMovies: async (req, res) => {
        console.log(req);
        const {title, year, director, duration, genre, rate, poster} = req.body;
        try {
            await moviesService.addMoviesService({title, year, director, duration, genre, rate, poster});
            res.status(202).json("Pelicula creada");

        } catch (error) {
            res.status(500).json({
                error: "Error interno del servidor"
            })
        }
    }
};
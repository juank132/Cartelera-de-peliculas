const { Router } = require("express");
const Movies = require("./moviesRouter")

const router = Router();

router.use("/movies", Movies)

module.exports = router;
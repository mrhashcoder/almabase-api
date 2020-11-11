// importing libraries

const express = require("express");
const router = express.Router();
const gitController = require('../Controller/GitController');


// setting Router
router.get("/git" , gitController.gitControl);





// Exporting router
module.exports = router;

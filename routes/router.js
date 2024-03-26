
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const upload = require('../midelwares/uploadImg');
const movieController = require('../controllers/movieController')
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


router.get('/', movieController.defultController);
router.post('/movieForm', upload.single('movieImg'), movieController.addMovieController);
router.get('/views', movieController.viewController);
router.get("/deleteMovie/:id", movieController.deleteController);
router.get("/editMovie/:id",movieController.editController);



module.exports = router;
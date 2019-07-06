const router = require('express-router-promise')();
const DesafioController = require('../Controllers/DesafioController');

router.get('/desafios', DesafioController.index);
router.post('/desafios', DesafioController.store);

module.exports = router;
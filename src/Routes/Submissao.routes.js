const router = require('express-router-promise')();
const SubmissaoController = require('../Controllers/SubmissaoController');

router.get('/submissoes', SubmissaoController.index);
router.post('/submissoes', SubmissaoController.store);

module.exports = router;
const router = require('express-router-promise')();
const  UsuarioController = ('../Controllers/UsuarioController');

router.get('/usuarios', UsuarioController.index);
router.post('/usuarios', UsuarioController.store);
router.put('/usuarios/:id', UsuarioController.update);
router.get('/usuarios/:id', UsuarioController.show);
router.delete('/usuarios/:id', UsuarioController.delete);

module.exports = router;
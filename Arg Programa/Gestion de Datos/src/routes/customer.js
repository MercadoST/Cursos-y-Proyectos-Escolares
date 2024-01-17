const router = require('express').Router();

const asociado = require('../controllers/asociado');

router.get('/', asociado.list);
router.get('/add', asociado.save);
router.post('/add', asociado.save);
router.get('/update/:dni', asociado.edit);
router.post('/update/:dni', asociado.update);
router.get('/delete/:dni', asociado.delete);

module.exports = router;
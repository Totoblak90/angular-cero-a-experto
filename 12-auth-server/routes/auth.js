const { Router } = require('express');
const authController = require('../controllers/authController')
const router = Router()

// GET
router.get('/renew', authController.tokenValidation);
// POST
router.post('/new', authController.createUser);
router.post('/', authController.loginUser);




module.exports = router;
const { Router } = require('express');
const authController = require('../controllers/authController')
const router = Router()
const { email, password, name, validation } = require('../middlewares/authMiddleware')

// GET
router.get('/renew', authController.tokenValidation);

// POST
router.post('/new', [ email, password, name, validation ] , authController.createUser);
router.post('/', [ email, password, validation ], authController.loginUser);




module.exports = router;
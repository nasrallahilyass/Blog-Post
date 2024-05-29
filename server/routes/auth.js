const express = require('express');
const router = express.Router();
const {loginUser, registerUser} = require("../controllers/authController");
const {validateUser} = require('../validators/validateUser');
const validateMiddleware = require('../middlewares/validateMiddleware');

router.post('/login', loginUser)
router.post('/register',validateUser,validateMiddleware, registerUser)


module.exports = router
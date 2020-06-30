const express = require('express');
const { createCategory } = require('../controllers/categories');
const router = express.Router();

//1. register user
router.post('/create', createCategory);

module.exports = router;

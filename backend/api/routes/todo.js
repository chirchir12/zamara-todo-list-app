const express = require('express');
const { authUser } = require('../middleware/auth');
const { createtodo, TodoList, getSingleTodo } = require('../controllers/todo');
const router = express.Router();

router.post('/create', authUser, createtodo);

router.get('/list', TodoList);
router.get('/:id', getSingleTodo);

//3. logout user

module.exports = router;

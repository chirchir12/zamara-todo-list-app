const Todo = require('../../models').Todo;
const User = require('../../models').User;
const Category = require('../../models').Category;

//create
exports.createtodo = (req, res) => {
  Todo.create({ ...req.body, userId: req.user.id })
    .then((todo) => {
      return res.status(201).json({
        todo: todo,
        message: 'task created successfully',
      });
    })
    .catch((error) => res.status(400).json({ error: error }));
};

// list

//2. get all
exports.TodoList = (req, res) => {
  Todo.findAll({
    include: [{ model: User }, { model: Category }],
  })
    .then((todos) => res.status(200).json(todos))
    .catch((error) => res.status(404).json(error));
};

// single
exports.getSingleTodo = (req, res) => {
  Todo.findOne({
    where: { id: req.params.id },
    include: [{ model: User }, { model: Category }],
  })
    .then((todo) => res.status(200).json(todo))
    .catch((error) => res.status(404).json(error));
};

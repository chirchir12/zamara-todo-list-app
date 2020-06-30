const express = require('express');
const app = express();

const UserRouter = require('./api/routes/user');
const categoryRoute = require('./api/routes/category');
const TodoRoute = require('./api/routes/todo');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Handling CORS issues
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});

// all my routes goes here

app.use('/api/auth', UserRouter);
app.use('/api/category', categoryRoute);
app.use('/api/todos', TodoRoute);
app.get('/', (req, res) => {
  return res.end('hell world');
});

// handling errors defined last
app.use((err, req, res, next) => {
  //set error
  res.status(err.status || 500);
  res.json({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

module.exports = app;

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../models').User;

require('dotenv').config();

exports.registerUser = (req, res) => {
  User.create(req.body)
    .then((createdUser) => {
      return res.status(201).json({
        user: createdUser,
        message: 'user created successfully',
      });
    })
    .catch((error) => res.status(400).json({ error: error }));
};

exports.loginUser = async (req, res) => {
  //1, check user email if exist
  const { username, password } = req.body;
  if (!username && !password) {
    return res.status(401).json({ error: 'Fields are required' });
  }
  const userExist = await User.findOne({ where: { username: username } });
  if (!userExist) {
    return res
      .status(401)
      .json({ error: 'User with this email does not exist' });
  }

  if (password !== userExist.dataValues.password) {
    return res.status(401).json({ error: 'Password is wrong' });
  }
  //3. create access token
  const token = jwt.sign(
    { id: userExist.dataValues.id },
    '7bc78545b1a3923cc1e1e19523fd5c3f20b409509',
    { expiresIn: '1800s' }
  );
  //4. authourize
  return res.status(200).json({
    user: {
      id: userExist.dataValues.id,

      username: userExist.dataValues.username,
    },
    isAuthenticated: true,
    token,
  });
};

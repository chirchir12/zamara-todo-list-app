const Category = require('../../models').Category;

//create category

exports.createCategory = (req, res) => {
  Category.create(req.body)
    .then((category) => {
      return res.status(201).json({
        category: category,
        message: 'category created successfully',
      });
    })
    .catch((error) => res.status(400).json({ error: error }));
};

//

const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: 'add-product'
  });
};

exports.addProduct = (req, res, next) => {
  console.log(req.body);
  const product = new Product(null, req.body.title, req.body.image_url, req.body.description, req.body.price);
  product.save().then(() => {
    res.redirect('/');
  }).catch(err => console.log(err));
}
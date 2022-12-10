var express = require('express');
var router = express.Router();
const productHelpers = require('../helpers/product-helpers')
var productHelper = require('../helpers/product-helpers')
/* GET users listing. */
router.get('/', function (req, res, next) {
  productHelper.getAllProducts().then((products)=>{
    // for(let i=0;i <= products.length ;i++){
    //   console.log('Products array' + products[i]._insertedId);
    // }
    res.render('admin/view-products', { admin: true, products });
  })
   
  
});
router.get('/add-product', (req, res) => {
  res.render('admin/add-product')
})
router.post('/add-product', (req, res) => {
  console.log(req.body);
  console.log(req.files.files);

  productHelper.addProduct(req.body, (insertedId) => {
    let image = req.files.files
    image.mv('./assets/public/images' +insertedId + '.jpeg', (err, done) => {
      if (!err) {
        res.render('admin/add-product')
      } 
      // else {
      //   console.log(err);
      // }
    })
  })
})
module.exports = router;


// ./productImages/images
var express = require("express");
var router = express.Router();
const productHelpers = require("../helpers/product-helpers");
router.get("/", function (req, res, next) {
  res.render("admin/view-products", { admin: true });
});
router.get("/add-product", (req, res) => {
  res.render("admin/add-product");
});

router.post("/add-product", (req, res) => {
  console.log(req.body);
  console.log(req.files?.Image);
  productHelpers.addProduct(req.body, (id) => {
    let image = req.files?.Image
    image.mv("../public/product-images/"+".jpg" , (err,done)=>{
      if (!err){
        res.render("admin/add-product");
      }else{
       cl
      }
     })
  });
});
module.exports = router;
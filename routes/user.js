var express = require("express");
const productHelpers = require("../helpers/product-helpers");
const userHelper = require("../helpers/user-helper");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  productHelpers.getAllProducts().then((products) => {
    console.log(products);
    res.render("user/view-products", { admin: false, products });
  });
});
router.get("/login", (req, res) => {
  res.render("user/login");
});
router.get("/signup", (req, res) => {
  res.render("user/signup");
});
router.post("/signup", (req, res) => {
  userHelper.doSignUp(req.body).then((response) => {
    console.log(response);
  });
});
router.post("/login", (req, res) => {
  userHelper.doLogin(req.body).then((response) => {
    if (response.status){
      res.redirect("/")
    }else{
      res.redirect("/login")
    }
  })
})

module.exports = router;

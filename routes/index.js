var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  let products = [
    {
      name: "Iphone 14",
      description: "Apple Product",
      image:
        " https://brain-images-ssl.cdn.dixons.com/9/1/10215619/l_10215619.jpg",
    },
    {
      name: "Iphone 13",
      description: "Apple Product",
      image:
        "https://brain-images-ssl.cdn.dixons.com/9/1/10215619/l_10215619.jpg ",
    },
    {
      name: "Iphone 12",
      description: "Apple Product",
      image:
        " https://brain-images-ssl.cdn.dixons.com/9/1/10215619/l_10215619.jpg",
    },
    {
      name: "Iphone 11",
      description: "Apple Product",
      image:
        " https://brain-images-ssl.cdn.dixons.com/9/1/10215619/l_10215619.jpg",
    },
  ];
  res.render("index", { products });
});

module.exports = router;

const { products } = require("../db/products");

const router = require("express").Router();
router.get("/", (req, res) => {
  res.status(200).send({ data: products, message: "Succsess!" });
});

module.exports = router;

const router = require("express").Router();
const productCtrl = require('../controllers/productCtrl');
const auth = require("../middleware/auth");

router.post("/create", productCtrl.createProduct);
router.get("/:id", productCtrl.getProduct);
router.get("/", productCtrl.getAllProduct);
router.delete("/:id", productCtrl.deleteProduct);

module.exports = router;
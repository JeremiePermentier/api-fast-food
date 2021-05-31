const router = require("express").Router();
const orderCtrl = require('../controllers/orderCtrl');
const auth = require("../middleware/auth");

router.post("/create", orderCtrl.createProduct);
router.get("/:id", orderCtrl.getProduct);
router.get("/", orderCtrl.getAllProduct);
router.delete("/:id", orderCtrl.deleteProduct);

module.exports = router;
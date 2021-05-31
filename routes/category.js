const router = require("express").Router();
const categoryCtrl = require('../controllers/categoryCtrl.js');
const auth = require("../middleware/auth");

router.post("/create", categoryCtrl.createCategory);
router.get("/:id", categoryCtrl.getCategory);
router.get("/", categoryCtrl.getAllCategory);
router.delete("/:id", categoryCtrl.deleteCategory);

module.exports = router;
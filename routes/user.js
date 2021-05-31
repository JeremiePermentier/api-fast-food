const router = require("express").Router();
const userCtrl = require('../controllers/userCtrl');
const dataUser = require("../middleware/dataUser");
const auth = require("../middleware/auth");

router.post("/signup", dataUser.valid, userCtrl.createUser);
router.post("/login", userCtrl.login);
router.get("/profil/:id", userCtrl.getUser);
router.get("/profil", userCtrl.getAllUser);
router.get("/profil/:id", userCtrl.updateUser);
router.delete("/delete/:id", userCtrl.deleteUser);

module.exports = router;
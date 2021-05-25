const router = require("express").Router();
const userCtrl = require('../controllers/userCtrl');
const dataUser = require("../middleware/dataUser");
const auth = require("../middleware/auth");

router.post("/signup", dataUser.valid, userCtrl.createUser);
router.post("/login", userCtrl.login);
router.get("/profil/:id",auth, userCtrl.getUser);
router.get("/profil",auth, userCtrl.getAllUser);
router.get("/profil/:id",auth, userCtrl.updateUser);
router.delete("/delete", auth, userCtrl.deleteUser);

module.exports = router;
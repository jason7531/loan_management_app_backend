const router = require("express").Router();
const user = require("../controllers/user");
router.post("/register", user.register);
router.post("/login", user.login);
router.get("/loggedin", user.sendToken);
module.exports = router;

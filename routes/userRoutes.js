const express = require("express");
const {
  registerController,
  loginController,
  authController,
} = require("../controllers/userCtrl");

const authMiddleware = require("../middlewares/authMiddleware");

//router
const router = express.Router();

router.post("/login", loginController);

router.post("/register", registerController);


//Auth || POSt
router.post("/getUserData", authMiddleware, authController);


module.exports = router;

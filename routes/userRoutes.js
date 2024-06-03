const express = require("express");
const {
  registerController,
  loginController,
  authController,
  applyDoctorController
} = require("../controllers/userCtrl");

const authMiddleware = require("../middlewares/authMiddleware");

//router
const router = express.Router();

router.post("/login", loginController);

router.post("/register", registerController);


//Auth || POSt
router.post("/getUserData", authMiddleware, authController);

//APply Doctor || POST
router.post("/apply-doctor", authMiddleware, applyDoctorController);


module.exports = router;


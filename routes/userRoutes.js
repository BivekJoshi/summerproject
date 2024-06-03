const express = require("express");
const {
  registerController,
  loginController,
} = require("../controllers/userCtrl");

//router
const router = express.Router();

router.post("/login", loginController);

router.post("/register", registerController);

module.exports = router;

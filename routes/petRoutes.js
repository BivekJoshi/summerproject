const router = express.Router();
const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const { postPetController } = require("../controllers/petCtrl");

router.post("/add-pet", postPetController);

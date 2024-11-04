const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

const signUpValidation = require("../validations/signupValidation");
const loginValidation = require("../validations/loginValidation");

// todo: use validations
router.post("/signup", authController.signup);
router.post("/login", authController.login);

module.exports = router;

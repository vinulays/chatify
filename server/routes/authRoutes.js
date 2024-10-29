const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

const signUpValidation = require("../validations/signupValidation");
const loginValidation = require("../validations/loginValidation");

router.post("/signup", signUpValidation, authController.signup);
router.post("/login", loginValidation, authController.login);

module.exports = router;

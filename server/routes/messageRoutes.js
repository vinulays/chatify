const express = require("express");
const router = express.Router();
const messageController = require("../controllers/messageController");

router.get(
  "/history/:senderId/:receiverId",
  messageController.getMessageHistory
);

module.exports = router;

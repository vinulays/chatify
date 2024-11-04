const Message = require("../models/Message");

exports.getMessageHistory = async (req, res) => {
  try {
    const { senderId, receiverId } = req.params;

    const messages = await Message.find({
      $or: [
        { sender: senderId, receiver: receiverId },
        { sender: receiverId, receiver: senderId },
      ],
    }).sort("timestamp");

    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: "Error fetching message history" });
  }
};

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/chat", (req, res) => {
  const userMessage = req.body.message.toLowerCase();

  let reply = "I don't understand.";

  if (userMessage.includes("hello")) {
    reply = "Hi there 👋";
  } 
  else if (userMessage.includes("how are you")) {
    reply = "I'm good! How can I help you?";
  } 
  else if (userMessage.includes("bye")) {
    reply = "Goodbye! 👋";
  }

  res.json({ reply: reply });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server running on port ${PORT}');
});

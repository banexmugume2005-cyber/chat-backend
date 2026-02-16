const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Chat route
app.post("/chat", (req, res) => {
  const userMessage = req.body.message || "";

  let reply = "I don't understand.";

  if (userMessage.toLowerCase().includes("hello")) {
    reply = "Hi there 👋";
  } 
  else if (userMessage.toLowerCase().includes("how are you")) {
    reply = "I'm good! How can I help?";
  } 
  else if (userMessage.toLowerCase().includes("bye")) {
    reply = "Goodbye 👋";
  }

  res.json({ reply: reply });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log("Server running on port " + PORT);
});

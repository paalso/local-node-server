const express = require("express");
const router = express.Router();

const quotes = [
  "Code never lies, comments sometimes do.",
  "Talk is cheap. Show me the code.",
  "It's not a bug — it's an undocumented feature.",
  "In order to understand recursion, one must first understand recursion.",
  "Programs must be written for people to read, and only incidentally for machines to execute.",
  "Debugging is like being the detective in a crime movie where you are also the murderer.",
  "First, solve the problem. Then, write the code.",
  "Simplicity is the soul of efficiency.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Experience is the name everyone gives to their mistakes.",
];

// GET /api/quotes/random
router.get("/random", (req, res) => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({ quote });
});

module.exports = router;

const express = require("express");
const app = express();
const path = require("path");

// Import API route handlers
const quotesApi = require("./api/quotes");

app.use("/api/quotes", quotesApi);

app.use(express.static(path.join(__dirname, "public"))); // frontend files

// Start the server

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

const express = require("express");
const app = express();
const connectDb = require("./config/db");
const PORT = process.env.PORT || 5000;

connectDb();

// Init middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("Server running");
});

// Define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});

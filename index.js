const express = require("express");
const app = express();
const userRouter = require("./routes/user");
const { connectMongoDb } = require("./connection");
const PORT = process.env.PORT || 3000;

// CONNECTION TO DATABASE (MONGO DB)
connectMongoDb("mongodb://127.0.0.1:27017/crud-app").then(() => {
  console.log("connected to mongodb");
});

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // Middleware to Parse Form Data (FOR POST / PUT REQUEST)

// ROUTES
app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});

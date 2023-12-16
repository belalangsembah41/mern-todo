require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const TodoRouter = require("./routes/todoRouter");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(console.log("Database Connected!"))
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());
app.use("/api/todo", TodoRouter);

app.listen(
  process.env.PORT,
  console.log("Server Running on PORT", process.env.PORT)
);

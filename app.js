const express = require("express");
const app = express();
const usersRouter = require("./routes/usersRouter");
const { body, validationResult } = require("express-validator");e

app.set("view engine", "ejs");
app.set(express.urlencoded({ extended: true}));
app.use("/", usersRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("express app listening"));
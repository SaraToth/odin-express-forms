const express = require("express");
const { userInfo } = require("node:os");
const app = express();
const path = require("node:path");
const usersRouter = require("./routes/usersRouter");


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//Allows us to use body in express-validator
app.use(express.urlencoded({ extended: true }));
app.use("/", usersRouter);

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Node is watching");
})
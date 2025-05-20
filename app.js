const express = require("express");
const app = express();
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index", { title: "Home" });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log("My first app");
})
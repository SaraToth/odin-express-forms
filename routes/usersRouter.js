const { Router } = require("express");

const usersRouter = Router();

usersRouter.get("/", (req, res) => {
    res.render("index", { title: "Home" });
});

usersRouter.get("/create", (req, res) => {
    res.send("gets")
});
usersRouter.post("/create", (req, res) => {
    res.send("posts");
});

module.exports = usersRouter;
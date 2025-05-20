const { Router } = require("express");
const usersRouter = Router();
const usersController = require("../controllers/usersController");

usersRouter.get("/", (req, res) => {
    res.render("index", { title: "Home" });
});

usersRouter.get("/create", usersController.usersCreateGet);
usersRouter.post("/create", usersController.usersCreatePost);

module.exports = usersRouter;
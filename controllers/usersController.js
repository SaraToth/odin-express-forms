const { body, validationResult } = require("express-validator");

const usersController = () => {
    return{
        usersCreateGet: (req, res) => {
            res.render("createUser", { title: "Create User"});
        },

        usersCreatePost: (req, res) => {
            res.render("index", { title: "Home" });
        }
    }
};


module.exports = usersController();
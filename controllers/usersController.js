const { body, validationResult } = require("express-validator");

const usersController = () => {
    return{
        usersCreateGet: (req, res) => {
            res.send("gets");
        },

        usersCreatePost: (req, res) => {
            res.send("posts");
        }
    }
};

module.exports = usersController();
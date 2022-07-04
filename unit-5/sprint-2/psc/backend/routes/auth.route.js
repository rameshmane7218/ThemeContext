const { Router } = require("express");
const UserModel = require("../models/User.module");

const AuthRouter = Router();

AuthRouter.post("/signup", async (req, res) => {
    const user = await new UserModel(req.body);
    user.save((err, success)=>{
        if(err) {
            return res.status(500).send({message: 'Error occurred'});
        }
        return res.status(201).send({message: 'signup successful',token: 12345, users: success});
    })
});
AuthRouter.post("/login", (req, res) => {});

module.exports = AuthRouter;

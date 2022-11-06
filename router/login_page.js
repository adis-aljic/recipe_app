const express = require("express");
const router = express.Router();
const path = require("path");
const { login_verification, register_user } = require("../models/login_model")

router.get("/login", (req, res) => {
    res.sendFile(path.join(process.cwd(), 'html/index.html'));
})
router.get("/register", (req, res) => {
    res.sendFile(path.join(process.cwd(), 'html/register.html'));
})
router.get("/sussces", (req, res) => {
    res.sendFile(path.join(process.cwd(), 'html/suscess_registration.html'));
})

router.post(`/login`, (req, res, next) => {
    const { email, password } = req.body;
    login_verification().then(data => {
        const users = data[0];
        users.forEach(user => {
            console.log(user);
            console.log(req.body);
            if (user.username == email && user.password == password) {
                console.log("sus");

            }
            else {
                console.log("not");
            }
        });
    })

});

router.post(`/register`, (req, res) => {
    console.log(req.body);
    console.log("body");
    const { email, password, first_name, last_name, safe_word } = req.body;
    register_user(email, password, first_name, last_name, safe_word).then(data => {
        res.redirect(200, `/sussces`)


    })

});

router.get("/:id", (req, res) => {
    res.sendFile(path.join(process.cwd(), 'html/user.html'));
})


module.exports = router


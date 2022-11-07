const express = require("express");
const router = express.Router();
const path = require("path");
const { login_verification, register_user,return_password } = require("../models/login_model")

router.get("/login", (req, res) => {
    res.sendFile(path.join(process.cwd(), 'html/login.html'));
})

router.get("/register", (req, res) => {
    res.sendFile(path.join(process.cwd(), 'html/register.html'));
})
router.get("/forgetenpassword", (req, res) => {
    res.sendFile(path.join(process.cwd(), 'html/forget_password.html'));
})
router.get("/sussces", (req, res) => {
    res.sendFile(path.join(process.cwd(), 'html/suscess_registration.html'));
})

router.post(`/login`, (req, res, next) => {
    const { email, password } = req.body;
    login_verification().then(data => {
        const users = data[0];
        users.forEach(user => {
            if (user.username == email.toUpperCase() && user.password == password.toUpperCase()) {
                return res.redirect(`/recipe/${user.user_id}`)

            }
            else {
            }
        });
    })

});
router.post(`/forgottenpass`, (req, res, next) => {
    const { email, safe_word } = req.body;
    return_password().then(data => {
        const users = data[0];
        users.forEach(user => {
            if (user.username == email.toUpperCase() && user.safe_word == safe_word.toUpperCase()) {
                console.log(user);
                return res.json(user)
                // how to send mail from here

            }
            else {
            }
        });
    })

});

router.post(`/registeruser`, (req, res) => {
 
    const { email, password, first_name, last_name, safe_word } = req.body;
    register_user(email.toUpperCase(), password.toUpperCase(), first_name.toUpperCase(), last_name.toUpperCase(), safe_word.toUpperCase()).then(data => {
        res.redirect(200, `userrr/sussces`)


    })

});




module.exports = router


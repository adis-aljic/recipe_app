const express = require("express");
const router = express.Router();
const path = require("path");
// const { login_verification, register_user } = require("../models/login_model")

router.get("/:id", (req, res) => {
    res.sendFile(path.join(process.cwd(), 'html/user.html'));
})



// router.post(`/register`, (req, res) => {
//     console.log(req.body);
//     console.log("body");
//     const { email, password, first_name, last_name, safe_word } = req.body;
//     register_user(email, password, first_name, last_name, safe_word).then(data => {
//         res.redirect(200, `/sussces`)


//     })

// });



module.exports = router


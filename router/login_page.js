const express = require("express");
const router = express.Router();
const path = require("path");
const { login_verification } = require("../models/login_model")

router.get("/", (req, res) => {
    res.sendFile(path.join(process.cwd(), 'html/index.html'));
})

router.post(`/login`, (req, res) => {
    const body = req.body;
    console.log(body);
    login_verification(`${body.email}`, `${body.password}`)
        .then(response => console.log(response))


});


module.exports = router
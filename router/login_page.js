const express = require("express");
const router = express.Router();
const path = require("path");
const { login_verification } = require("../models/login_model")

router.get("/login", (req, res) => {
    res.sendFile(path.join(process.cwd(), 'html/index.html'));
})
router.get("/register", (req, res) => {
    res.sendFile(path.join(process.cwd(), 'html/register.html'));
})

router.post(`/login`, (req, res) => {
    const body = req.body;
    console.log(body);
    login_verification(`${body.email}`, `${body.password}`)
 

});
router.post(`/register`, (req, res) => {
    const body = req.body;
    console.log(body);
    // register_user(`${body.email}`, `${body.password}`)
 

});


module.exports = router
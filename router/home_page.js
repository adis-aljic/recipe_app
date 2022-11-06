const express = require("express");
const router = express.Router();
const path = require("path");
const { results_recipe } = require("../models/home_page_model")

router.get("/", (req, res) => {
    res.sendFile(path.join(process.cwd(), 'html/index.html'));
})




router.post(`/search`, (req, res) => {
    console.log(req.body);

    const { search } = req.body;
    results_recipe().then(data => {
        // console.log(data[0][0]);
        const result = {
            recipe_name :  data[0][0].recipe_name,
            type_of_meal :  data[0][0].type_of_meal,
            username :  data[0][0].username,
            first_name :  data[0][0].first_name,
            last_name :  data[0][0].last_name,
            ingridients : [],
            quantity : []

        }
        data[0].forEach(element => {
            result.ingridients.push(element.ingridient_name)
            result.quantity.push(element.quantity)
        });
        console.log(result);
        if(search.toUpperCase() == data[0][0].recipe_name){
            res.json(result)
           .redirect("/")
        }


    })

});




module.exports = router


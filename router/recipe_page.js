const express = require("express");
const router = express.Router();
const path = require("path");
const { new_recipe,insert_ingridients } = require("../models/recipe_model")

router.get("/:id", (req, res) => {
    res.sendFile(path.join(process.cwd(), 'html/user.html'));
})

router.post(`/addrecipe`, (req,res)=>{
console.log(req.body);
const {recipe_name,type_of_meal,description, user_id ,ingridients,quantity} = req.body
new_recipe(recipe_name,type_of_meal,user_id,description).then(data => {
    console.log("Added new recipe");

});
for (let i = 0; i < ingridients.length; i++) {
    const ingridient = ingridients[i];
    const quantity_ingridient = quantity[i];
    last_recipe_id_ingridient_id().then(data => {
        let last_recipe_id = data[0].recipe_id  + 1;
        insert_ingridients(ingridient,quantity_ingridient,).then(data =>{
            // ??????????????????????????????????
            console.log(data);
        })
    });

}



})




module.exports = router


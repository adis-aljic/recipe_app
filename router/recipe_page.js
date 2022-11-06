const express = require("express");
const router = express.Router();
const path = require("path");
const { new_recipe,insert_ingridients,last_recipe_id } = require("../models/recipe_model")

router.get("/:id", (req, res) => {
    res.sendFile(path.join(process.cwd(), 'html/user.html'));
})

router.post(`/addrecipe`, (req,res)=>{
const {recipe_name,type_of_meal,description, user_id ,ingridients,quantity} = req.body
new_recipe(recipe_name.toUpperCase(),type_of_meal,user_id,description.toUpperCase()).then( () => {
   

    last_recipe_id().then(data=>{
        console.log(data[0][0]);
        for (let i = 0; i < ingridients.length; i++) {
            const ingridient = ingridients[i];
            const quantity_ingridient = quantity[i];
            insert_ingridients(data[0][0].recipe_id,ingridient.toUpperCase(),quantity_ingridient).then(() =>{
                console.log("results");
                
            })
            
        }
    })
});



})




module.exports = router


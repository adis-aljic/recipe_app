console.log("Aaaaaa");
fetch("http://localhost:3000/search",{
    headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
})
.then((resolve)=> resolve.json())
.then((data)=>{
    console.log("Bbbbbb");
    console.log(data);
     $(`#results_recipe`).append(data)

})

$(document).ready(() =>{
const heading = document.createElement("h4")
const breaker = document.createElement("br")
const table = document.createElement("table")
const row = document.createElement("tr")
const table_heading = document.createElement("thead")
const table_body = document.createElement("tbody")
const table_head = document.createElement("th")
const table_data = document.createElement("td") 
// table_heading.append(row).append(table_head).append()
// heading.append("Recipe")
// table.append(table_head,table_body)
// recipe_name: 'DADA',
// type_of_meal: 'Appetizer',
// username: 'a@a.com',
// first_name: 'Adis',
// last_name: 'Aljic',
// ingridients: [ 'BIBER', 'SO' ],
// quantity: [ '12', '16' ]

// $(`#results_recipe`)

})


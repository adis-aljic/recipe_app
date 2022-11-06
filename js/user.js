$(document).ready(function(){

$(`#add_ingridients`).click(()=>{
const input_ing = document.createElement("input");
const input_quantity = document.createElement("input");
$(input_ing).addClass("validate")
$(input_quantity).addClass("validate")
$(input_ing).attr({"type":"text", "autocomplete":"off", "name":"ingridients","placeholder":"ingridients"})
$(input_quantity).attr({"type":"text", "autocomplete":"off", "name":"ingridients","placeholder":"gram"})

$(`#ingridients`).append(input_ing)
$(`#quantity`).append(input_quantity)


})
$(`#remove_ingridients`).click(()=>{


$('#quantity').children().last().remove();
$('#ingridients').children().last().remove();

})



})
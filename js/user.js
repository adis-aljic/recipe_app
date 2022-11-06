$(document).ready(function(){
const value = ()=>{
    return window.location.href.slice(window.location.href.lastIndexOf("/")+1)
}

$(`#user_id`).attr("value", value()) 


$(`#add_ingridients`).click(()=>{
const input_ing = document.createElement("input");
const input_quantity = document.createElement("input");
$(input_ing).addClass("validate")
$(input_quantity).addClass("validate")
$(input_ing).attr({"type":"text", "autocomplete":"off", "name":"ingridients","placeholder":"ingridients"})
$(input_quantity).attr({"type":"text", "autocomplete":"off", "name":"quantity","placeholder":"g/ml"})

$(`#ingridients`).append(input_ing)
$(`#quantity`).append(input_quantity)

})
$(`#remove_ingridients`).click(()=>{

$('#quantity').children().last().remove();
$('#ingridients').children().last().remove();

})



})
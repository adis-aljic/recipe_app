$(document).ready(function(){
    
setTimeout(() => {
    window.location.assign("/user/login")

}, 3000);
(`#link_for_redirecting_to_login`).click(()=> window.location.assign("/user/login"))
})
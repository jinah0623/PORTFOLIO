var log = document.getElementById("like");
var reg = document.getElementById("cart");
var tog = document.getElementById("btn");

function like(){
    log.style.left = "15%";
    reg.style.left = "100%";
    tog.style.left = "0";
}

function cart(){
    log.style.left = "-100%";
    reg.style.left = "15%";
    tog.style.left = "120px";
}
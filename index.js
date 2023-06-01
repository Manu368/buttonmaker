let a1 = document.getElementById("bgColor");
let a2 = document.getElementById("bgColor01");
let a3 = document.getElementById("bgColor02");
let a4 = document.getElementById("bgColor03");
let a5 = document.getElementById("bgColor04");
let a6 = document.getElementById("bgColor05");

let b1 = document.getElementById("button01");
let b2 = document.getElementById("button02");
let b3 = document.getElementById("button03");


b1.addEventListener("click", function(){
    b2.style.backgroundColor = a1.value;
    b2.style.color = a2.value;
    b2.style.fontSize = a3.value + "px";
    b2.style.fontWeight = a4.value;
    b2.style.padding = a5.value + "px";
    b2.style.borderRadius = a6.value + "px";
});
b3.addEventListener("click", function(){
    b2.style.backgroundColor = "";
    b2.style.color = "";
    b2.style.fontSize = "";
    b2.style.fontWeight = "";
    b2.style.padding = "";
    b2.style.borderRadius = "";
    a1.value = "";
    a2.value = "";
    a3.value = "";
    a4.value = "";
    a5.value = "";
    a6.value = "";
});

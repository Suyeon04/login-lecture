"use strict";

const id = document.querySelector("#id"), 
pword = document.querySelector("#psword"),
loginbutton = document.querySelector("button");

loginbutton.addEventListener("click", login);

function login(){
    const req = {
        id  : id.value,
        psword : pword.value,
    }
 console.log(req);
}




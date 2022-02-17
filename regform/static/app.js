import {UserForm} from "./regform.js";

const btn = document.querySelector("#get_form")
const userres = document.querySelector("#get_users")

userres.addEventListener("click",()=>{
    let url = 'http://127.0.0.1:8000/check';
});

btn.addEventListener("click",()=>{
    const u1 = new UserForm();
    u1.generateForm();
});
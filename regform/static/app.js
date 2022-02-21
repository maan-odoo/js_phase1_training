import {UserForm} from "./regform.js";
import {UserDetail} from "./userdetails.js";

const formgenerator = document.querySelector("#get_form")
const userres = document.querySelector("#get_users")

userres.addEventListener("click",()=>{
    const u = new UserDetail();
    u.generateUserDetails();
});

formgenerator.addEventListener("click",()=>{
    const u1 = new UserForm();
    u1.generateForm();
});
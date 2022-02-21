import {UserDetail} from "./userdetails.js";
export class UserForm {
    generateForm(){
         // Create a form dynamically
         let form = document.createElement("form");
         form.setAttribute("method", "post");
         form.setAttribute("action", "register");

        // Create an input element for emailmail
        let name = document.createElement("input");
        name.setAttribute("type", "text");
        name.setAttribute("name", "username");
        name.setAttribute("placeholder", "Enter User name");
        name.setAttribute("id", "username");
        name.setAttribute("class", "form");
        

         // Create an input element for emailmail
         let mail = document.createElement("input");
         mail.setAttribute("type", "text");
         mail.setAttribute("name", "email");
         mail.setAttribute("placeholder", "Enter name");
         mail.setAttribute("id", "useremail");
         mail.setAttribute("class", "form");

         // Create an input element for password
         let ps = document.createElement("input");
         ps.setAttribute("type", "password");
         ps.setAttribute("name", "password");
         ps.setAttribute("placeholder", "Password");
         ps.setAttribute("id", "userpassword");
         ps.setAttribute("class", "form");


        let s1 = document.createElement("input");
        s1.setAttribute("type", "button");
        s1.setAttribute("value", "Register");
        s1.setAttribute("class", "btn btn-reg");
        s1.addEventListener("click",()=>{
            let userDetail = new UserDetail();
            userDetail.registerUserdetails();
        });
        form.append(name)
        form.append(mail);
        form.append(ps);
        // form.append(s);
        form.append(s1);
        document.querySelector("#dynamic").innerHTML="";
        document.querySelector("#dynamic").appendChild(form);

    }
}
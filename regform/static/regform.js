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
        

         // Create an input element for emailmail
         let mail = document.createElement("input");
         mail.setAttribute("type", "text");
         mail.setAttribute("name", "email");
         mail.setAttribute("placeholder", "Enter name");

         // Create an input element for password
         let ps = document.createElement("input");
         ps.setAttribute("type", "password");
         ps.setAttribute("name", "password");
         ps.setAttribute("placeholder", "Password");

         // Create a submit button
         let s = document.createElement("input");
         s.setAttribute("type", "submit");
         s.setAttribute("value", "Submit");
        //  s.addEventListener("click",()=>{})

        form.append(name)
        form.append(mail);
        form.append(ps);
        form.append(s);

         document.querySelector("#dynamic")
        .appendChild(form);

    }
}
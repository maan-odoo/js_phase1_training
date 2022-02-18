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
        
        //  s.addEventListener("click",()=>{
        //      // Set up our HTTP request
        // var xhr = new XMLHttpRequest();

        // // Setup our listener to process request state changes
        
        //     let url = 'http://127.0.0.1:8000/reguserjs';

        //     var xhr = new XMLHttpRequest();
        //     xhr.open("POST", url);
            
        //     xhr.setRequestHeader("Accept", "application/json");
        //     xhr.setRequestHeader("Content-Type", "application/json");
            
        //     xhr.onreadystatechange = function () {
        //        if (xhr.readyState === 4) {
        //           console.log(xhr.responseText);
        //        }};
            
        //     var data = `{
        //       "Id": 78912,
        //       "Customer": "Jason Sweet",
        //       "Quantity": 1,
        //       "Price": 18.00
        //     }`;
            
        //     xhr.send(data);
       
        //  });

        let s1 = document.createElement("input");
        s1.setAttribute("type", "button");
        s1.setAttribute("value", "Without Reload");
        s1.addEventListener("click",()=>{
            console.log("click s1 button")
        });
        
        form.append(name)
        form.append(mail);
        form.append(ps);
        form.append(s);
        form.append(s1);

         document.querySelector("#dynamic")
        .appendChild(form);

    }
}
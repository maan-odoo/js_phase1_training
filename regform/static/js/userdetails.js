export class UserDetail{
    generateUserDetails(){
        let url = 'getuser';
        let request = new XMLHttpRequest();
        request.open('POST', url);
        request.responseType = 'text';
    
        request.onload = function() {
            document.querySelector("#dynamic").setAttribute("class","");
            let reqData = request.response;
            let data = JSON.parse(reqData);
            let htmldtata = document.querySelector("#dynamic");
            var table = document.createElement('table');
            table.setAttribute("id","users-table");
            let thead = document.createElement('thead')
            let trh = document.createElement("tr");

            let tdh1 = document.createElement("th")
            tdh1.innerHTML = "EMAIL";

            let tdh2 = document.createElement("th")
            tdh2.innerHTML = "NAME";

            let tdh3 = document.createElement("th")
            tdh3.innerHTML = "PASSWORD";

            trh.appendChild(tdh1);
            trh.appendChild(tdh2);
            trh.appendChild(tdh3);
            thead.appendChild(trh)
            table.appendChild(thead);
            for (let i = 0; i < data.length; i++) {
                let tr = document.createElement('tr'); 
                for (var j = 1; j<4; j++) {
                            let tdElement = document.createElement('td');
                            tdElement.innerHTML = data[i][j];
                            tr.appendChild(tdElement);
                }
                table.appendChild(tr); 
            }
            document.querySelector("#dynamic").innerHTML="";
            htmldtata.appendChild(table);
        };
    
        request.send();
    }
    registerUserdetails(){
        console.log("click s1 button")
        let name = document.querySelector("#username").value;
        let email = document.querySelector("#useremail").value;
        let password = document.querySelector("#userpassword").value;
        let url = 'reguserjs';
        let request = new XMLHttpRequest();
        request.open('POST', url, true);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        console.log(name)
        console.log(email)
        console.log(password)
        let param = 'username='+name+'&email='+email+'&password='+password;
        console.log(param)
        request.send(param)
    }
}
export class UserDetail{
    generateUserDetails(){
        let url = 'getuser';
        let request = new XMLHttpRequest();
        request.open('POST', url);
        request.responseType = 'text';
    
        request.onload = function() {
            document.querySelector("#dynamic").innerHTML = ""
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

            let tdh4 = document.createElement("th")
            tdh4.innerHTML = "DELETE";

            trh.appendChild(tdh1);
            trh.appendChild(tdh2);
            trh.appendChild(tdh3);
            trh.appendChild(tdh4);
            thead.appendChild(trh)
            table.appendChild(thead);
            for (let i = 0; i < data.length; i++) {
                let tr = document.createElement('tr'); 
                for (var j = 0; j<4; j++) {
                            if(j==3){
                                let tdElement = document.createElement('td');
                                let btnDel = document.createElement("button");
                                btnDel.setAttribute("value",data[i][0]);
                                btnDel.setAttribute("type","button");
                                btnDel.setAttribute("class", "btn btn-del btn-reg");
                                btnDel.innerHTML = "DELETED";
                                btnDel.addEventListener("click",()=>{
                                    let delid = btnDel.value;
                                    let url = 'deluser';
                                    let request = new XMLHttpRequest();
                                    request.open('POST', url, true);
                                    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
                                    let param = 'id='+delid;
                                    console.log(param)
                                    request.send(param)
                                    generateUserDetails();
                                });
                                tdElement.appendChild(btnDel);
                                tr.appendChild(tdElement);
                                break;
                            }
                            let tdElement = document.createElement('td');
                            tdElement.innerHTML = data[i][j+1];
                            tr.appendChild(tdElement);
                }
                table.appendChild(tr); 
            }
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
        request.send(param)
        document.querySelector("#dynamic").innerHTML="<h2>Your Data is successfully stored<br>Thank You For Registeration.</h2>";
        document.querySelector("#dynamic").setAttribute("class","msg");
    }
}
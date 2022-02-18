export class UserDetail{
    generateUserDetails(){
        let url = 'http://127.0.0.1:8000/getuser';
        let request = new XMLHttpRequest();
        request.open('POST', url);
        request.responseType = 'text';
    
        request.onload = function() {
            let reqData = request.response;
            let data = JSON.parse(reqData);

            let htmldtata = document.querySelector("#dynamic");
            var table = document.createElement('table');
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
           
            htmldtata.append(table);
        };
    
        request.send();
    }
}
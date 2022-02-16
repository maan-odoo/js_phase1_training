console.log("add displatch event")
document.getElementById("title").innerHTML = "Addeventlisten.js File running";
// document.addEventListener("click",myFunction);

// function myFunction(){
//     document.getElementById("demo").innerHTML="Hello WOrlds";
// }
let btn = document.querySelector('.btn');

// let clickEvent = new Event('click');
// console.log(btn.dispatchEvent(clickEvent));
const myEvent = new Event("ee");

btn.addEventListener("ee",function(){
  console.log("Event Triggered");
  this.style.color="green";
  this.innerHTML="Custom Event Triggered";
});



btn.addEventListener("click", function(){
    document.getElementById("demo").innerHTML = "Hello World";
    btn.dispatchEvent(myEvent);
  });
btn.addEventListener("dblclick", function(){
    document.getElementById("demo").innerHTML = "Double clicked";
  });
btn.addEventListener("copy", function(){
    document.getElementById("demo").innerHTML = "Warning Why you are copide text!!!!!";
  });

btn.addEventListener("mouseover", function(){
    document.getElementById("demo").innerHTML = "Mouse HOver";
    // document.body.style.backgroundColor="white";
    // document.getElementById("demo").style.backgroundColor="red";
  });
btn.addEventListener("mouseout", function(){
    document.getElementById("demo").innerHTML = "Mouse Out";
    // document.body.style.backgroundColor="red";
    // document.getElementById("demo").style.backgroundColor="white";
  });
function resized(){
    document.getElementById("demo").innerHTML = "Screen resized = "+window.innerWidth+"*"+window.innerHeight
  }


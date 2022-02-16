console.log("await")
document.getElementById("title").innerHTML = "Addeventlisten.js File running";



// function myDisplayer(some) {
//   document.getElementById("demo").innerHTML = some;
// }

// let myPromise = new Promise(function(myResolve, myReject) {
//   let x = 0;

// // The producing code (this may take some time)

//   if (x == 0) {
//     myResolve("OK");
//   } else {
//     myReject("Error");
//   }
// });

// myPromise.then(
//   function(value) {myDisplayer(value);},
//   function(error) {myDisplayer(error);}
// );


// var x = prompt("Enter Password");
// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }
  
//   let myPromise = new Promise(function(myResolve, myReject) {
//     let password = 1234;
  
//   // The producing code (this may take some time)
  
//     if (x == password) {
//       myResolve("OK");
//     } else {
//       myReject("Error password is not matched");
//     }
//   });
  
//   myPromise.then(
//     function(value) {myDisplayer(value);},
//     function(error) {myDisplayer(error);}
//   );

setTimeout(function() { myFunction("Yes Message Is printed ......"); }, 3000);

function myFunction(value) {
  document.getElementById("demo1").innerHTML = value;
}

let myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve("I love You !!"); }, 3000);
  });
  
  myPromise.then(function(value) {
    document.getElementById("demo").innerHTML = value;
  });
  
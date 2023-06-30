
let inputEmail = document.getElementById("inp");
let inputPass = document.getElementById("passint");
let button = document.getElementById("btn");
let singupbtn=document.getElementById("signup");
button.addEventListener("click", (e) => tester(e));

let email = 'admin@gmail.com';
let pass = '12345';


function tester(e) {
    e.preventDefault();
    let inputEmailval = inputEmail.value;
    let inputPassVal = inputPass.value;

    checker(inputEmailval, inputPassVal, email, pass)
}


function checker(inputEmailval, inputPassVal, email, pass) {
    if (inputEmailval === email && inputPassVal === pass) {
        activeHref()
    } else {
        alert("Wrong!!")
    }

}
function activeHref() {
    let hrefUrl = "http://127.0.0.1:5501/fullproject/index.html"
    window.location.href = hrefUrl;
}





// singupbtn.addEventListener("click",flash())

// function flash() {
//     let hrefUrl = "http://127.0.0.1:5501/sing%20up/index.html"
//     window.location.href = hrefUrl;
// }
 

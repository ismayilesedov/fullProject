let button = document.getElementById('btn')
button.addEventListener("click", (e) => checkName(e));

function flash() {
    let hrefUrl = "http://127.0.0.1:5501/sign_in/index.html"
    window.location.href = hrefUrl;
}



function checkName() {
let formName = document.querySelector(".name").value;
let formSurname = document.querySelector(".surname").value;
let formMail = document.querySelector(".email").value;
let formPassword = document.querySelector(".password").value;

    if (formName.length < 4) {
        alert("Wrong Name!!")
    }
    else if (formSurname.length < 4) {
        alert("wrong Surname!!")
    }else if(formPassword.length<4){
        alert("wrong Password")
    }else{
        flash();
    }

}
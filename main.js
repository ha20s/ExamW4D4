let userUrl = "https://66e7e6a5b17821a9d9da6f39.mockapi.io/login"



let submitSign = document.getElementById("submitSignin")

if(submitSign){
    submitSign.addEventListener('click',(event)=> {

let nameSign = document.getElementById("name").value
let passSign = document.getElementById("passSign").value
let emailSign = document.getElementById("emailSign").value
let usernameSign = document.getElementById("username").value

        event.preventDefault();
        
        if ((ValidateName(nameSign)) || (ValidateUserName(usernameSign)) || (ValidateEmail(emailSign)) || (!ValidatePass(passSign)) ){
            fetch(userUrl, {
                method: 'POST',
                body: JSON.stringify({
                 name : nameSign ,
                 userName : usernameSign,
                 email : emailSign,
                 pass : passSign
    
                }),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              })
                .then((response) => response.json())
                .then((json) =>
                     console.log(json));
                window.location.href = 'home.html';
        }

    })
}





function ValidateEmail (email){
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(email)){
      return
    } else{
        alert("shloud have valid email") 
    }
}

function ValidatePass(pass){
    if (pass.length < 8){
        alert("Password should be more than 8")
    } else {
        return
    }
}

function ValidateName(name){
    if (name.length < 5 ){
        alert("name should be more than 5")
    } else {
        return
    }
}

function ValidateUserName(username){
    const check = /[A-Z]/
    if(check.test(username)){
      return
    } else {
        alert("User name should have capital letter")
    }
}


//login funcs 
// use find 

let submitLogin = document.getElementById("submitLogin")
let emailLogin = document.getElementById("emailLogin")
let passLogin = document.getElementById("loginPass")

if(submitLogin){
    submitLogin.addEventListener('click', (event) => {

        event.preventDefault();

        fetch(userUrl)
        .then((response) => response.json())
        .then((json) => {
            json.find(item => {
                item.name == emailLogin.value && item.pass == passLogin.value
                window.location.href = 'home.html';
            }) 
        });

    })
}
'use strict'

function logar(){
    var email = document.getElementById('email').value

    var senha = document.getElementById('senha').value

    if(email == 'susu@gmail.com' && senha == '1234' || email == 'gabsbarros@gmail.com' && senha == '4321' || email == 'vitor@gmail.com' && senha == '5678') {
        alert('sucess')
        location.href = "../PageHome/home.html"
    }else{
        alert('Logado com sucesso')
    }
}
'use strict'

function cadastrar() {
    var nome = document.getElementById('nome')

    var dataNascimento = document.getElementById('dataNascimento')

    var cpf = document.getElementById('cpf')

    var email = document.getElementById('email')

    var senha = document.getElementById('senha')

    if(nome == '' || dataNascimento == '' || cpf == '' || cpf > 9 || email == '' || senha == ''){
        alert(error)
    }

}
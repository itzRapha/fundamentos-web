

/*
por tag:getElementByTag()
por Id: getElementById()
por nome : getElementByNome()
por Classe: getElementByClassName()
por Selector: querySelector()


*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('input#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false

nome.style.width = '100%'
email.style.width = '100%'

function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML ='Nome Inválido'
        txtNome.style.color ='red'
    }else{
        txtNome.innerHTML ='Nome Válido'
        txtNome.style.color ='green'
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.indexof('@')== -1 || email.value.indexof('.')== -1 ){
        txtEmail.innerHTML ='E-mail Inválido'
        txtEmail.style.color ='red'
    }else{
        txtEmail.innerHTML ='E-mail Válido'
        txtEmail.style.color ='green'
        emailOk = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#assunto')

    if(email.value.length >=2){
        txtAssunto.innerHTML ='Texto muito grande,digite no máximo 100 caractéres'
        txtAssunto.style.color ='red'
        txtAssunto.style.display ='block'
    }else{
        txtAssunto.style.display ='none'
        assuntoOk = false
    }
}


function enviar(){
    if(nomeOk== true && emailOk==true && assuntoOk==true){
        alert('Formulário enviado!')
    }else{
        alert('Confira os dados digitados')
    }
}

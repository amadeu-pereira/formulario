'use strict';


// variaveis e id's

const form = document.getElementById('form')
const username = document.getElementById('username')
const cpf = document.getElementById('cpf')
const dataNasc = document.getElementById('dataNasc')
const idade = document.getElementById('idade')
const cepId = document.getElementById('cep')
const numero = document.getElementById('numero')
const termos = document.getElementById('termos')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
    
   }
);

// mensagem de validação 

function checkInputs(){
    const usernameValue = username.value
    const cpfValue = cpf.value
    const dataNascValue = dataNasc.value
    const idadeValue = idade.value
    const cepIdValue = cepId.value
    const numeroValue = numero.value
    const termosValue = termos.value
    
    if(usernameValue === "")  {
        setErrorFor(username, "Nome é Obrigatório");
    } else {
        setSuccessFor(username);
    } 
    if(cpfValue === "")  {
        setErrorFor(cpf, "Este Campo é obrigatório!");
    } else if ( cpfValue.length< 11){
        setErrorFor(cpf,"O CPF precisa ter 12 números")
    }else{
        setSuccessFor(cpf);
    } 
    if(dataNascValue === "")  {
        setErrorFor(dataNasc, "Este Campo é obrigatório!");
    } else {
        setSuccessFor(dataNasc);
    } 

    if(cepIdValue === "")  {
        setErrorFor(cepId, "Este Campo é obrigatório!");
    } else {
        setSuccessFor(cepId);
    } 

    if(idadeValue === "")  {
        setErrorFor(idade, "Este Campo é obrigatório!");
    } else {
        setSuccessFor(idade);
    } 
    if(numeroValue === "")  {
        setErrorFor(numero, "Este Campo é obrigatório!");
    } else {
        setSuccessFor(numero);
    } 
    if(termosValue === "sim")  {
        setSuccessFor(termos);
    } else {
        setErrorFor(termos,"é Necessario aceitar os termos!")
        
    } 
    const formControls = form.querySelectorAll(".form-group");

    const formIsValid = [...formControls].every((formControl) => {
      return formControl.className === "form-group success";
    });
  
    if (formIsValid) {
      console.log("O formulário está 100% válido!");
    }

  }

// validação de dados 

 function setErrorFor(input, message){
        const formControl= input.parentElement;
        const small = formControl.querySelector("small");
        small.innerText = message;
        formControl.className = "form-group error";
    
    }  
    
function setSuccessFor(input, message){
        const formControl = input.parentElement;
     
       formControl.className = "form-group success";
    }


// adição de lista de hobby 

const btn = document.querySelector("#send");
btn.addEventListener("click", function(e){
e.preventDefault();


let text = document.getElementById("hobby").value;
  let list = document.getElementById("lista").innerHTML;

  list += "<li>" +text+ "</li>"

  document.getElementById("lista").innerHTML = list;
  document.getElementById("hobby").value = null;

});

//uso da API viacep

const cep = document.querySelector('#cep');
cep.addEventListener( 'blur', buscaCEP);

function apresentarDados(data){
    for( const campo in data ){
        if(  document.querySelector('#'+campo) ){
            document.querySelector( '#'+campo).value = data[campo];
        }
    }

}

function buscaCEP(e){
let busca = cep.value.replace('-','');

 const option = {

    method: 'get',
    mode: 'cors',
    cache: 'default'
 }

fetch(  `https://viacep.com.br/ws/${busca}/json/`)
.then( (response) => {
    response.json()
    .then( (data ) => { apresentarDados(data); } )
} );

fetch

}

var resultado = document.getElementById("resultado");

function inserir(numero){
    if(resultado.innerHTML.length < 13){
        resultado.innerHTML += numero;
    }
}

function limpar(){
    resultado.innerHTML = "";
}

function deletar(){
    resultado.innerHTML = resultado.innerHTML.substring(0, resultado.innerHTML.length - 1);
}

function calcular(){
    if (resultado){
        resultado.innerHTML = eval(resultado.innerHTML);
    }
}
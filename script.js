var menu = ["1) Adicionar despesa", "2) Calcular total"
    & "4) Encontrar despesa mais alta", "5) Ver lista de despesas", "0) Sair"];


var optmenu = 0;
var despesas = [];
var alta = 0;


var button = document.querySelector("#butao");
button.addEventListener("click", function () {
    var opcao = parseInt(document.getElementById("opcao").value);
    if (opcao == 1) {
        add();
    } else if (opcao == 2) {

        alert("Seu total é de: " + total(despesas.length, despesas));
    } else if (opcao == 3) {

        alert("Sua média de gastos é: " + media(despesas.length, despesas));
    } else if (opcao == 4) {
        alert("Sua despesa mais alta é de: " + maior());
    } else if (opcao == 5) {
        vertudo();
    } else if (opcao == 6) {
        deletar();
    }
}

)


function add() {
    var valor = Number(prompt("Digite um valor: "));

    if (Number.isInteger(valor)) {

        if (valor > 0) {
            despesas.push(valor);

        }else{
            alert("Você precisa digitar ALGUMA COISA!");
        }
    } else {
        alert("Digite apenas NÚMEROS!!");
    }




}

function total(lenDesp, listaDesp) {
    var somaTotal = 0;
    for (var i = 0; i < lenDesp; i++) {
        somaTotal = Number(somaTotal) + Number(listaDesp[i]);
    }
    return somaTotal;

}

function media(lenDesp, listaDesp) {
    var media = 0;
    for (var i = 0; i < lenDesp; i++) {
        media = Number(media) + Number(listaDesp[i]);
    }
    media = Number(media) / Number(lenDesp);
    return media;
}

function maior() {
    for (var i = 0; i < despesas.length; i++) {
        if (despesas[i] > alta) {
            alta = despesas[i];
        }


    }
    return alta;
}

function vertudo() {
    var listaDespesas = [];
    for (var i = 0; i < despesas.length; i++) {
        listaDespesas.push("R$" + despesas[i]);
        listaDespesas.push("\n");
    }
    alert(listaDespesas);
}

function deletar() {
    var indice = Number(prompt("Digite a despesa que deseja excluir"))
    var despesasPagas = despesas.splice(indice, 1);

    alert("Despesa excluida");
}






var input = document.getElementById("inputConteudo");
var campo = document.getElementById("Armazem");
var codAtual = 0;
var contadorCriar = 0;
var contadorExibir = 0;

var arrayLista = [];

// ---------------


// ---------------

function criarObjeto(codigoGo, nomeGo) {
    return { codigoAtual: codigoGo, nome: nomeGo }
}

function espacoAppend() {
    var criacaoO = document.createElement("div");
    let espaco = document.createElement("br");
    criacaoO.appendChild(espaco);
    campo.appendChild(criacaoO);
}

function puxarNome(parametro) {
    return arrayLista[parametro].nome;
}


arrayLista.push(criarObjeto(codAtual, "barriga"));

function salvarTest() {
    let testador = 0;
    while (testador < arrayLista.length) {
        if (input.value == arrayLista[testador].nome) {
            alert("CATEGORIA JÁ CADASTRADA!");
            break;
        } else {
            testador++;
        }
    }
    if (testador === arrayLista.length) {
        codAtual++;
        arrayLista.push(criarObjeto(codAtual, input.value));
        alert("*** CATEGORIA CADASTRADA COM SUCESSO!!! ***");
    }
}

function testeFinal() {
    if (contadorCriar == 0) {
        contadorCriar++;
        salvarTest();
        arrayLista.shift();
    } else {
        salvarTest();
    }
}

function puxarCodigo(parametro) {
    return arrayLista[parametro].codigoAtual;
}

function puxarFuncaoCodigo(contador) {
    let criacao = document.createElement("div");
    let codigoCriar = document.createTextNode("Código: " + puxarCodigo(contador));
    criacao.appendChild(codigoCriar);
    campo.appendChild(criacao);
}

function puxarFuncaoNome(contador) {
    let criacao = document.createElement("div");
    let texto = document.createTextNode("Nome: " + puxarNome(contador));
    criacao.appendChild(texto);
    campo.appendChild(criacao);
}

var contagemHTML = 0;
function listaCompleta() {
    for (var contador = 0; contador < arrayLista.length; contador++) {
        espacoAppend();
        puxarFuncaoCodigo(contador);
        puxarFuncaoNome(contador);
        contagemHTML++;
    }
}
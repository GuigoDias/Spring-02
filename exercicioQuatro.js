var input = document.getElementById("inputConteudo");
var campo = document.getElementById("Armazem");
codAtual = 0;

var arrayLista = [];

function criarObjeto(codigoGo, nomeGo) {
    return { codigoAtual: codigoGo, nome: nomeGo }
}

function espacoAppend() {
    var criacaoO = document.createElement("p");
    let espaco = document.createElement("br");
    criacaoO.appendChild(espaco);
    campo.appendChild(criacaoO);
}

// --------------------------------

function salvarTest() {
        codAtual++;
        arrayLista.push(criarObjeto(codAtual, input.value));
        alert("*** CATEGORIA CADASTRADA COM SUCESSO!!! ***");
}

function puxarCodigo(parametro) {
    return arrayLista[parametro].codigoAtual;
}

function puxarNome(parametro) {
    return arrayLista[parametro].nome;
}

function puxarFuncaoCodigo(contador) {
    let criacao = document.createElement("p");
    let codigoCriar = document.createTextNode("Código: " + puxarCodigo(contador));
    criacao.appendChild(codigoCriar);
    campo.appendChild(criacao);
}

function puxarFuncaoNome(contador) {
    let criacao = document.createElement("p");
    let texto = document.createTextNode("Nome: " + puxarNome(contador));
    criacao.appendChild(texto);
    campo.appendChild(criacao);
}

function listaCompleta() {
    for (var contador = 0; contador <= arrayLista.length; contador++) {
        espacoAppend();
        puxarFuncaoCodigo(contador);
        puxarFuncaoNome(contador);
    }
}
// --------------------------------

// if(input.value == campo.value){
//     alert("*** Já existe essa categoria! ***");

// }else{
//     // Todo o código restante
// }

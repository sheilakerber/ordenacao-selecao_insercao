/*Criar uma pagina com input para o usuario inserir varios numeros separados por virgula.
Criar 2 botoes (selecao e insercao), onde o usuario podera escolher qual o tipo de ordenacao ele quer fazer.
Ao terminar a ordenacao devera aparecer na tela o array ordenado e quanto tempo a ordenacao demorou, podera utilizar a classe Date do javascript para ajudar.*/

//array com a sequencia inserida pelo usuario
let valoresOrdenar = []

//funcao que add os inputs
function enviarValores() {
    let valor = Number(document.getElementById("valores").value)
    valoresOrdenar.push(valor)

    //chama a funcao para mostrar a seq na tela, conforme o usuario add os valores
    sequenciaOriginalHtml()
}

function sequenciaOriginalHtml() {
    let sequencia = document.getElementById("sequenciaOriginal")
    sequencia.innerHTML = "Sua sequência: " + valoresOrdenar
    document.getElementById("valores").value = ""
}

function ordenarSelecao() {

    let countStart = performance.now() //contagem do tempo inicial

    let i, j, index;
    for (i = 0; i < valoresOrdenar.length - 1; i++) {
        index = i;
        for (j = i + 1; j < valoresOrdenar.length; j++) {
            if (valoresOrdenar[j] < valoresOrdenar[index]) {
                index = j;
            }
        }
        let menorNumero = valoresOrdenar[index];
        //console.log("iniciando troca ", valoresOrdenar);
        valoresOrdenar[index] = valoresOrdenar[i];
        //console.log("troca posicao ", valoresOrdenar);
        valoresOrdenar[i] = menorNumero;
        //console.log("menor numero mais a esquerda ", valoresOrdenar);
    }

    let countEnd = performance.now() //contagem do tempo final

    document.getElementById("resultadoHtml").innerHTML += "Sequência ordenada por seleção: " + valoresOrdenar + "<br>" + "Tempo de execução: " + (countEnd - countStart) + " milisegundos" + "<br>" + "<br>"
}

function ordenarInsercao() {

    let countStart = performance.now() //contagem do tempo inicial

    let i, j, valor;
    for (i = 1; i < valoresOrdenar.length; i++) {
        //console.log("iniciando fluxo ", array);
        valor = valoresOrdenar[i]; // x = 1
        j = i - 1; // j = 1
        while (j > -1 && valoresOrdenar[j] > valor) {
            // 3 > 1
            //console.log("antes de alterar ", array);
            valoresOrdenar[j + 1] = valoresOrdenar[j];
            //console.log("depois de alterar ", array);
            j--;
        }
        valoresOrdenar[j + 1] = valor;
        //console.log("alocando o valor na posicao correta ", array);
    }

    let countEnd = performance.now() //contagem do tempo final

    document.getElementById("resultadoHtml").innerHTML += "Sequência ordenada por inserção: " + valoresOrdenar + "<br>" + "Tempo de execução: " + (countEnd - countStart) + " milisegundos" + "<br>" + "<br>"
}

//limpar todos os valores e reiniciar
function resetValores() {
    document.getElementById("valores").value = ""
    valoresOrdenar = []
    document.getElementById("sequenciaOriginal").innerHTML = ""
    document.getElementById("resultadoHtml").innerHTML = ""
}
/*TAREFA AULA 7 - INTRODUÇÃO A JAVASCRIPT */

// 1. Criar e definir 5 variáveis com os seguintes valores:

    // a. Um número inteiro positivo
    var pos = 5;

    // b. Um número inteiro negativo
    var neg = -6;

    // c. Um número decimal
    var dec = 2.1;

    // d.Uma string
    var palavra = "String de caracteres"

    // e.Um valor verdadeiro
    var logica = true;

// 2. Agora imprima as variáveis acima usando a função console.log()

    console.log(pos);
    console.log(neg);
    console.log(dec);
    console.log(palavra);
    console.log(logica);

// 3. Criar e definir 2 variáveis (nome e sobrenome) e imprimir a
// concatenação das variáveis adicionando um espaço no meio.

    var nome = "Maíra";
    var sobrenome = "Rodrigues";
    console.log(nome + " " + sobrenome);

// 4. Experimente executar o seguinte código:
 
    //var nome = "Clara";
    //console.log(Nome);
    //nao funciona porque a variável chamada no console.log está com letra maiúscula.
    
// 5. O comando console.log(nome,sobrenome) dá o mesmo resultado da concatençaõ com espaço entre as variáveis;

// 6.Escrever um texto em mais de uma linha e imprimir usando a função console.log()
// + para escrever o código em mais de uma linha e \n para quebra de linha no console.

    var texto = "6 July, morning.\nMy angel, my all, my very self — only a few words today,"+
    "and that too with pencil (with yours) — only till tomorrow \nis my lodging definitely fixed."+
    " What abominable waste of time in such things — why this deep grief, where necessity speaks? "+ "\n" +
    "Your faithful " + "\n" +
    "Ludwig van Beethoven";

    console.log(texto);

// 7. Criar 2 variáveis valorNulo e naodefinido, definindo os valores respectivamente como “null” e “undefined”,
// e imprimir as duas variáveis utilizando a função console.log().

    var valorNulo = null;
    var naodefinido = undefined;
    console.log(valorNulo);
    console.log(naodefinido);

// 8. Criar um array com 5 frutas diferentes e imprimir utilizando a função console.log().
    
    var arrayFrutas = ["maçã", "banana", "laranja", "abacaxi", "melancia"];
    console.log(arrayFrutas);

// 9. Criar uma variável de uma string com o texto:

    var texto2 = "Digital House, a escola de programação que forma novas\ngerações de coders"+ 
    " e profissionais digitais para imaginar, inovar\ne criar o que sempre sonharam.";
    console.log(texto2);

// CÓDIGOS DA AULA

    /* var numero = 0;

    while (numero <3) {
        console.log("Olá" + numero);
        numero++
    }

    do{

        console.log("Olá + numero");
        numero = numero+1; //numero++
    }while(numero<3);

    var lista = [10,20,30];

    for(var e in lista){
        console.log(lista[e]);
    }

    var obj ={
        nome: "Rafael",
        sobrenome: "Lopes"
    };

    for (var n in nome){
        console.log(n+": " + nome[n])
    }


}

var mes = 1;
Switch(mes){
    case 1: console.log("Janeiro");
    break;

    case 2: console.log("Fevereiro");
    break;
    
    case 3: console.log("Março");
    break;

    default: console.log("mês não existe");
    break;

    */
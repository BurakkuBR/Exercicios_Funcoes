/* Exercícios de interpretação de código

1. Leia o código abaixo:
    
   function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

    
    a) O que vai ser impresso no console?

    5
    50

    
    b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e 
    `minhaFuncao(10)`? O que apareceria no console? 

    O console não ira retornar nada.

    */






    /* 2. Leia o código abaixo:

    let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

a. Explique o que essa função faz e qual é sua utilidade

a função retorna a variável 'texto' verificando a existencia de letras em caixa alta da palavra cenoura.

b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     i.   `Eu gosto de cenoura`
     false

     ii.  `CENOURA é bom pra vista`
     true

     iii. `Cenouras crescem na terra`
     true
     */








/* - **Exercícios de escrita de código**

    1. Escreva as funções explicadas abaixo:
        
        a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como:
        "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
        Troque o nome, idade, cidade e se é estudante ou não por informações sobre você.
        Lembrando que a função não possui entradas, apenas imprime essa mensagem.
        

        function informacoes (){
            console.log ("Eu sou Fábio, tenho 28 anos, moro em São Leopoldo e sou estudante.");
        }
         

         b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: 
         o nome (string), a idade (number), a cidade (string) e uma profissão (string). 
         Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:
         
        function informacoesNovas (){
            let nome = prompt ("Digite o seu nome: ");
            let idade = prompt ("Digite a sua idade: ");
            let cidade = prompt ("Digite a sua cidade: ");
            let profissao = prompt ("Digite a sua profissão: ");
            alert (`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`);

        }
        informacoesNovas();
        */


    /* 2. Escreva as funções explicadas abaixo:
    
    a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, 
    faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
    
    
    function soma (num1,num2) {

        return num1 + num2
    }
    let resultado = soma (parseFloat(prompt("Digite um número a ser somado: ")) , parseFloat(prompt("Digite um número a ser somado: ")));
    console.log (resultado);
    
    b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

    function booleano (num1,num2) {

        return num1 >= num2

        }
        console.log (booleano (50,49));
    
    c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

    function parOuImpar (num1) {

        return num1%2 === 0

        }
        console.log (parOuImpar (20));
    
    d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, 
    juntamente com uma versão dela em letras maiúsculas. 


    function caixaAlta (texto) {
       
        return texto.toUpperCase() + "," + texto.length

        }
        console.log (caixaAlta(prompt ("letras maisuculas: ")));
        */





/*
        

3.Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). 
Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. 
Por fim, mostre no console o resultado das operações:


function soma (num1,num2) {

        return num1 + num2
    }
soma = soma (parseFloat(prompt("Digite um número a ser somado: ")) , parseFloat(prompt("Digite um número a ser somado: ")));
console.log (soma);


function sub (num1,num2) {

    return num1 - num2
}


sub = sub (parseFloat(prompt("Digite um número a ser subtraido: ")) , parseFloat(prompt("Digite um número a ser subtraido: ")));
console.log (sub);


function multi (num1,num2) {

     return num1 * num2
}

multi = multi (parseFloat(prompt("Digite um número a ser multiplicado: ")) , parseFloat(prompt("Digite um número a ser multiplicado: ")));
console.log (multi);


function div (num1,num2) {

    return num1 / num2
}

div = div (parseFloat(prompt("Digite um número a ser dividido: ")) , parseFloat(prompt("Digite um número a ser dividido: ")));
console.log (div);
*/





/* Desafios
1. Funções são trechos de códigos como quaisquer outros mas que podemos acessá-los mais de uma vez ao longo do código através de invocações/chamadas. 
Então, funções podem chamar/invocar outras funções também. Sua tarefa é escrever duas funções
    
    a) Escreva uma *arrow function* que recebe um parâmetro e imprime no console esse parâmetro

    
    b) Escreva outra *arrow function* que recebe dois valores como parâmetros mas **nenhum retorno.** 
    Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma como entrada para imprimi-lo.
*/


console = (num1) => {

    alert(num1)

}

soma = (num1,num2) => {

    total = num1 + num2
    return total

}

console1(soma(2,5))




/* 2. Faça uma função que execute o teorema de Pitágoras, recebendo dois catetos e calculando o valor da hipotenusa.
Retorne este valor, invoque a função e imprima o resultado no console.


function hipotenusa (cat,cat2){
return Math.sqrt (Math.pow(cat1,2)) + Math.pow(cat2,2)
}
console.log (hipo (3,4).tofixed(2))
*/
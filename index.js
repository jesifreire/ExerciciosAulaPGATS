console.log("Aula inicial JS!")

console.error("Falha na execução do programa!")
console.warn("Atenção, você está prestes a sair do site!")  
console.table(
    [
        { Nome: "Lucas", Idade: 22, Disciplina: "JavaScript" },
        { Nome: "Ana", Idade: 25, Disciplina: "HTML" },
        { Nome: "Maria", Idade: 28, Disciplina: "CSS" },
        { Nome: "Pedro", Idade: 35, Disciplina: "Java" },
        { Nome: "Carlos", Idade: 40, Disciplina: "Python" },
        
    ]
)

/*
*Constantes e variáveis
* Constantes são variáveis que não podem ser alteradas depois de definidas.
* Variáveis podem ser alteradas durante a execução do programa.
* Constantes são definidas com a palavra-chave const.
* Variáveis são definidas com a palavra-chave let.
independente do local que ela foi declarada ele será movida para o todo com valor undefined
*/

//Informacoes que nao mudam
const nome = 'Toddy'
const raca = 'Dachshund'
const sexo = 'Macho'
const cor = 'Preto'
const dataDeNascimento = '18/11/2022'
const porte = 'M'


//Informacoes que mudam
let idade = 2
let peso = 8.3
let vacinado = true
let castrado = true
let tamanho = 'M'

console.log("Nome: " + nome)

const info = [
    {nome: 'Toddy', raca: 'Dachshund', sexo: 'Macho', cor: 'Preto', dataDeNascimento: '18/11/2022', porte: 'M'},
]
console.table(info)
//Exemplos  
const valor = '42'
console.log(valor)
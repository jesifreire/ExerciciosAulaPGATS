/*
Crie um script que receba o peso do dog em kg + estoque atual de ração em gramas. Calcule a quantidade diária de ração com base na seguinte fórmula: Gramas por dia = peso x 30 gramas
Exiba:
Nome do dog
Peso
Quantidade de ração recomendada por dia
- Quantos dias o estoque atual vai durar
*/
 
const pesoDoDog = 30 
const estoqueRacao = 9000 // gramas
const nomeDog = 'Lily'

const quantidadeRacaoDiaria = pesoDoDog * 30

const diasEstoque = Math.floor(estoqueRacao / quantidadeRacaoDiaria)

console.log(`Nome: ${nomeDog}`)
console.log(`Peso: ${pesoDoDog}kg`)
console.log(`Quantidade de ração recomendada por dia: ${quantidadeRacaoDiaria}g`)
console.log(`Quantos dias o estoque atual vai durar: ${diasEstoque} dias`)

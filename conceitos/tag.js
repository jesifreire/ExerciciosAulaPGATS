const nome = '🐶 toddy', raca = '🌭 dachshund'
const peso = '🏋️ 8.3'
const situacao = 'Não foi adotado'


let nameMaiusculo = nome.toUpperCase()
let primeiraLetra = raca.slice(0, 1).toUpperCase() + raca.slice(1).toLowerCase()

const doguito = [{name: nameMaiusculo , peso: peso, raca: primeiraLetra}]
console.log("===*** TAG DE IDENTIFICACAO ***===")
//console.log(`Nome: ${nome}\nRaça: ${raca}\nPeso: ${peso}, \nStatus: ${situacao}`)
console.table(doguito)
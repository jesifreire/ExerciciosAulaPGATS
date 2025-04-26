/**
 * Exercício Individual
Programação para Automação de Testes
Hands-on
Validador de idade mínima para adoção
Crie um script que verifique se um dog pode ser adotado com base na idade mínima definida, por exemplo, 2 anos.
Use os operadores adequados e exiba:
Nome do dog
Idade
Se está apto ou não para adoção
Extra: aplique uma regra com operador lógico para permitir que se o cão for de pequeno porte, pode ser adotado independente da idade
 */



const idadeMinima = 2
const idadeDoDog = 20
const pesoDoDog = 36

const porte = pesoDoDog <= 10
  ? 'pequeno'
  : pesoDoDog <= 20
    ? 'médio'
    : 'grande'

const statusAdocao = (idadeDoDog >= idadeMinima || porte === 'pequeno')
  ? 'Pode ser adotado ✅'
  : 'Não pode ser adotado ❌'

console.log(`Nome: lily`)
console.log(`Idade: ${idadeDoDog} ano${idadeDoDog !== 1 ? 's' : ''}`)
console.log(`Porte: ${porte}`)
console.log(`Status: ${statusAdocao}`)

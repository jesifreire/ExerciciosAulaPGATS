/**
 * Sintaxe CommonJS
 * module.exports = {} / require('')
 * 
 * ESM
 * export {} / import 
 * 
 * */ 
 function exibirNomePet(paramNomePet) {
    console.log(`O nome do pet é: ${paramNomePet}`)
  }

  //exibirNomePet('Rex')
  //exibirNomePet('Fiona')
  //exibirNomePet('Luna')

  // exportando a função
  export{exibirNomePet}
async function exibirNomeDogFormatado(nome) {
    return nome.toUpperCase();
  }

  // await -> espera a promise ser resolvida
  console.log(await exibirNomeDogFormatado('Thor'))
 
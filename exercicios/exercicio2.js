function validarNomeTag(nomeOriginal) {
    console.log("Nome original:", nomeOriginal);
  
    // Vai remover espaços extras e padroniza a capitalização
    const nomeFormatado = nomeOriginal
      .trim() 
      .replace(/\s+/g, ' ') 
      .toLowerCase() 
      .replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase()); 
  
    console.log("Nome formatado:", nomeFormatado);
  

    const nomeValido = !nomeFormatado.includes(' ');
    console.log("Nome válido?", nomeValido ? "Sim" : "Não");
    console.log("---------------------------");
  }
  
 
  validarNomeTag("  bolOtA silva");
  validarNomeTag("LaDy");
  
  
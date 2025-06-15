export function geradorDeTagsDeIdentificacao(nome) {
    // Retorna o nome em letras maiúsculas
    return nome.toUpperCase();
  }
  
  export function verificarSePodeSerAdotado(idade, porte) {
    /*
      Regras de adoção (exemplo):
      - Porte pequeno (P) ou médio (M): idade mínima de 1 ano
      - Porte grande (G): idade mínima de 2 anos
    */
    const p = porte.toUpperCase();
    if ((p === 'P' || p === 'M') && idade >= 1) {
      return true;
    }
    if (p === 'G' && idade >= 2) {
      return true;
    }
    return false;
  }
  
  export function calcularConsumoDeRacao(nome, idade, peso) {
    // Consumo diário estimado: 300 gramas de ração por kg de peso
    return peso * 300;
  }
  
  export function decidirTipoDeAtividadePorPorte(porte) {
    // Define a atividade com base no porte do pet
    switch (porte.toLowerCase()) {
      case 'pequeno':
        return 'brincar dentro de casa';
      case 'médio':
      case 'medio':
      case 'med':
        return 'passear na rua';
      case 'grande':
        return 'correr no parque';
      default:
        return 'atividade não definida';
    }
  }
  
  export async function buscarDadoAsync() {
   
    return Promise.resolve('Pipoca');
  }
/*
Controle de petiscos
Crie um script que receba uma quantidade de petiscos e de 1 por vez até o dog estiver satisfeito.
Use a estrutura de repetição for contado.
Exiba:
Cada vez que um petisco for entregue
- Quando o dog estiver satisfeito (que é quando terminar os petiscos)
Extra: Transforme a l[ogica em uma função


*/ 

/*let petiscos = 5
let petiscosEntregues = 0

for(petiscosEntregues = 1; petiscosEntregues <= petiscos; petiscosEntregues++){
    console.log('Petisco entregue! ' + petiscosEntregues)       
}
if(petiscosEntregues == petiscos){
    
}
console.log('Dog satisfeito!')

console.log('____________*****_______________')
*/
// Extra: Transforme a l[ogica em uma função    

function feedDog(petiscos) {
    // Entrega os petiscos um a um
    for (let petiscosEntregues = 1; petiscosEntregues <= petiscos; petiscosEntregues++) {
      console.log('Petisco entregue! ' + petiscosEntregues);
    }
  
    // Quando terminar todos os petiscos
    console.log('Dog satisfeito!');
  }
  
  // Exemplo de uso:
  let petiscos = 5;
  feedDog(petiscos);
  

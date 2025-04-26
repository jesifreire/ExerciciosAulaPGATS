/* 
> - Maior que
>= - Maior ou igual que
< - Menor que
<= - Menor ou igual que
== - Igual
!= - Diferente
=== - Estritamente igual Tanto por valor quanto por tipo
*/

//Maior que
//console.log(`10 > 5 = ${10 > 5}`); // true
console.log(10 > 5)

// Maior ou igual
console.log(10 >= 10) // true
console.log(10 >= 20) // false

// Menor que
console.log(10 < 20) // true
console.log(10 < 10) // false

// Menor ou igual
console.log(10 <= 10) // true
console.log(10 <= 9) // false

// Igualdade somente de valor
console.log(1 == '1') // true
console.log(true == 1) // true
console.log(false == 0) // true

// Igualdade estrita - Valor e tipo de dado
console.log(1 === '1') // false
console.log(true === 1) // false
console.log(false === 1) // false

// Diferente somente de valor
console.log(1 != '2') // true
console.log(1!= 2) // true
console.log(true != 1) // false
console.log(false != 0) // false
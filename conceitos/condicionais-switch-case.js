/*const peso = 30

switch (peso){
    case 10:
        console.log('Porte pequeno')
        break
    case 20:
        console.log('Porte médio')
        break
    case 30:
        console.log('Porte grande')
        break
    default:
        console.log('ND')
        
}
        */

// Outra forma de fazer

const peso = 30;

switch (true) {
    case peso <= 10:
        console.log('P');
        break;
    case peso <= 20:
        console.log('M');
        break;
    case peso <= 30:
        console.log('G');
        break;
    default:
        console.log('ND');
}

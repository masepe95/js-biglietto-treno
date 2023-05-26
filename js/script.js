console.log('JS OK') 

// RECUPERO ELEMENTO
const totalCost = document.getElementById('ticket-cost');
console.log(totalCost);

// COSTO PER CHILOMETRO
const ticketCostKM = 0.21.toFixed(2);

// RICHIESTA INFORMAZIONI
const distanceRequired = parseInt(prompt('Quanti chilometri vuoi percorrere?', 100));
const userAge = parseInt(prompt('Quanti anni hai?', 17));



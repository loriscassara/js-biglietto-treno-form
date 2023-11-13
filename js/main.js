/*************** 
    CODE TICKET PRICE
***************/

const btnGen = document.querySelector('#btn-generate'); //dichiarazione variabile del bottone per la dichiarazione dati
//console.log('Bottone per generare il biglietto', btnGen);

const btnCanc = document.querySelector('#btn-canc'); //dichiarazione variabile del bottone per annullare il testo scritto
//console.log('Bottone per cancellare:', btnCanc);

/*
* Prima di dichiarare le altre variabili devo dichiarare la funzione
* di click, altrimenti prenderebbe le variabili del caricamento pagina
*/

btnGen.addEventListener('click', function() { //funzione avviabile solo al click della variabile
    const userName = document.querySelector('#name-surname').value; //dichiarazione variabile al click del bottone (nome e cognome)
    //console.log('Nome e cognome della persona:', userName);
    const kilometres = Number(document.querySelector('#kilometres').value); //dichiarazione variabile al click del bottone (KM)
    //console.log('KM percorsi:', kilometres);
    const age = document.querySelector('#age').value; //dichiarazione variabile al click del bottone (scelta dell'età)
    //console.log('Opzione scelta:', age);
    const ticketPrice = (kilometres * 0.21).toFixed(2); //dichiarazione variabile prezzo normale del biglietto
    //console.log('Prezzo normale biglietto:', ticketPrice);
    const ticketPrice20 = ((ticketPrice * 20) / 100).toFixed(2); //dichiarazione variabile prezzo scontato del 20%
    const ticketPrice40 = ((ticketPrice * 40) / 100).toFixed(2); //dichiarazione variabile prezzo scontato del 40%

    const outputName = document.querySelector('#output-name').innerHTML = `${userName}`; //dichiarazione variabile per scrivere all'interno dell'HTML
    
/*
* Ciclo if essendoci più possibilità di scelta riguardante
* al tipo di ticket che si può scegliere
*/

    if (age == 0) { //se age vale 0 allora..
        document.querySelector('#output-ticket').innerHTML = `Minorenne`; //dichiarazione variabile per scrivere all'interno dell'HTML
    }  else if (age == 1) { //se age vale 1 allora..
        document.querySelector('#output-ticket').innerHTML = `Normale`; //dichiarazione variabile per scrivere all'interno dell'HTML
    } else if (age == 2) { //se age vale 2 allora..
        document.querySelector('#output-ticket').innerHTML = `Over 65`; //dichiarazione variabile per scrivere all'interno dell'HTML
    } else { //in tutti gli altri casi..
        document.querySelector('#output-ticket').innerHTML = `Error.. Riprovare` //dichiarazione variabile per scrivere all'interno dell'HTML
    }

    const randomNumberWagon = Math.floor(Math.random()*9 + 1); //dichiarazione di un numero intero casuale da 1 a 9
    const wagonNumber = document.querySelector('#output-wagon').innerHTML = `${randomNumberWagon}`; //dichiarazione variabile per scrivere all'interno dell'HTML
    const randomNumberCp = Math.floor(Math.random()*99999 + 1); //dichiarazione di un numero intero casuale da 1 a 99999
    const CpNumber = document.querySelector('#output-CP').innerHTML = `${randomNumberCp}`; //dichiarazione variabile per scrivere all'interno dell'HTML

/*
* Ciclo if essendoci più possibilità di prezzo del ticket
* in base alla scelta di età
*/

    if (age == 0) { //se age < 18 allora..
        document.querySelector('#output-price').innerHTML = `${ticketPrice20} €`; //dichiarazione variabile per scrivere all'interno dell'HTML
    } else if (age == 1) { //se age >= 18 E <= 65 allora..
        document.querySelector('#output-price').innerHTML = `${ticketPrice} €`; //dichiarazione variabile per scrivere all'interno dell'HTML
    } else if (age == 2) { //se age > 18 allora..
        document.querySelector('#output-price').innerHTML = `${ticketPrice40} €`; //dichiarazione variabile per scrivere all'interno dell'HTML
    } else { //in tutti gli altri casi..
        document.querySelector('#output-price').innerHTML = `Error.. Riprovare`; //dichiarazione variabile per scrivere all'interno dell'HTML
    }

    document.querySelector('#ticket-title').classList.remove('d-none');
    document.querySelector('#ticket').classList.remove('d-none');
})

btnCanc.addEventListener('click', function() { //funzione avviabile solo al click della variabile
    window.location.reload(); //funziona per ricaricare la paggina corrente e tornare all'HTML di partenza
})
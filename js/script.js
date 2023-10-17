// Palindroma
// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (ovviamente usando una funzione :nerd_face:).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (ovviamente  usando una funzione :nerd_face:)
// Dichiariamo chi ha vinto.


// Esercizio 1 parola palindroma: versione senza utility

const btnWord = document.getElementById('btn-check-words')

btnWord.addEventListener('click', palindromFunc);

// function palindromFunc(){
//     const palindromaEl = document.getElementById('palindroma')
//     let palWord = palindromaEl.value; 
//     let msg;
//     for (let i = palWord.length - 1; i >= 0; i --){
//         if( palWord[i].toLowerCase() === palWord[palWord.length - 1 - i].toLowerCase()){
//             msg = 'Si la parola è palindroma';
//         }else{
//             msg = ' No,prova con un altra parola';
//         }
//     }
//     console.log(palWord)
//     console.log(msg)  
// }

// Esercizio 1: versione con utility

function palindromFunc(){
    const palindromaEl = document.getElementById('palindroma')
    let palWord = palindromaEl.value;
    let palSplit = palWord.split("").reverse().join("");
    let msg;

    if (palSplit.toLowerCase() === palWord.toLowerCase()){
        msg = 'Si la parola è palindroma';
    }else{
        msg = 'No,prova con un altra parola';
    }
    console.log(palSplit)
    console.log(msg)  
}


// Esercizio 2 

const btnPlay = document.getElementById('play');

btnPlay.addEventListener('click', evenOddFunc);

function evenOddFunc(){
    const userNumber = document.getElementById('even-odd');
    const userNumberEl = parseInt(userNumber.value);
    let msgEx2;
    if(isNaN(userNumberEl) || userNumberEl > 5 || userNumberEl === 0){
        msgEx2 = 'Metti valori validi';
    }
    console.log(userNumberEl)


    const compRndNumber = getRndInteg (1,5);
    console.log(compRndNumber)

    const somma = userNumberEl + compRndNumber;
    console.log(somma)

    if ( userNumberEl % 2 === 0 && somma % 2 === 0){
        msgEx2 = 'Hai vinto'
    } else if ( userNumberEl % 2 > 0 && somma % 2 > 0){
        msgEx2 = 'Hai vinto'
    }else{
        msgEx2 = 'Non hai vinto'
    }

    console.log(msgEx2)

}


function getRndInteg (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}






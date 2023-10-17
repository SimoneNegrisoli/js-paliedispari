// Palindroma
// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (ovviamente usando una funzione :nerd_face:).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (ovviamente  usando una funzione :nerd_face:)
// Dichiariamo chi ha vinto.


// Esercizio parola palindroma

const btnWord = document.getElementById('btn-check-words')

btnWord.addEventListener('click', palindromFunc);

function palindromFunc(){
    const palindromaEl = document.getElementById('palindroma')
    let palWord = palindromaEl.value; 
    let msg;
    for (let i = palWord.length - 1; i >= 0; i --){
        if( palWord[i] === palWord[palWord.length - 1 - i]){
            msg = 'Si la parola è palindroma';
        }else{
            msg = ' No,prova con un altra parola';
        }
    }
    console.log(palWord)
    console.log(msg)

    
}
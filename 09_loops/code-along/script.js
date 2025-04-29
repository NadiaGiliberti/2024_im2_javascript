const board = document.querySelector('#board');
const game = [
    [['turm', 'schwarz'], ['springer', 'schwarz'], ['läufer', 'schwarz'], ['könig', 'schwarz'], ['dame', 'schwarz'], ['läufer', 'schwarz'], ['springer', 'schwarz'], ['turm', 'schwarz']],
    [['bauer', 'schwarz'], ['bauer', 'schwarz'], ['bauer', 'schwarz'], ['bauer', 'schwarz'], ['bauer', 'schwarz'], ['bauer', 'schwarz'], ['bauer', 'schwarz'], ['bauer', 'schwarz']],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [['bauer', 'weiss'], ['bauer', 'weiss'], ['bauer', 'weiss'], ['bauer', 'weiss'], ['bauer', 'weiss'], ['bauer', 'weiss'], ['bauer', 'weiss'], ['bauer', 'weiss']],
    [['turm', 'weiss'], ['springer', 'weiss'], ['läufer', 'weiss'], ['könig', 'weiss'], ['dame', 'weiss'], ['läufer', 'weiss'], ['springer', 'weiss'], ['turm', 'weiss']],
];
function isEven(number) {
    return number % 2 === 0;
}


game.forEach(row => {
    row.forEach(field => {
        console.log(field);
    })
})
  // **** Übung wurde angefangen aber dann übersprungen aus Zeitgründen... siehe Lösungen ****










// ****************************  BASIC LOOP CODES ALS INFO ****************************

// so wäre die manuelle Schlaufe gewesen ( nach Code "const wg = ['Nick', 'Lea', 'Wolfgang', 'Beni'];" )
// const wg_2 = document.createElement("p");
// wg_2.innerText = wg[1];
// board.appendChild(wg_2);

// const wg_3 = document.createElement("p");
// wg_3.innerText = wg[2];
// board.appendChild(wg_3);


// const wg = ['Nick', 'Lea', 'Wolfgang', 'Beni', 'Nils'];
// const zahlen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


//JETZT KOMMEN ZWEI VERSCHIEDENE SCHREIBWEISEN FÜR EINEN LOOP:

// erste Schreibweise, hier kann man (und muss) man mehr einstellen, wird weniger oft gebraucht:
// for (let i = 0; i < zahlen.length; i = i + 2) {
//     const zahl = document.createElement("p");
//     zahl.innerText = zahlen[i];
//     board.appendChild(zahl);
// }

//zweite Schreibweise, jedes element wird einmal abgearbeitet... nimmt jedes Element einmal und geht den Loop einmal durch:
// wg.forEach((element) => {
//     const person = document.createElement("p");
//     person.innerText = element;
//     board.appendChild(person);
// });




// ****************************  ENDE BASICS ALS INFO *****************************


// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, 
//in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Bonus: Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.

//definisco le variabili
const grigliaWrapper = document.getElementById('griglia');
const bottone = document.getElementById('play');
const difficoltà = document.getElementById('difficoltà');


//creo una funzione griglia
function griglia (numeroQuadrati , colonne) {
    
    for (let i = 1; i <= numeroQuadrati; i++) {
        const quadrato = document.createElement('div');
        quadrato.classList.add('quadrato');
        console.log(quadrato);
        
        quadrato.append(i);
        quadrato.style.height = `calc(100% / ${colonne})`;
        quadrato.style.width = `calc(100% / ${colonne})`;
        grigliaWrapper.appendChild(quadrato); 
    }

}

//genero griglia in base a difficoltà
bottone.addEventListener('click', function(){

    if (difficoltà.value == 1) {
        griglia (100,10);

    } else if (difficoltà.value == 2) {
        griglia (81,9);

    } else if (difficoltà.value == 3) { 
        griglia (49,7);
        
    }

} )    

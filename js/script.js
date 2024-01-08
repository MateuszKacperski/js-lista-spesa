console.log('JS OK');

//creo lista
const listaSpesa = ['pane', 'salame', 'formaggio', 'pomodoro', 'lattuga', 'maionese', 'cocacola', 'pancetta', 'pasta', 'broccoli', 'cartaforno', 'peperoncino', 'olio', 'uova', 'latte', 'zucchine'];

console.log(listaSpesa);

//Prendo l'elemento del html dove scrivere
const results = document.getElementById('lista');

//Creo la lista
let lista = '<ul>'

//inizializzo variabile contatore
let i = 0 

// cilclo while
while(listaSpesa.length > i){
   
    lista += `<li>${listaSpesa[i]} </li>`;

    i++;
}

//chiudo lista
lista += '</ul>'

//stampo su pagina
results.innerHTML = lista;

// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.

const spesa = ["mele","pere","avocado","pollo","miele","vino","pane","tonno"]


let n = 0
while (n < spesa.length ){
    lista = spesa[n]
    console.log(spesa[n]);
    document.write(`<li>${lista}</li>`)
    n++;
}


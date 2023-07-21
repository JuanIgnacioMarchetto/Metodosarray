// Array original
const originalArray = [1, 2, 3, 4, 5];

// Método map: Crea un nuevo array con los resultados de aplicar una función a cada elemento del array original.
const mapResult = originalArray.map((num) => num * 2);
const mapResultElement = document.getElementById('mapResult');
mapResult.forEach((num) => {
    const li = document.createElement('li');
    li.textContent = num 
    // Método map: Crea un nuevo array con los resultados de aplicar una función a cada elemento del array original.;
    mapResultElement.appendChild(li);
});

// Método filter: Crea un nuevo array con todos los elementos que cumplan una condición determinada por una función de filtrado.
const filterResult = originalArray.filter((num) => num % 2 === 0);
const filterResultElement = document.getElementById('filterResult');
filterResult.forEach((num) => {
    const li = document.createElement('li');
    li.textContent = num;
    filterResultElement.appendChild(li);
});

// Método find: Retorna el primer elemento del array que cumple una condición específica definida por una función.
const findResult = originalArray.find((num) => num > 3);
const findResultElement = document.getElementById('findResult');
findResultElement.textContent = findResult !== undefined ? findResult.toString() : 'No encontrado';

// Método sort: Ordena los elementos de un array en su lugar según el orden de sus valores.
const sortResult = originalArray.slice().sort();
const sortResultElement = document.getElementById('sortResult');
sortResult.forEach((num) => {
    const li = document.createElement('li');
    li.textContent = num;
    sortResultElement.appendChild(li);
});

// Método some: Verifica si al menos un elemento del array cumple una condición definida por una función.
const someResult = originalArray.some((num) => num % 2 === 0);
const someResultElement = document.getElementById('someResult');
someResultElement.textContent = someResult ? 'Sí' : 'No';

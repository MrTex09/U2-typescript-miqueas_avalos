function identity<T>(arg: T): T {
    return arg;
}

let numberIdentity = identity<number>(5);
let stringIdentity = identity<string>("hola");

console.log(`Número de identidad: ${numberIdentity}`); 
console.log(`Cadena de identidad: ${stringIdentity}`); 

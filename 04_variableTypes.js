console.log("----------------------- var / let / const -------------------------");

// let 1 kez tanımlanır. Tanımlanan değer sonraki satırlarda değiştirilebilir.
let age = 24
console.log("Age:", age);

age = 25
console.log("Age:", age);

/*
    Fakat aynı değişken yeniden tanımlanırsa:
    let age = 26
    Uncaught SyntaxError: Identifier 'age' has already been declared
*/


// const 1 kez tanımlanır, değeri let'te olduğu gibi sonradan değiştirelemez.
const PI = 3.141592653589793
console.log("PI: " + PI);

/*
    const PI = 3;
    Uncaught SyntaxError: Identifier 'PI' has already been declared
    let'teki hatanın aynısını alırız. let ve const ile tanımlanan değişkenler
    bir kez tanımlanır demiştik.
*/

/* 
    Aynı değişkene yeni bir değer atamaya çalışırsak:
    PI = 3  
    Uncaught TypeError: Assignment to constant variable.
    let bu kullanıma izin veriyordu.
*/


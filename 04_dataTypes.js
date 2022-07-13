// VAR - LET - CONST

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


/*
    var -> function scope
    let ve const -> block scope
*/ 

function demo(){
    console.log(message);   // undefined
    /* 
        Eğer bu scope içerisinde message diye bir değişken tanımlanmamış olsaydı:
        Uncaught ReferenceError: message is not defined

        undefined ve not defined farkını bu örnek üzerinden kavramaya çalış !!!
    */

    var message = "Merhaba Türkiye" // Bu değişkene yalnızca bu fonksiyon içinden erişilebilir.
    console.log(message);
}

console.log(message);   // Uncaught ReferenceError: message is not defined
demo()  // function scope olan message çalışır.

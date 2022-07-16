console.log("----------------------- var scope özelliği ---------------------------");

/*
    var -> function scope
    let ve const -> block scope
*/ 

var message = "Global Scope"
function demo(){
    console.log(message);   // undefined
    console.log(sayHello);  // undefined

    /*
        HOUSTING KAVRAMI
        Yukarıdaki değişkenlerin undefined olmasının sebebi JavaScript'teki HOUSTING özelliğinden kaynaklanır.
        Fonksiyon başladığında var değişkenleri scope'un en yukarısına taşınır. Şu hale gelir:

        var massage;
        console.log(message);   // undefined
        var sayHello;
        console.log(sayHello);   // undefined

        message = "Function Scope"
        sayHello = "Hello"    // Atamalar burada yapılır.

        console.log(message);
        console.log(sayHello);
    */

    /*  
        Eğer bu scope içerisinde sayHello diye bir değişken tanımlanmamış olsaydı:
        Uncaught ReferenceError: sayHello is not defined

        Eğer bu scope içerisinde message diye bir değişken tanımlanmamış olsaydı Global'deki message
        değişkenini alırdı. Yani globalde tanımlanan bir değişkeni fonksiyon içinde kullanabiliriz fakat
        fonksiyon içinde tanımlanan bir değişkeni globalde kullanamayız.
    */
    var message = "Function Scope" // Bu değişkene yalnızca bu fonksiyon içinden erişilebilir.
    console.log(message);

    var sayHello = "Hello"
}
console.log(message);
demo()  // function scope olan message çalışır.
console.log(message);

console.log("---------------- let ve const ---------------------");

/* 
console.log(bye);   // Uncaught ReferenceError: Cannot access 'bye' before initialization
let bye = "Goodbye";

console.log(goodNight);  // Uncaught ReferenceError: Cannot access 'bye' before initialization
const goodNight = "Goodnight"; 

Aslında let ve const anahtar kelimeleri hoist ediliyor ancak initialization aşamasında oluşan farklılıktan dolayı
let ve cons kullanımı ReferenceError oluşmasına neden oluyor.
*/


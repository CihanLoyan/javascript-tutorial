var message1 = "Hello Türkiye"
console.log(message1);

console.log("--------------------------------------------")

console.log(message2);
var message2 = "Housting"
console.log(message2);

/*

Yukarıdaki değişkenin undefined olmasının sebebi 
JavaScript'teki HOUSTING özelliğinden kaynaklanır.

var message2;
console.log(message2); // undefined
message2 = "Housting"
console.log(message2); // Housting
*/

console.log("-------------------------------------------");

var sayi = 10
console.log(sayi);
var sayi = 20
console.log(sayi);
// NOT: Tekrar oluşturulan değişkene değer atanırsa yeni atanan değeri alır.

console.log("------------------------------------------");

var sayHello = "Merhaba"
console.log(sayHello);
var sayHello;
console.log(sayHello);
console.log(typeof(sayHello));

console.log("------------------------------------------");

// let 1 kez tanımlanır. Tanımlanan değer sonraki satırlarda değiştirilebilir.
// const 1 kez tanımlanır, değeri let'te olduğu gibi sonradan değiştirelemez.

let message3 = "Message3"
console.log(message3);


/* console.log(message4);   // Uncaught ReferenceError: Cannot access 'message4' before initialization
let message4 = "Message4"

console.log(MESSAGE9); // Uncaught ReferenceError: Cannot access 'message9' before initialization
const MESSAGE9 = "Message9";
*/

/*
    Fakat aynı değişken yeniden tanımlanırsa:
    Uncaught SyntaxError: Identifier 'age' has already been declared
*/


/* let message5 = "Message5";
let message5 = "newMessage5" // Uncaught SyntaxError: Identifier 'message5' has already been declared    */

/*
const MESSAGE7 = "Message7";
console.log(MESSAGE7);
const MESSAGE7 = "newMessage7"; // Uncaught SyntaxError: Identifier 'message7' has already been declared
*/

let message6 = "Message6";
message6  = "newMessage6";
console.log(message6);
message6 = "newerMessage6";
console.log(message6); 

/* 
const MESSAGE8 = "Message8";
MESSAGE8 = "newMessage8";  // Uncaught TypeError: Assignment to constant variable. 
*/

/* 
    Aynı değişkene yeni bir değer atamaya çalışırsak: 
    Uncaught TypeError: Assignment to constant variable.
    let bu kullanıma izin veriyordu. 
*/

/*
Genelde “sabit kodlanmış” değişkenler için tamamen büyük harf kullanırız. 
Bu kod cümlesinde dogumGunu tam da bu tanıma uymaktadır. Bundan dolayı büyük harf ile kullanılabilir.
Buna karşı yaş değişkeni bir fonksiyonun çıktısına göre değer almaktadır. 
Bugün diyelim ki 20 yaşındaysanız bir yıl sonra 21 yaşında olacaksınız demektir. 
Fakat değer değiştiğinden dolayı dogumGunu değişkenine göre daha az sabittir.
Hesaplanan bir değerdir. Bundan dolayı bunu küçük harfle tutmanız gerekmektedir.
*/

console.log("----------------------------------------------------------------");

/* var age = 15
console.log("Age: " + age);

age = 16
console.log("Age: " + age);

var age = 17  // NOT: Tekrar oluşturulan değişkene değer atanırsa yeni atanan değeri alır.
console.log("Age: ", age) */

console.log("-----------------------------------------------------------------");

// let 1 kez tanımlanır. Tanımlanan değer sonraki satırlarda değiştirilebilir.

/* let age = 15
console.log("Age: ", age);

age = 16
console.log("Age: ", age);

let age = 17 // Uncaught SyntaxError: Identifier 'age' has already been declared */

console.log("----------------------------------------------------------------");

// const 1 kez tanımlanır, değeri let'te olduğu gibi sonradan değiştirelemez.

/* const AGE = 15
console.log("Age: ", AGE);

// AGE = 16  // Uncaught TypeError: Assignment to constant variable.

const AGE = 17  // Uncaught SyntaxError: Identifier 'AGE' has already been declared */

console.log("-------------------------- EKSTRA --------------------------------------");

/* 
console.log(message2);
var message2 = "Housting"
console.log(message2);

console.log(message4);   // Uncaught ReferenceError: Cannot access 'message4' before initialization
let message4 = "Message4"

console.log(MESSAGE9); // Uncaught ReferenceError: Cannot access 'message9' before initialization
const MESSAGE9 = "Message9";
*/
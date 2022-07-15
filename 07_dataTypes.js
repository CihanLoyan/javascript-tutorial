var message1 = "Hello Türkiye"
console.log(message1);

console.log("--------------------------------------------")

console.log(message2);
var message2 = "Housting"
console.log(message2);

/*
Yukarıdaki değişkenlerin undefined olmasının sebebi 
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

/* 
console.log(message4);   // Uncaught ReferenceError: Cannot access 'message4' before initialization
let message4 = "Message4"

console.log(MESSAGE9); // Uncaught ReferenceError: Cannot access 'message9' before initialization
const MESSAGE9 = "Message9";
*/

/*
    Fakat aynı değişken yeniden tanımlanırsa:
    Uncaught SyntaxError: Identifier 'age' has already been declared
*/

/* 
let message5 = "Message5";
let message5 = "newMessage5" // Uncaught SyntaxError: Identifier 'message5' has already been declared   

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
Genelde “sabit kodlanmış” sabitler için tamamen büyük harf kullanırız. 
Bir başka deyişle, kod çalışmadan bilinen ve doğrudan koda yazılan değerler için kullanılır.
Bu kod cümlesinde dogumGunu tam da bu tanıma uymaktadır. Bundan dolayı büyük harf ile kullanılabilir.
Buna karşı yaş değişkeni bir fonksiyonun çıktısına göre değer almaktadır. 
Bugün diyelim ki 20 yaşındaysanız bir yıl sonra 21 yaşında olacaksınız demektir. 
Tabi bu kural kod çalıştığında değişmez. 
Yani yıla göre değer alacaktır cümlesi değişmeyecektir.
Fakat değer değiştiğinden dolayı dogumGunu değişkenine göre daha az sabittir.
Hesaplanan bir değerdir. Bundan dolayı bunu küçük harfle tutmanız gerekmektedir.
*/


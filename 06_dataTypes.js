console.log("--------------- var, let, const scope özelliği -----------------");

// var function scope
var a = 1
function demo() {
    var a = 2
    console.log(a);
}
console.log(a);
demo();


// var block scope olmadığı için şu şekilde sonuç verir:
var i = 5
if(true) {
    var i = 10
    console.log(i);
}
console.log(i);


// let block scope
let j = 20
if(true) {
    let j = 30
    console.log("let ile block içinde tanımlanan j:", j);
}
console.log("let ile global'de tanımlanan j:", j);


// const block scope
const k = 100
if(true) {
    const k = 200
    console.log("const ile block içinde tanımlanan k:", k);
}
console.log("const ile global'de tanımlanan k", k);   

/*
    var, function scope olduğu için if'in dışında tanımlanan değişken ile içinde tanımlanan değişken aynı olur.
    Fakat let ve const, block scope olduğu için block'un(süslü parantezlerin) dışında tanımlanan değişken ile 
    içinde tanımlanan değişkenler farklı olur.
*/

{
    let departmant = "Software"
    const personalNumber = 123
    var salary = 10000
}
/* 
console.log(departmant); 
console.log(personalNumber);
console.log(salary);
block içine let ve const ile tanımlandıkları için erişemeyiz ve 
Uncaught ReferenceError: departmant is not defined   hatası verir.
var block scope olmadığı için salart değişkenine erişebiliriz.
*/

console.log("----------- GELELİM LET VE CONST ARASINDAKİ FARKA ------------");

// let -> mutable
// const -> immutable

let kilo = 80
kilo = 70
console.log(kilo);

/* const height = 185
height = 187   // Uncaught TypeError: Assignment to constant variable.
console.log(height);
 */

let z;
console.log(z); // undefined

// const y; // Uncaught SyntaxError: Missing initializer in const declaration
// const tanımlarken içi boş olmamalı !

console.log("---------------------- mutable / immutable ----------------------");

let user = {
    firstName: "cihan",
    lastName: "loyan"
}
user.firstName = "yavuz";    // obje  içindeki değerlere erişip  değiştirebiliriz.
console.log(user);

user = {    // let ile tanımlanan objenin kendisini değiştirebiliriz. (mutable)
    firstName: "canan"
}
console.log(user);


const student = {
    name: "salih"
}
student.name = "berk"  // obje içindeki değerlere erişip değiştirebiliriz.
console.log(student);

/* 
student = {     // const ile tanımlanan objenin kendisi değiştirilemez. (immutable) Uncaught TypeError: Assignment to constant variable.
    name: "mehmet" 
} 
*/

Object.freeze(student) // içeriğe de müdahale edilememesini istiyorsak
student.name = "mehmet"  // hata vermez
console.log(student) // değişmediğini görebiliriz.


// içindeki propertylerin değerleri değişsin fakat yeni bir property tanımlanmasın istiyorsak:
Object.seal(user);
console.log(user);
user.firstName = "mehmet"
console.log(user);
user.age = 15 // hata vermez
console.log(user); // property'nin eklenmediğini görebiliriz.

console.log("------------------------ SON OLARAK -------------------------");

for (var i = 0; i <3; i++) {
    console.log("var ile for:", i);
}

for (let i = 0; i <3; i++) {
    console.log("let ile for:", i);
}
/* for (const i = 0; i <3; i++) {  
    console.log(i);  // consola 0'ı bastıktan sonra neden hata aldığımızı düşünelim :)
} */



console.log("------------------------ EKSTRA -------------------------");

var x = 55
document.querySelector('button').addEventListener('click', () => {
    console.log(x);
    // console'dan x değerini değiştirip yeniden tıkladığımızda değiştirdiğimiz x değerini görüyoruz.
});

// Bunun engellemenin yöntemi: IIFE(Immediately-Invoked Function Expression) Anında Çağırılan Fonksiyon İfadesi
(function(){
    var t = 100
    document.querySelector('button').addEventListener('click', () => {
    console.log(t);
    })
})()

let y = 150
document.querySelector('button').addEventListener('click', () => {
    console.log(y);
    // console'dan x değerini değiştirip yeniden tıkladığımızda değiştirdiğimiz x değerini görüyoruz.
});

// IIFE işlemini let için şu şekilde yaparız:
{
    let z = 200
    document.querySelector('button').addEventListener('click', () => {
        console.log(z);
    });
}
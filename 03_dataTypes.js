console.log(typeof 'JavaScript');
console.log(typeof '12');
console.log(typeof 4);
console.log(typeof 4.6);
console.log(typeof true);
console.log(typeof TRUE);  // undefied
console.log(typeof null);
console.log(typeof undefined);

console.log("-------------------------------------------------");

/* 
    Değişken isimlendirme kuralları:
        Sayı ile başlayamaz.
        $ ve _ dışında özel karakter içeremez.
        camelCase tercih edilir.
*/ 
let _var1 = 'First variable'
let $var_2 = 'Second variable'
let $_var3 = 'Third variable'
let _$var4 = 'Fourth variable'

/* Aynı tipte değişkenleri alt alta şu şekilde yazabiliriz: */
let firstName = "cihan",
    age = 24,
    isMarried = false,
    born,  // değişken oluşturulup değer ataması yapılmadığında undefined olur. 
    identity = undefined, // Bu kullanım tercih edilir. 
    job = null

const GENDER = 'Male'

console.log(firstName, age, isMarried, identity, born, job);

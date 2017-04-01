'use strict';

var imiona = ["Monika", "Krystian", "łukasz"];

imiona[3] = "Tania";
imiona[2] = "Ela";

imiona.push("Geralt");

console.log(imiona);
imiona.pop();

console.log(imiona);

console.log(imiona.unshift("Robert"));

console.log(imiona);

console.log(imiona.shift());
console.log(imiona);

console.log(imiona.length);
imiona.push("Kaja");

for (var i = 0; i < 4 ; i++) {
    
    console.log(imiona[i]);    
}

/*
odwrtny efekt do tego wyzej
*/

for (var i = imiona.length-1; i >=0; i--) {
    
    console.log(imiona[i]);
    
}


/*forEach*/

imiona.forEach(function (element, i){
    console.log("Element nr "+i+"=" + element);
     
 });

/*
join

*/

console.log(imiona.join(" - ") );

/*

sort
*/

imiona.sort(imiona);

console.log(imiona);

/*
reverse
*/

imiona.reverse(imiona);

console.log(imiona);

/*
łączenie tablic
*/


var imionaMeskie = ["Robert", "Mariusz", "Andrzej"];

var zbiorImion = imionaMeskie.concat(imiona);

console.log(zbiorImion);


/*
index Of

*/

console.log(zbiorImion.indexOf("Mariusz"));

/*
isArray
*/

console.log(Array.isArray(zbiorImion));

/*
slice
*/

console.log(zbiorImion.slice (2,5));

/*
splice
*/

zbiorImion.splice(2,3, "Julek", "Krzyś");
console.log(zbiorImion);

/*
to String

*/

console.log(zbiorImion.toString());



















'use strict';


var wiekSandry = 21;

if (wiekSandry > 22)  {
    console.log("wiekszy");
}else {
    console.log('mniejszy" lub "rowny');
}
    
(wiekSandry > 22) ? console.log("wiekszy") : console.log("wiekszy");

/*

operator przypisania
*/

var liczba1  = 13, liczba2 = 5;

var wynik;

wynik = liczba1 % liczba2;
console.log(wynik);

while (liczba2 < liczba1) {
    console.log(liczba1);
    --liczba1;
    
}


if("2" === 2) {
    console.log("prawda");
}else {
    console.log("Nieprawda");
}

var liczba3 = 11, liczba4 = 12;

!( (liczba4 >= liczba3) && (liczba4 == liczba3) ) ?
    console.log('wieksze'): console.error("mniejsze");


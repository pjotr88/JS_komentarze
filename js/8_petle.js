'use strict';

/*

for
*/

for (var i = 10; i > 0; i--) {
    //    console.log(i);
}


/*
pętla while
*/

var it = 0
while (it < 10) {
    //    console.log(it);
    it++;
}


/*

pętla do while
*/

var iter = 20;

do {
//    console.log(iter);
    iter++;
} while (iter < 10)


/*
przerywanie petli
*/


var a = 0;
while (a < 10) {
//    console.log(++a);
    if (a == 5) {
        break;


    }
}








/*

przeskakiwanie do kolejnej iteracji - continue


*/

for (var b=0; b < 10; ++b ) {
    
    if (b == 5) {
        continue;
        
    } else {
        console.log(b);
    }
    
    console.log("--");
    
}


/*

postinkrementacja vs preinkrementacja
*/

for (var i=1 ; i<10; ) {
    
    console.log(++i);
    
}

console.log('----');
for (var i=1; i<10;) {
    console.log(i++);
    
}











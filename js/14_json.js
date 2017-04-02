'use strict';

var jsonOsoby = {
    "osoby": [
        {
            imie: "Krystian", 
            nazwisko: "Dziopa", 
            wzrost: 180, 
            oczy: "niebieskie", 
            zainteresowania: [
            {nazwa: "podroze"}, 
            {nazwa: "gotowanie"},
                ]
    
    
                },
       
        
    {
        imie: "Dominik", 
        nazwisko: "Gomuła",
        wzrost: 175,
        oczy: "brązowe",
        zainteresowania: [
        {nazwa: "języki"},
        {nazwa: "aktorstwo"},
            
        ]
    
    },
        
        {
        imie: "Claudia", 
        nazwisko: "Żelazowska",
        wzrost: 175,
        oczy: "brązowe",
        zainteresowania: [
        {nazwa: "języki"},
        {nazwa: "podroże"},
            
        ]
    }
    ]
}

console.log(jsonOsoby);

jsonOsoby.osoby[2].zainteresowania.forEach(function(element, index) {
console.log(element.nazwa);    
});
















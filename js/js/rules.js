// ispravno kreiranje modula ili funkcija, ostale funkcije nisu globalne, pogledati module1.js
var modul2 = (function () {
    
    var that = this; //window
    
    var fullName = "deni markovic"; //OK, nije vidljivo van enclosurea   
    lastname = "markovic"; //NE BEZ VAR, postavlja ga globalno 
    this.middleName = "mirkovski";  // NE, postavlja ga globalno 
    
    //funkcije nazivati sa camelCase
    //uvijek ih staviti iznad poziva, ovaj oblik može biti ispod ali se ne preporučuje
    function createList() { // otvarati { u istom redu sa definicijom
        var name = "deni"; // camelCase
        lastname = "markovic"; //NE BEZ VAR, ovako je varijabla globalna 
    } // funkcije nemaju ;
       
    // naziv objekta Pascalcase, veliko slovo jedna riječ
    // varijable imaju, ovo je varijabla ;    
    var Modul = function () {
        
    };

    // ovako se vraća cijeli objektm pogledati module1.js
    return {
        // funkcija se može ovako definirati jer je već u return !?
        // bez return javlja grešku        
        createElement: function () {
            var that = this; // cijeli objekt --> modul2
            console.log("mudul2 invoked");
        },
        createTitle: function (title, style) {
            var that = this; // cijeli objekt --> modul2
            console.log("mudul2 invoked");
        }        
    }


})(); // self executing function;

// VAŽNO
// With JavaScript, null is for objects, undefined is for variables, properties, and methods.

//modul2.createElement();

// intelissense ovdje vidi funkcije u return, u module1.js ponekad ne vidi !?!'
//modul2.

//http://www.w3schools.com/js/js_mistakes.asp
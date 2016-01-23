log("BASE", true);
(function ($, deni) {
    
    // this keyword is pointing at the window
    var that = this;

    var privateVar = "You can't access me in the console";

    // constructor, ne starta se kod inicijalizacije nego kad se kreira
    var BaseModul = function () {
        var that = this; // kad se kreira = BaseModul
        log("Base var BaseModul = function () --> constructor");
        this.modul = {};

        this.Ime = 'Deni';
        this.Prezime = 'Markovic';
        this.Naziv = getNaziv; // pozvati sa objBase.Naziv()
        var Adresa = 'New York'; // nije vidljivo    
        Adresa = 'New York'; // nije vidljivo
        init.call(this); 
    };

    deni.BaseModul = BaseModul; // u deni objekt referenciramo glavni objekt, ovdje se definira konstruktor
    BaseModul.prototype.constructor = BaseModul; // ovo neznam što znači, ne vidim promjenu ako se disebla

    function init() {
        var that = this; // call šalje that = BaseModul
        //debugger;
        log("Base function init() call");
    }
  
    function getNaziv() {
        return this.Ime + ' ' + this.Prezime;
    }

    function test1() {
        log("function test");
        this.var1 = "asd";
    }

    this.getModul = function () {
        log("Base function getModul");
        foo();
    };
    
    function foo(){
        log("Base function foo");
    }

    log("Base enclosure root");
}(jQuery, window.deni = window.deni || {})); // tu se definira namespace (kreira se novi objekt ako ne postoji deni objekt)


// globalno da ga vidim u konzoli
log("Base var objBase = new deni.BaseModul();");
var objBase = new deni.BaseModul(); 

$(document).ready(function () {
    log("Ready Base unit");
});

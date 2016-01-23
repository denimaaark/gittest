log("SIFARNIK", true);
(function ($, deni) {
    
    // this keyword is pointing at the window
    var that = this;

    var privateVar = "You can't access me in the console";

    // constructor, ne starta se kod inicijalizacije nego kad se kreira
    var SifarnikModul = function () {
        var that = this; // kad se kreira = SifarnikModul
        log("Sifarnik var SifarnikModul = function --> constructor");
        this.modul = {};

        this.Ime = '';
        this.Prezime = '';
        this.Naziv = getNaziv;

        init.call(this);
    };

    deni.SifarnikModul = SifarnikModul; // u deni objekt referenciramo glavni objekt
    SifarnikModul.prototype.constructor = SifarnikModul;

    function init() {
        var that = this; // call šalje that = SifarnikModul
        log("Sifarnik function init() call");
    }
  
    function getNaziv() {
        return this.Ime + ' ' + this.Prezime;
    }

    log("Sifarnik enclosure root");
}(jQuery, window.deni = window.deni || {})); // tu se definira namespace (kreira se novi objekt ako ne postoji deni objekt)


// globalno da ga vidim u konzoli
log("Sifarnik var objSifarnik = new deni.SifarnikModul()");
var objSifarnik = new deni.SifarnikModul();

$(document).ready(function () {
    log("Ready Sifarnik unit");
});

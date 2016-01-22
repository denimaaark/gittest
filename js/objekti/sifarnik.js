(function ($, konto) {
    
    // this keyword is pointing at the window
    var that = this;

    var privateVar = "You can't access me in the console";

    // constructor, ne starta se kod inicijalizacije nego kad se kreira
    var SifarnikModul = function () {
        var that = this; // kad se kreira = SifarnikModul
        log(">> function Sifarnik (constructor)");
        this.modul = {};

        this.Ime = '';
        this.Prezime = '';
        this.Naziv = getNaziv;

        init.call(this);
    };

    konto.SifarnikModul = SifarnikModul; // u konto objekt referenciramo glavni objekt
    SifarnikModul.prototype.constructor = SifarnikModul;

    function init() {
        var that = this; // call šalje that = SifarnikModul
        log(">> function init call Sifarnik");
    }
  
    function getNaziv() {
        return this.Ime + ' ' + this.Prezime;
    }

    log(">> enclosure root Sifarnik");
}(jQuery, window.konto = window.konto || {})); // tu se definira namespace (kreira se novi objekt ako ne postoji konto objekt)




function log(tekst) {
    //console.log(tekst);
    $(".test").append(tekst).append("<br />");
}

$(document).ready(function () {
    log(">> ready Sifarnik");

    //var obj = new konto.BaseModul();

});
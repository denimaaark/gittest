(function ($, deni) {
    
    // this keyword is pointing at the window
    var that = this;

    var privateVar = "You can't access me in the console";

    // constructor, ne starta se kod inicijalizacije nego kad se kreira
    var SifarnikModul = function () {
        var that = this; // kad se kreira = SifarnikModul
        log(">> Sifarnik function (constructor)");
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
        log(">> Sifarnik function init call");
    }
  
    function getNaziv() {
        return this.Ime + ' ' + this.Prezime;
    }

    log(">> Sifarnik enclosure root");
}(jQuery, window.deni = window.deni || {})); // tu se definira namespace (kreira se novi objekt ako ne postoji deni objekt)




// function log(tekst) {
//     //console.log(tekst);
//     $(".test").append(tekst).append("<br />");
// }

$(document).ready(function () {
    log(">> ready Sifarnik unit");

    var obj = new deni.SifarnikModul();

});
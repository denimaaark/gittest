(function ($, konto) {
    
    // this keyword is pointing at the window
    var that = this;

    var privateVar = "You can't access me in the console";

    // constructor, ne starta se kod inicijalizacije nego kad se kreira
    var BaseModul = function () {
        var that = this; // kad se kreira = BaseModul
        log(">> function Base (constructor)");
        this.modul = {};

        this.Ime = '';
        this.Prezime = '';
        this.Naziv = getNaziv;

        init.call(this);
    };

    konto.BaseModul = BaseModul; // u konto objekt referenciramo glavni objekt
    BaseModul.prototype.constructor = BaseModul;

    function init() {
        var that = this; // call šalje that = BaseModul
        log(">> function init call Base");
    }
  
    function getNaziv() {
        return this.Ime + ' ' + this.Prezime;
    }

    function test1() {
        log(">> function test");
        this.var1 = "asd";
    }

    this.getModul = function () {
        log(">> function getModul Base");
        foo();
    };

    log(">> enclosure root Base");
}(jQuery, window.konto = window.konto || {})); // tu se definira namespace (kreira se novi objekt ako ne postoji konto objekt)




function log(tekst) {
    //console.log(tekst);
    $(".test").append(tekst).append("<br />");
}

$(document).ready(function () {
    log(">> ready Base");

    var obj = new konto.BaseModul();

});
(function ($, deni) {
    
    // this keyword is pointing at the window
    var that = this;

    var privateVar = "You can't access me in the console";

    // constructor, ne starta se kod inicijalizacije nego kad se kreira
    var BaseModul = function () {
        var that = this; // kad se kreira = BaseModul
        log(">> Base function (constructor)");
        this.modul = {};

        this.Ime = '';
        this.Prezime = '';
        this.Naziv = getNaziv;

        init.call(this);
    };

    deni.BaseModul = BaseModul; // u deni objekt referenciramo glavni objekt
    BaseModul.prototype.constructor = BaseModul;

    function init() {
        var that = this; // call šalje that = BaseModul
        log(">> Base function init call");
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

    log(">> Base enclosure root");
}(jQuery, window.deni = window.deni || {})); // tu se definira namespace (kreira se novi objekt ako ne postoji deni objekt)

$(document).ready(function () {
    log(">> ready Base unit");

    var obj = new deni.BaseModul(); 
});
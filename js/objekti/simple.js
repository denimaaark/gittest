log("SIMPLE", true);
(function () {
    log("Simple javascript self invoced");

    // this keyword is pointing at the window
    var that = this;

    var privateVar = "You can't access me in the console";

    // Create an immediately invoked functional expression to wrap our code
    // Define our constructor
    this.Modul2 = function () {
        log("Simple function this.Modul2");
        var Godina = 30;
        this.Ime = 'Deni';
        this.Prezime = 'Markovic';
        this.Naziv = getNaziv;
        this.Naziv2 = getNaziv(); // ovo ne radi sa pozivom --> log( obj2.Naziv() );
    }

    // In order to expose a public method, we attach it to our
    // Modal object’s prototype. When you add methods to the object’s prototype, each new instance shares the same methods, rather than creating new methods for each instance. 
    Modul2.prototype.Otvori = function () {
        log("Simple function Modul2.Open");
    };

    function getNaziv() {
        return this.Ime + ' ' + this.Prezime;
    }

    function test1() {
        log("Simple function test");
        this.var1 = "asd";
    }

    this.getModul = function () {
        log("Simple function getModul");
        foo();
    };
    log("Simple enclosure root");
} ());

// globalno da ga vidim u konzoli
log("Simple new create object");
var obj2 = new Modul2();
log(obj2.Naziv());
obj2.Otvori();

$(document).ready(function () {
    log("Ready Simple unit");
});
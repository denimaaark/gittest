log("SIMPLE", true);
(function () {

    // this keyword is pointing at the window
    var that = this;

    var privateVar = "You can't access me in the console";

    // Create an immediately invoked functional expression to wrap our code
    // Define our constructor
    this.SimpleModul = function () {
        log("Simple this.SimpleModul = function () --> constructor");
        var Godina = 30;
        this.Ime = 'Deni';
        this.Prezime = 'Markovic';
        this.Naziv = getNaziv;
        this.Naziv2 = getNaziv(); // ovo ne radi sa pozivom --> log( obj2.Naziv() );
    }

    // In order to expose a public method, we attach it to our
    // Modal object’s prototype. When you add methods to the object’s prototype, each new instance shares the same methods, rather than creating new methods for each instance. 
    SimpleModul.prototype.Otvori = function () {
        log("Simple obj2.Otvori()");
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
    };
    
    log("Simple enclosure root");
} ());

// globalno da ga vidim u konzoli
log("Simple obj2 = new SimpleModul()");
var obj2 = new SimpleModul();
log("Simple obj2.Naziv() --> " + obj2.Naziv());
obj2.Otvori();

$(document).ready(function () {
    log("Ready Simple unit");
});
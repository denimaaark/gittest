/* global log */
/* global SimpleObject */
log("SIMPLE OBJECT", true);
// Create an immediately invoked functional expression to wrap our code
(function () {
    // TEST ----------------------------------------------------------
    log("Simple enclosure root");
    var that = this; // this keyword is pointing at the window, ne koristiti ovdje
    var privateVar = "You can't access me in the console";

    // OBJEKT, CONSTRUCTOR -------------------------------------------
    // sa this, da se vidi vani window.SimpleObject
    // nazvati sa samo sa jednom riječi, npr. Utils
    this.SimpleObject = function () {
       
        // PRIVATNI PROPERTY -----------------------------------------
        // Create global element references
        // definirati samo glavni property, npr this.osoba, dalje se ostalo definira u protypima
        this.name = "Deni";
        this.lastName = "Markovic";
        var address = "California"; // sa var nije vidljivo van objekta        
        
        // DEFAULTS --------------------------------------------------
        var defaults = {
            autoOpen: false,
            className: 'fade-and-drop',
            closeButton: true,
            content: "",
            maxWidth: 600,
            minWidth: 280,
            overlay: true
        };
        
        // EXTENDANJE PARAMETARA
        // Create options by extending defaults with the passed in arugments
        if (arguments[0] && typeof arguments[0] === "object") {
            this.options = extendDefaults(defaults, arguments[0]);
        } else {
            this.options = defaults;
        }

        // INVOKE, primje ako želimo nešto pokrenuti u konstruktoru sa parametrom
        if (this.options.autoOpen === true) this.getFullNamePrototype();

        // TEST FUNKCIJE, tako se ne radi jer se za svaki objekt kreiraju, kreirati sa prototype
        this.getFullNameFunction = getFullNameFunction; // pointer na funkciju, ne invoka se
        this.getFullNameAnonymus = function () {
            console.log(this.name + ' ' + this.lastName);
        };
        log("SimpleObject --> constructor");

    }; // end of obj

    // POMOĆNE FUNKCIJE OBJEKTA ----------------------------------
    // extendanje ulaznih properija
    function extendDefaults(source, properties) {
        var property;
        for (property in properties) {
            if (properties.hasOwnProperty(property)) {
                source[property] = properties[property];
            }
        }
        return source;
    }

    // init eventa, poziva se kasnije ako treba u nekom prototypu
    function initializeEvents() {
    }
    
    // FUNKCIJE OBJEKTA PROTOTYPE ------------------------------
    // In order to expose a public method, we attach it to our
    // Modal object’s prototype. When you add methods to the object’s prototype, each new instance shares the same methods, rather than creating new methods for each instance. 
    SimpleObject.prototype.getFullNamePrototype = function () {
        var that = this; //ovo koristiti za nešto
        console.log(this.name + ' ' + this.lastName);
    };

    SimpleObject.prototype.getAddress = function () {
        //console.log(this.address); // ovo ne može pozvati jer nije sa .this
        console.log(privateVar);
    };
    
    // PRIVATNE FUNKCIJE  ------------------------------------
    // tu se definiraju bez var, da se mogu kasnije pozivati
    function getFullNameFunction() {
        console.log(this.name + ' ' + this.lastName);
    }

    function getPrivateFunction() {
        return "privateFunction result";
    }
})();

// globalno da ga vidim u konzoli
log("simpleObject = new SimpleObject()");
var simpleObject = new SimpleObject();
//simpleObject.getFullNameAnonymus();

// INTELLISENSE NE RADI ?
//simpleObject.

$(document).ready(function () {
    log("Ready Simple unit");
});

// RIJEŠITI PROBLEM
// kad iz konzole zovem simpleObject.getFullNameXXX, nakon rezultata dobivam undefined
// chrome to javlja ako funkcija ne vraća return, valjda ignorirati prema googleu

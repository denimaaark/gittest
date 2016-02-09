// autocomplete / suggestion / intellisense
// pogledati u module1.js i rules.js, tamo nešto radi


function fnVani(ime, prezime){
     return ime + prezime;
 }
 
fnVani("pero", "peric");

/**
 * Represents a person
 * @constructor
 * @param {string} phone The phone of Person 
 * @param {number} mobile The mobile of Person
 */
function TestObj(phone, mobile){
    //var address = "USA"; // ovo se ne vidi van
    this.name = "john"; // this se vidi nakon kreiranja
    this.lastName = "deer"
    this.phone = phone;
    this.mobile = mobile;
}
TestObj.prototype.getFullName = function(){
    return this.name + ' ' + this.lastName;
}

//var testObj = new TestObj();
var testObj1 = new TestObj("11111", "22222");
testObj1.



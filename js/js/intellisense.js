// autocomplete / suggestion / intellisense
// pogledati u module1.js i rules.js, tamo nešto radi

function fnVani(ime, prezime){
    return ime + prezime;
}

fnVani("pero", "peric");

function TestObj(phone, mobile){
    var address = "USA"; // ovo se ne vidi van
    this.name = "john"; // this se vidi nakon kreiranja
    this.lastName = "deer"
    this.phone = phone;
    this.mobile = mobile;
}

// u debuggeru se vidi u intellisensu
TestObj.prototype.getFullName = function(){
    return this.name + ' ' + this.lastName;
}

var testObj = new TestObj("11111", "22222");

// intellisense ne radi ?
//testObj.

// http://www.permadi.com/tutorial/jsFunc/index2.html

// ----------------------------------------------------------------------------------
// javascript objekt
// prvo veliko slovo i nesmije imati return
function FnGlobal(ime, prezime, adresa) {
    var that = this;
    var telefon = "naziv nešto";
    this.ime = ime;
    this.prezime = prezime;
    this.adresa = adresa;
    this.kuna = 100;
    this.addKuna = addKuna; // zove vanjsku fn
    this.getKuna = function () { //anonymus fn
        return this.kuna;
    };
}
function addKuna(kuna) {
    this.kuna = this.ime + " ima " +  kuna;
}
var obj1 = new FnGlobal("Deni", "Markovic", "USA"); 
obj1.addKuna(200);
log(obj1.getKuna());
// ----------------------------------------------------------------------------------

// poziv prije --> fnglobal() radi
// definira se u run-time
// function expression
// kompajlira se ali se ne izvršava prije poziva
function fnGlobal() {
    var that = this;
    var naziv = "globalna";
    this.ime = "Deni";
    this.prezime = "Markovic";
    return naziv;
}
var fnGlobal1 = fnGlobal();

// ovo javlja greške: 1 funkcija za konstruktor mora početi Velikim slovom
// ako kreiramo objekt sa nju, nesmije imati return value, mora biti void
//var fnGlobal2 = new fnGlobal();

fnGlobal()

// poziv prije --> fnglobal() ne radi
// definira se u parse-time
//function declaration
// bolje za objektno programiranje
var fnVar = function () {
    var that = this;
    var naziv = "globalna";
    this.ime = "Deni";
    this.prezime = "Markovic";
    return naziv;
}
var fnVar1 = fnVar();
// var fnVar2 = new fnVar(); // NOK kao i gore
fnVar();
log(fnVar);

// ----------------------------------------------------------------------------------
// ovo baš ne kužim, ne štimaju mi komentari, primjer sa stranice na vrhu
// da li je bolje staviti funkciju van konstruktora ili ne !?!'
function Employee(name, salary)
{
  this.name=name;                
  this.salary=salary;
  this.addSalary=addSalaryFunction;
  this.getSalary=function()
                 {
                   return this.salary;
                 };
}
function addSalaryFunction(addition)
{
  this.salary=this.salary+addition;
}

var boss1=new Employee("John", 200000);
var boss2=new Employee("Joan", 200000);

// add properties to getSalary function object.
boss1.getSalary.owner="boss1";
boss2.getSalary.owner="boss2";
//alert(boss1.getSalary.owner);   // prints "boss1"
//alert(boss2.getSalary.owner);   // prints "boss2"
// if both objects are pointing to the same function object, then 
// both output above should have printed "boss2". 

// add properties to addSalary function object.
boss1.addSalary.owner="boss1";
boss1.addSalary.owner="boss2";
//alert(boss1.addSalary.owner);   // prints "boss2"
//alert(boss2.addSalary.owner);   // prints "boss2"
// since both objects are not pointing to the same function, 
// then changes in one, affects all instances (so, both prints "boss2").
// ----------------------------------------------------------------------------------
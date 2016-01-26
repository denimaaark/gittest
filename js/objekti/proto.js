// https://timkadlec.com/2008/01/using-prototypes-in-javascript/

log("Proto test", true);

// base
function Pet(name, species){
    this.name = name;
    this.species = species;
}
function view(){
    return this.name + " is a " + this.species + "!";
}
Pet.prototype.view = view;

var pet1 = new Pet('Gabriella', 'Dog');
log(pet1.view());

function Dog(name){
    Pet.call(this, name, "dogggggg");
}

Dog.prototype = new Pet();
Dog.prototype.bark = function(){
    log(" Dog Woof!");
}

var pet2 = new Pet('Trudy', 'Bird');
var dog1 = new Dog('Gabriella');
log(dog1.view()); // Outputs "Gabriella is a Dog!"
dog1.bark(); // Outputs "Woof!"
//pet2.bark(); // Error


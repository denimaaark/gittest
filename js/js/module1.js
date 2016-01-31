log ("CUSTOM MODULE 1", true)
// lynda primjer modula, sve  u jednoj varijabli, self executing function, closure
var module1 = (function(){ 
    // neki defaulti koji se mogu kasnije koristiti ako nisu zadani parametri u objektu
    var DEFAULTS = {
        name:  "Deni",
        lastname: "Markovic",
        song: ""
    }    
    return {
        speek: function(){
            //array šro je poslano u funkciju --> {name: "Mirko", lastname: "Miric"}, alternativa ulaznik parametrima
            var args = arguments[0] || ''; // da ne javlja grešku ako nema argumenata                      
            var fullname = args.name  + " " + args.lastname;
            //var fullname = args.name || DEFAULTS.name + " " + args.lastname || DEFAULTS.lastname;             
            log(fullname);
            return this; // vraća objekt da se može chainati, može i bez toga
        },
        sing: function(){
            var args = arguments[0] || '';            
            log(args.song || DEFAULTS.song); // čitam neki default da ne javlja grešku
            return this
        }        
    }
})();

module1.speek({name: "Mirko", lastname: "Miric"}).sing({song: "Ideme dime la la la"});

// intellisense radi, vidi što je u return !?
// module1.
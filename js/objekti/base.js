//VSCODE MARK AS GLOBAL LIGHTBULB, kod debuga ne javlja da ne postoji
/* global aaaaa */ 
log("BASE", true);
(function ($, aaaaa) {
    
    // this keyword is pointing at the window
    var that = this;

    // private var
    var tip = "You can't access me in the console";

    // constructor, ne starta se kod inicijalizacije nego kad se kreira
    var BaseModul = function () {
        var that = this; // kad se kreira = BaseModul
        log("Base var BaseModul = function () --> constructor");

        // public vars
        this.FirstName = 'Deni';
        this. SurName = 'Markovic';
        this.Name = getName; // pozvati sa objBase.Name()
        this.Address = 'New York'; // nije vidljivo    
        this.MyCars = {};
        
        // private var
        var SecretNumber = '123456789'; // nije vidljivo
                
        init.call(this); 
    };
 
    aaaaa.BaseModul = BaseModul; // u aaaaa objekt referenciramo glavni objekt, ovdje se definira konstruktor
    BaseModul.prototype.constructor = BaseModul; // ovo neznam što znači, ne vidim promjenu ako se disebla

    function init() {
        var that = this; // call šalje that = BaseModul
        //debugger;
        log("Base function init() call");
    }
  
    // zašto ovo radi, ne radim call ???
    function getName() {
        return this.FirstName + ' ' + this.SurName;
    }

    function setName(){
        
    }    

    function getTest() {
        log("function test");
        this.var1 = "asd";
    }

    
    // ovo nije u redu, ovako se ustvari postavlja kao globalni
    // this.getModul = function () {
    //     log("Base function getModul");
    // };    

    log("Base enclosure root");
}(jQuery, window.aaaaa = window.aaaaa || {})); // tu se definira namespace (kreira se novi objekt ako ne postoji aaaaa objekt)


log("Base var objBase = new aaaaa.BaseModul();");
var objBase = new aaaaa.BaseModul();
objBase.Name(); 

$(document).ready(function () {
    log("Ready Base unit");
});

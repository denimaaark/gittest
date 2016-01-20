import $ from 'jquery';

export class MyClass {
  constructor() {
    //$(document.body).css('background-color', 'grey');
    //this.writeMessage('es6 class method');
    
    var mainDiv = $(".main");
    mainDiv.text("radi !!!");
    //$(".main").text("radi !!!");
  }
  writeMessage(msg) {
    $(document.body).html(msg);
  }
}
function log(tekst, separator, element) {
    var el = (element) ? $(element) : $(".test");        
    var sep = "----------------------------------------------------------<br/>";
    var br = "<br/>";
    var arr = ">>> ";
    if (separator) {
        el.append(br + arr + tekst + br);        
        el.append(sep);                
    } else{
        el.append(arr + tekst + br);        
    }        
}

$(document).ready(function () {
    log("Ready", true);
    log("Ready Utils unit");
});
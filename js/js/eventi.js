// event je postavljen na index.html stranici

var pomocData = {
    projekt : "gs", 
    poziv : "gs-poziv", 
    verzija : "1"                    	
}; 

$(document).ready(function () {
    //$(document).trigger("deni.pomoc.changed", pomocData);                   
});

// eventu možemo poslati podatke, objekt
function eventFire(){
    $(document).trigger("deni.pomoc.changed", pomocData);    
}

function eventOff(){
    $(document).off("deni.pomoc.changed");    
}

function test (){
    
}
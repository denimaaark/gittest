var pomocData = {
    projekt : "gs", 
    poziv : "gs-poziv", 
    verzija : "1"                    	
}; 
$(document).ready(function () {
    //$(document).trigger("konto.pomoc.changed", pomocData);                   
});

function eventFire(){
    $(document).trigger("konto.pomoc.changed", pomocData);    
}

function eventOff(){
    $(document).off("konto.pomoc.changed");    
}

function test (){
    
}
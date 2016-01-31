// event je postavljen na index.html stranici

var pomocData = {
    projekt: "ponude",
    poziv: "poziv 123",
    verzija: "1"
};

$(document).ready(function () {
    //$(document).trigger("deni.pomoc.changed", pomocData);                   
});

// eventu možemo poslati podatke, objekt
function eventFire() {
    $(document).trigger("deni.nesto.changed", pomocData);
}

function eventOff() {
    $(document).off("deni.nesto.changed");
}

function test() {

}

// ovo može biti u bilo kojem unitu ili html stranici, npr. index.html
// jquery verzija
$(document).on("deni.nesto.changed", function (event, pomocData) {
    $("#ed1").val(pomocData.poziv);
});
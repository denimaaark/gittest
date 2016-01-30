log("JAVASCRIPT TEST", true, "#jsDiv");

var jsDiv = document.getElementById("jsDiv");

var jsTekst = document.createElement("p");
jsTekst.innerHTML = "Javascript tekst p";
jsDiv.appendChild(jsTekst);

var jsNaslov = document.createElement("h5");
jsNaslov.innerHTML = "Javascript naslov h5"
jsDiv.insertBefore(jsNaslov, jsTekst);

var jsLink = document.createElement("a");
jsLink.setAttribute("href", "http://google.hr");
jsLink.setAttribute("target", "_blank");
jsLink.innerText = "Javascript link a",
jsDiv.appendChild(jsLink);

var jsTekst2 = document.createElement("p");
jsTekst2.innerText = "Ja sam p od prvog teksta p-> " + jsTekst.innerHTML;
jsDiv.appendChild(jsTekst2);

var jsList = document.createElement("ul");
var jsAuti = ["Ferrari", "Audi", "Mercedes"];
for (var i = 0; i < jsAuti.length; i++) {
    var jsLi = document.createElement("li");
    jsLi.innerText = jsAuti[i];
    jsList.appendChild(jsLi);
}
jsDiv.appendChild(jsList);

// JAVASCRIPT EVENTI ----------------------------------------------------------------

var jsBtn1 = document.createElement("button");
jsBtn1.innerText = "onclick fn";
jsBtn1.onclick = function () {
    alert("btn1");
};
jsDiv.appendChild(jsBtn1);

var jsBtn2 = document.createElement("button");
jsBtn2.innerText = "onclick fn reference";
var jsBtnFunction = function () {
    alert("btn2");
}
jsBtn2.onclick = jsBtnFunction;
document.getElementById("jsDiv").appendChild(jsBtn2);

var eventFunction = function () {
    alert("event function");
}

// IE9>= verzije 8 itd ne rade
document.addEventListener("deni.event", eventFunction, false);

// jQuery automatski detektira browsere i automatski poziva podržane metode
// IE8 stara metoda ne korsititi
//document.attachEvent("onclick", eventFunction);

// javascript document ready
window.onload = function () {
    // unutra kod
}

// INTERVAL, TIMEOUT
function oneTime() {
    // ovo sve radi ali komentiram da se ne izvršava
    // izvršava samo jednom
    setTimeout(function () {
        alert("interval jednom 2sek");
    }, 2000);
}
var intervalTest = document.createElement("p");
intervalTest.innerText = "Klikni me za slajder";
intervalTest.onclick = loopStart;
jsDiv.appendChild(intervalTest);
var intervalSlider = ["slika xxxxxxx 1", "slika yyyyyyy 2", "slika zzzzzzzzz 3", " klikni me još jednom za stop"];
var intervalHandler;
function loopStart() {
    intervalTest.onclick = loopStop;
    //izvršava svakih 2 sek
    //super za image slidere, npr promijeniti img src iz nekog arraya
    var sliderIndex = 0;    
    intervalHandler = setInterval(function () {
        intervalTest.innerText = intervalSlider[sliderIndex];
        sliderIndex++;
        if (sliderIndex === intervalSlider.length){
            // ako želimo da se stalno vrti
            sliderIndex = 0;   
        }
    }, 2000);
}
function loopStop() {
    clearInterval(intervalHandler);
}




function f1(){
    alert(" function 1.... ");
}
function f2(){
    alert(" function 2.... ");
}
function f3(){
    alert(" function 3.... ");
}

var ip = document.getElementById("ip");
var ts = document.getElementById("text-search");
var ts2 = document.getElementById("text-search2");

function key1(){
    alert("Funtion key 1....");
}
function key2() {
    var v = ip.value;
    ts.innerText = v;
}

function key3() {
    var v = ip.value;
    ts2.innerText = v;
}

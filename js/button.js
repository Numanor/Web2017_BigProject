
var _history_cal = new Array();
var _history_cal_p = 0;

function sin() {
    document.getElementById("expression").value += "sin()";
}
function cos() {
    document.getElementById("expression").value += "cos()";
}
function tan() {
    document.getElementById("expression").value += "tan()";
}
function lg() {
    document.getElementById("expression").value += "lg()";
}
function ln() {
    document.getElementById("expression").value += "ln()";
}
function fac() {
    document.getElementById("expression").value += "()!";
}
function pow() {
    document.getElementById("expression").value += "()^()";
}
function pai() {
    document.getElementById("expression").value += "π";
}
function e() {
    document.getElementById("expression").value += "e";
}
function cle() {
    document.getElementById("expression").value = "";
}
function del() {
    var str = document.getElementById("expression").value;
    str = str.substr(0, str.length - 1);
    document.getElementById("expression").value = str;
}
function plu() {
    document.getElementById("expression").value += "+";
}
function miu() {
    document.getElementById("expression").value += "-";
}
function mul() {
    document.getElementById("expression").value += "*";
}
function div() {
    document.getElementById("expression").value += "/";
}
function one() {
    document.getElementById("expression").value += "1";
}
function two() {
    document.getElementById("expression").value += "2";
}
function thr() {
    document.getElementById("expression").value += "3";
}
function fou() {
    document.getElementById("expression").value += "4";
}
function fiv() {
    document.getElementById("expression").value += "5";
}
function six() {
    document.getElementById("expression").value += "6";
}
function sev() {
    document.getElementById("expression").value += "7";
}
function eig() {
    document.getElementById("expression").value += "8";
}
function nin() {
    document.getElementById("expression").value += "9";
}
function zer() {
    document.getElementById("expression").value += "0";
}
function dot() {
    document.getElementById("expression").value += ".";
}
function rig() {
    document.getElementById("expression").value += "(";
}
function lef() {
    document.getElementById("expression").value += ")";
}
function ans() {
    document.getElementById("expression").value += eval(_history_cal[_history_cal.length - 1]).toString();
}
function up () {
    if(_history_cal_p == 0)
        return ;
    _history_cal_p--;
    document.getElementById("expression").value = _history_cal[_history_cal_p];
}

function dwn() {
    if(_history_cal_p == _history_cal.length - 1)
        return ;
    _history_cal_p++;
    document.getElementById("expression").value = _history_cal[_history_cal_p];
}
function equ() {
    var str = document.getElementById("expression").value;
    _history_cal_p = _history_cal.push(str) - 1;
    str = Process(str);
    var res = eval(str);
//    var index = 0;
//    while(res >= 10) {
//        res = res/10;
//        index++;
//    }
//    while(res < 1) {
//        res = res * 10;
//        index--;
//    }
    document.getElementById("result").innerHTML = res;
}
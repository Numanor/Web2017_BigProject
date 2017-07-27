if(localStorage.getItem('his') == null)
    localStorage.setItem('his', "");
if(localStorage.getItem("his_p") == null)
    localStorage.setItem('his_p', '-1');


//var _history_cal = new Array();
//var _history_cal_p = 0;

var _history_cal = localStorage.getItem('his').split(",");
var _history_cal_p = parseInt(localStorage.getItem('his_p'));

function getTxt1CursorPosition(){
    var oTxt1 = document.getElementById("expression");
    var cursurPosition = -1;
    if(oTxt1.selectionStart) {//非IE浏览器
        cursurPosition = oTxt1.selectionStart;
    }
    else {//IE
        var range = document.selection.createRange();
        range.moveStart("character",-oTxt1.value.length);
        cursurPosition = range.text.length;
    }
    return cursurPosition;
}

function add(value) {
    if(document.getElementById("expression").value.length == 0)
    {
        document.getElementById("expression").value = value;
        return ;
    }
    var loc = getTxt1CursorPosition();
    var left = document.getElementById("expression").value.substr(0, loc);
    var right = document.getElementById("expression").value.substr(loc);
    document.getElementById("expression").value = left + value + right;
}

function c_l() {
    
}

function c_r() {
    
}

function cle() {
    document.getElementById("expression").value = "";
}
function del() {
    var loc = getTxt1CursorPosition();
    var left = document.getElementById("expression").value.substr(0, loc - 1);
    var right = document.getElementById("expression").value.substr(loc);
    document.getElementById("expression").value = left + right;
}

function ans() {
    document.getElementById("expression").value += eval(_history_cal[_history_cal.length - 1]).toString();
}
function up () {
    if(_history_cal_p == 0)
        return ;
    _history_cal_p--;
    localStorage.setItem('his_p', _history_cal_p.toString());
    document.getElementById("expression").value = _history_cal[_history_cal_p];
}

function dwn() {
    if(_history_cal_p == _history_cal.length - 1)
        return ;
    _history_cal_p++;
    localStorage.setItem('his_p', _history_cal_p.toString());
    document.getElementById("expression").value = _history_cal[_history_cal_p];
}
function equ() {
    var str = document.getElementById("expression").value;
    _history_cal_p = _history_cal.push(str) - 1;
    localStorage.setItem('his_p', _history_cal_p.toString());
    var tmp = "";
    for(var i = 0; i < _history_cal.length - 1; i++)
        tmp += _history_cal[i] + ",";
    tmp += _history_cal[_history_cal.length - 1];
    localStorage.setItem('his', tmp);
    str = Process(str);
    var res = eval(str);
    document.getElementById("result").innerHTML = res;
}

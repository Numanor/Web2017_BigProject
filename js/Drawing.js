/*******************************************************************************
*   Using Drawing() with two arguments: id-canvas's id, str-analytic function. *                                  
*  And the canvas width and height had better is 1000px and 500px, the constant*                                                                 *  in the analytic function had better is multiple of ten, because ten is the  *
*  unit of coordinate.                                                         *
*******************************************************************************/




function Axis(id) {
    var w = document.getElementById(id).width;
    var h = document.getElementById(id).height;
    var x = new Array;
    var y = new Array;
    for(var i = 0; i < 100; i++) {
        x[i] = (w/100) * i;
    }
    var obj = document.getElementById(id);
    var cxt = obj.getContext("2d");
    cxt.moveTo(0,h/2);
    cxt.lineTo(w,h/2);
    cxt.moveTo(w/2,0);
    cxt.lineTo(w/2,h);
    cxt.stroke();
    for(var i = 0; i < 100; i++) {
        var obj = document.getElementById(id);
        var cxt = obj.getContext("2d");
        cxt.moveTo(x[i],h/2);
        cxt.lineTo(x[i],(h/2) - (h/100));
        cxt.moveTo(w/2, x[i]);
        cxt.lineTo((w/2)+(h/100), x[i]);
        cxt.stroke();   
    }
}

function Drawing(id, str) {
    str = Process(str);
    var w = document.getElementById(id).width;
    var h = document.getElementById(id).height;
    var right = "";
    for(var i = 0; i < str.length; i++) {
        if(str[i] == "=")
            right = str.substr(i + 1);
    }
    var x = new Array;
    var y = new Array;
    for(var i = 0; i < 10000; i++) {
        x[i] = (w/10000) * i - (w/2);
        var tmp = right.replace("x", (x[i]).toString());
        y[i] = (eval(tmp));//modify
    }

    Axis(id);

    var obj = document.getElementById(id);
    var cxt = obj.getContext("2d");
    for(var i = 1; i < 10000; i++) {
        cxt.moveTo(x[i-1] + w/2,h/2 - y[i-1]);
        cxt.lineTo(x[i] + w/2,h/2 - y[i]);
    }
    cxt.stroke();
}

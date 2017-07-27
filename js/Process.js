/***************************************
*    call the function--"Process()"    * 
*  can turn the certain grid's content *
*  into a string which can make machine*
*  understand and compute.             *
***************************************/

//var content = document.getElementById("grid").innerHTML;    //modify the "grid" to change what we want to transform
//var str = content;

function triProcessSelect(value, str) {
    var right = str;
    var left = "";
    while(right.indexOf(value) >= 0) {
        var loc = right.indexOf(value);
        var len = right.length;
        if(loc == 0) {
            left += "Math." + value;
            right = right.substr(loc + 3);
            continue;
        }
        left += right.substr(0, loc) + "Math." + value;
        right = right.substr(loc + 3);
    }
    str = left + right;
    return str;
}

function  triProcess(str) { //trigonometric function
    str = triProcessSelect("sin", str);
    str = triProcessSelect("cos", str);
    str = triProcessSelect("tan", str);
    return str;
}

function powProcess(str) {
    var right = "";
    var left = "";
    var tmp = str;
    while(tmp.indexOf("^") > 0) {
        var righttmp = 0;     
        var rightrec = 0;     
        var rightloc = 0;
        var lefttmp = 0;
        var leftrec = 0;
        var leftloc = 0;

        var loc = tmp.indexOf("^");
        for(var i = loc + 1; i < tmp.length; i++) {
            if(tmp[i] == "(")
                righttmp++;
            if(tmp[i] == ")")
                rightrec++;
            if(righttmp == rightrec) {
                rightloc = i;
                break;
            }
        }
        for(var i = loc - 1; i >= 0; i--) {
            if(tmp[i] == "(")
                lefttmp++;
            if(tmp[i] == ")")
                leftrec++;
            if(lefttmp == leftrec) {
                leftloc = i;
                break;
            }
        }

        tmp = tmp.substr(0, leftloc)
            + "Math.pow(" 
            + tmp.substr(leftloc, loc - leftloc) 
            + "," 
            + tmp.substr(loc + 1, rightloc - loc) 
            + ")" 
            + tmp.substr(rightloc + 1);

    }
    str = tmp;
    return str;
}

function lnProcess(str) {
    var right = str;
    var left = "";
    while(right.indexOf("ln") >= 0) {
        var loc = right.indexOf("ln");
        var len = right.length;

        left += right.substr(0, loc) + "Math.log";
        right = right.substr(loc + 2);
    }
    str = left + right;
    return str;
}

function lgProcess(str) {
    var tmp = str;
    while(tmp.indexOf("lg") >= 0) {
        var righttmp = 0;     
        var rightrec = 0;     
        var rightloc = 0;
        var loc = tmp.indexOf("lg");

        for(var i = loc + 2; i < tmp.length; i++) {
            if(tmp[i] == "(")
                righttmp++;
            if(tmp[i] == ")")
                rightrec++;
            if(righttmp == rightrec) {
                rightloc = i;
                break;
            }
        }

        tmp = tmp.substr(0, loc)
            + "Math.log"
            + tmp.substr(loc + 2, rightloc - loc - 1)
            + "/Math.log(10)"
            + tmp.substr(rightloc + 1);

    }
    str = tmp;
    return str;
}

function factorial(n) {
    if(parseInt(n) != n)
        return ;
    if(n == 0)
        return 1;
    else
        return n * factorial(n-1);
}

function facProcess(str) { //factorial
    var tmp = str;
    while(tmp.indexOf("!") > 0) {
        var loc = tmp.indexOf("!");
        var lefttmp = 0;
        var leftrec = 0;
        var leftloc = 0;
        for(var i = loc - 1; i >= 0; i--) {
            if(tmp[i] == "(")
                lefttmp++;
            if(tmp[i] == ")")
                leftrec++;
            if(lefttmp == leftrec) {
                leftloc = i;
                break;
            }
        }
        tmp = tmp.substr(0, leftloc)
            + String(factorial(eval(tmp.substr(leftloc + 1, loc - leftloc - 2))))
            + tmp.substr(loc + 1);
    }
    str = tmp;
    return str;
}

function charProcess(value, str) {
    var right = str;
    var left = "";
    var index = "";
    if(value == "e")
        index = "E";
    else
        index = "PI"
    while(right.indexOf(value) >= 0) {
        var loc = right.indexOf(value);
        var len = right.length;
        if(loc == 0) {
            left += "Math." + index;
            right = right.substr(1);
            continue;
        }
        left += right.substr(0, loc) + "Math." + index;
        right = right.substr(loc + 1);
    }
    str = left + right;
    return str;
}

function Process(str) {
    str = triProcess(str);
    str = powProcess(str);
    str = lnProcess(str);
    str = lgProcess(str);
    str = facProcess(str);
    str = charProcess("π", str);
    str = charProcess("e", str);
    
    return str;
}
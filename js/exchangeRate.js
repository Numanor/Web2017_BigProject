/**************************************************************************
*   Use getValue() with two string arguments. The first one is represent  *
*the source of currency and the second one represent the target currency. *
*That mean that a unit of souce currency can exchange how many target     *
*currency.                                                                *
**************************************************************************/

function getValue(scur, tcur, left){
    var res = 0;
    $.ajax({
        type          : 'get',
        async         : false,
        url           : 
         'http://api.k780.com/?app=finance.rate&scur=' + scur + '&tcur=' + tcur + '&appkey=10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4&format=json&jsoncallback=data',
        dataType      : 'jsonp',
        jsonp         : 'callback',
        jsonpCallback : 'data',
        success       : function(data){
            res = Number(data.result.rate);
            alert(res);
            //alert(left + "  " + scur + "  =  " + left * rate + "  " + tcur);
        },
        error:function(){
            alert('fail');
        }
    });
}


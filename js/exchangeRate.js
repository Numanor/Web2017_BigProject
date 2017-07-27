/**************************************************************************
*   Use getValue() with two string arguments. The first one is represent  *
*the source of currency and the second one represent the target currency. *
*That mean that a unit of souce currency can exchange how many target     *
*currency.                                                                *
**************************************************************************/


function getValue(scur, tcur){
     $.ajax({
        type          : 'get',
        async         : false,
        url           : 
         'http://api.k780.com/?app=finance.rate&scur=' + scur + '&tcur=' + tcur + '&appkey=27095&sign=1c57140e0be0de23e95e22ed7a62746e&format=json&jsoncallback=data',
        dataType      : 'jsonp',
        jsonp         : 'callback',
        jsonpCallback : 'data',
        success       : function(data){
            if(data.success!='1'){
                alert(data.msgid+' '+data.msg);
                exit;
            }
            //遍历
            var description = "";
            for(var i in data.result){
                var property=data.result[i];
                description+=i+" = "+property+"\n";
            }
            alert(parseFloat(data.result.rate));
        },
        error:function(){
            alert('fail');
        }
    });
    return parseFloat(data.result.rate);
};

var num = getValue("THB", "CNY");

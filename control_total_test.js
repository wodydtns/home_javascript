var yaer = prompt("Now year>","0000");
var mon = prompt("Now month","0");
var last_day;

switch(mon){
    case "1" : last_day =31;
    break;
    case "2" : last_day = 208;
if(year % 4 ==0 && year % 100 !=0 || year % 400 ==0){
    last_day = 29;
}
    break;
    case "3" : last_day = 31;
    break;
    case "4" : last_day = 30;
    break;
    case "5" : last_day = 31;
    break;
    case "6" : last_day = 30;
    break;
    case "7" : last_day = 31;
    break;
    case "8" : last_day = 31;
    break;
    case "9" : last_day = 30;
    break;
    case "10" : last_day = 31;
    break;
    case "11" : last_day = 30;
    break;
    case "12" : last_day = 31;
    break;

}

for(var i=1 ; i<=last_day; i++){
    document.write(i+ " ");
}
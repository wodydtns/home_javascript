var num =2.1234;

var maxNum=Math.max(10,5,8,30);
var minNum=Math.min(10,5,8,30);
var roundNum=Math.round(num);
var floorNum = Math.floor(num);
var ceilNum = Math.ceil(num);
var rndNum = Math.random(); // 0~1 사이의 난수 생성, 
var rndNum2 = Math.random()*(31); // 0~30 사이의 난수 생성 -> Math.random()*(최대값-최소값+1)+최소값;<원하는 구간의 정수값 구하기>
var rndNum3 = Math.random()*(31)+120; // 120~ 150까지 난수 생성
var piNum = Math.PI; // 원주율 상수 반환

document.write(maxNum,"<br />");
document.write(minNum,"<br />");
document.write(roundNum,"<br />");
document.write(floorNum,"<br />");
document.write(ceilNum,"<br />");
document.write(rndNum,"<br />");
document.write(rndNum2,"<br />");
document.write(rndNum3,"<br />");
document.write(piNum,"<br />");


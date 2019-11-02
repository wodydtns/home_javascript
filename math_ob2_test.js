document.write("<h1> 컴터 가위 바위 보 맞추기</h1>");

var t = prompt("Scissors, Rock, bo?", "Scissors");

var tNum;
switch(t){
    case "Scissors": tNum=1;
    break;
    case "Rock": tNum=2;
    break;
    case "bo": tNum=3;
    break;
    default : alert("Wrong Answer"); // 가위,바위, 보 이외의 다른 값 입력 시
    location.reload();
}

var com = Math.ceil(Math.random()*(3));

if(tNum==com){
    alert("Correct")
} else {
    alert("Second Chance")
}


function change(){
    id = setInterval(srcChange, 100);
}

var i = 0;

function srcChange(){
    var arrImg = ["banner1.jpg","banner2.jpg"];
    
    i++;
    if(i > 1){
        i = 0;
    }
    document.getElementById("banner").src = "./img/" + arrImg[i];
}

function change2(){
    id = setInterval(srcChange2, 100);
}


function srcChange2(){
    var arrImg = ["flow1.gif","flow2.gif","flow3.gif"];
    
    i++;
    if(i > 2){
        i = 0;
    }
    document.getElementById("flow").src = "./img/" + arrImg[i];
}
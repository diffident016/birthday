
var Class = document.getElementById("class");
var step = 1;

function rotate(){

    Class.className = "class step-" + step;
    setTimeout(rotate, 200);
    step++;
    if(step > 2){
        step = 1;
    }
}

rotate();
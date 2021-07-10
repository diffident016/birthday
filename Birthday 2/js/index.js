function getMousePos(canvas, event){
    var rect = canvas.getBoundingClientRect();

    return{
        x:event.clientX - rect.left,
        y:event.clientY - rect.top
    };

}

function isInside(pos, rect){

    return pos.x > rect.x && pos.x < rect.x + rect.width && pos.y < rect.y + rect.height && pos.y > rect.y
        
}

var rect = {};
var score = 0;
var r,g,b,x,y;

var Score = document.getElementById('Score');
var Level = document.getElementById('Level');
var Play = document.getElementById('Play');
var Guide = document.getElementById('Guide');
var pane = document.getElementById('gamePane');
var Chest = document.getElementById('Chest');
var missed = false, timerMissed = false,  Start = false;
var level = 0, speed = 0;
var timeOut;
var timeOut1;

function missedBox(){
    timerMissed = true;
    missed = true;
    clearTimeout(timeOut);
    pane.style.background = `rgb(190,10,10)`;
    timeOut1 = setTimeout(start, 100);
}


function start(){

        var canvas = document.getElementById('canvas');
        var context = canvas.getContext('2d')

        wid = (window.innerWidth-20)/2,
        hid = window.innerHeight-20;

        canvas.width = wid;
        canvas.height = hid;

        const speedPerL = [4200,4000,3200,3000,2200,2000,1200,950,800];

        speed = speedPerL[level];       

        if(!missed){
            x = Math.random() * ((wid-20) - 20) + 20;
            y = Math.random() * ((hid-20) - 20) + 20;
        }

        missed = false;

        if(score < 1 && Start){
            alert('Game Over!');
            score = 1;
            level = 0;
            Score.innerHTML = score;
            Level.innerHTML = level+1;
            Start = false;
        }

        if(score > 9){
            alert('Level Up!');
            level++;
            
            if(level > 8){
                alert('Happy Birthday Charisse Mae!');
                clearTimeout(timeOut);
                Start = false;
                congrats();
            }

            if(level > 4){
                score = 2;
            }
            else{
                score = 1;
            }
        }

        if(timerMissed){
            if(score != 0)
            score--;
            score.innerHTML = score;
        }
       
        Score.innerHTML = score;
        Level.innerHTML = level+1;

        rect = {
            x:x,y:y,width:20, height: 20
        };
        
        pane.style.background = `rgb(${r},${g},${b})`;
        
        r = Math.random() * 255;
        g = Math.random() * 255;
        b = Math.random() * 255;  
        
        context.fillStyle = `rgb(${r},${g},${b})`;
        context.fillRect(x,y,20,20);

        context.beginPath();
        context.lineWidth = '2';
        context.rect(0,0, wid,hid);
        context.stroke();

        if(Start)timeOut = setTimeout(missedBox, speed);
    }

Play.addEventListener('click',function(){
    alert('Ready?');
    Start = true;
}, false);

Guide.addEventListener('click', 
function (){
    alert("This game is simple, just click the small box precisely and quickly to gain 1 point.\nEvery miss and miss-click will correspond a 1 point deduction to your score, when your score reached 0 it's Game Over.\nThis game has 9 levels and you will level up when your score reached 9 points, every levels has different speeds. Complete level 9 to win the game. \n\nEnjoy!");
}, false);
    

canvas.addEventListener('click', function(evt){
    var mousePos = getMousePos(canvas, evt);

    if(Start){
        if(isInside(mousePos,rect)){
            canvas.removeEventListener('click', evt, false);
            score++;
            Score.innerHTML = score;
            pane.style.background = `rgb(${r},${g},${b})`;
            timerMissed = false;
            clearTimeout(timeOut);
            start();
        }else{
            pane.style.background = `rgb(190,10,10)`;
            if(score != 0)
            score--;
            Score.innerHTML = score;
            missed = true;
            timerMissed = false;
            clearTimeout(timeOut);
            setTimeout(start, 100);
        }
    }
}, false);

var num9 = [[6,6,6,6,6,6,6,6,6,6,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,15,15,15,15,15,15,15,15,15,15,16,17,18,19,20,21,22,23,
             24,24,24,24,24,24,24,24,24,24,24,24,24,24],
            [10,11,12,13,14,15,16,17,18,19,20,21,10,21,10,21,10,21,10,21,10,21,10,21,10,21,10,21,10,11,12,13,14,15,16,17,18,19,20,21,21,21,21,21,21,21,21,21,
             10,11,12,13,14,15,16,17,18,19,20,21]];

var openSound;

function congrats(){

    openSound = new Audio("sound/Chest.mp3");

    Chest.style.opacity = 1;

    Chest.addEventListener('click', 
        function (){
            Chest.className = "Chest open";
            openSound.play();
            setTimeout(function(){
                Chest.className = "Chest openP";
                openSound.pause();
                setTimeout(function(){
                    location.href = "Reveal/index.html";
                },1000);

        },1000);
    }, false);

    var index = 0,
    l = 20,
    w = 20,
    x = 0,
    y = 0,
    i = 0;

    var row = 0, col = 0;

    var canvas1 = document.getElementById('canvas');
    var ctx = canvas.getContext('2d')
    wid = (window.innerWidth-20)/2,
    hid = window.innerHeight-20;

    canvas1.width = wid;
    canvas1.height = hid;

        
    var r = Math.random() * 255;
    var g = Math.random() * 255;
    var b = Math.random() * 255;

    do{

    var color = new Array(60);

    for(var a = 0; a < 60; a++){
        color[a] = new Array(3);
    }

    for(var a = 0; a < 60; a++){
        for(var b = 0; b < 3; b++){
            color[a][b] = Math.random() * 255;
        }
        
    }
        if(x >= wid){
            y += l;
            x = 0;
            row++;
            col = 1;
        }

        if(row == num9[0][i] && col == num9[1][i]+2){
            ctx.fillStyle = `rgb(${color[i][0]},${color[i][1]},${color[i][2]})`;
            i++;
        }
        else{
            ctx.fillStyle = `rgb(${r},${g},${b})`;
        }

        ctx.fillRect(x,y,w,l);

        ctx.beginPath();
        ctx.lineWidth = '2';
        ctx.rect(0,0, wid,hid);
        ctx.stroke();
        
        if(y <= hid){
            x += w;
            col++;
        }
        index++;
    }while(index <= (((wid/20) * (hid/20)))+29);
        
    setTimeout(congrats,200);
       
}

start();

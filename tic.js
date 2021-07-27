var flag = 1;
var selected = [0,0,0,0,0,0,0,0,0];
var s1 = 0, s2 = 0, t1 = 0, t2 = 0;

var x_score = document.getElementById("x_score"),
    y_score = document.getElementById("y_score");

function myfunc() {
  
    // Setting DOM to all boxes or input field
    var b1, b1, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6 = document.getElementById("b6").value;
    b7 = document.getElementById("b7").value;
    b8 = document.getElementById("b8").value;
    b9 = document.getElementById("b9").value;
  
    // Checking if Player X won or not and after 
    // that disabled all the other fields
    if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' ||
        b2 == 'X') && (b3 == 'x' || b3 == 'X')) {
        document.getElementById('print')
            .innerHTML = "You won";
        window.alert('You won');
        s1++;
        x_score.innerHTML = ": " + s1;
        y_score.innerHTML = ": " + s2;
        process();
    }
    else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' ||
        b4 == 'X') && (b7 == 'x' || b7 == 'X')) {
        document.getElementById('print')
            .innerHTML = "You won";
        window.alert('You won');
        s1++;
        x_score.innerHTML = ": " + s1;
        y_score.innerHTML = ": " + s2;
        process();
    }
    else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' || 
        b8 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "You won";
        window.alert('You won');
        s1++;
        x_score.innerHTML = ": " + s1;
        y_score.innerHTML = ": " + s2;
        process();
    }
    else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' || 
        b6 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "You won";
        window.alert('You won');
        s1++;
        x_score.innerHTML = ": " + s1;
        y_score.innerHTML = ": " + s2;
        process();
    }
    else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' || 
        b5 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "You won";
        window.alert('You won');
        s1++;
        x_score.innerHTML = ": " + s1;
        y_score.innerHTML = ": " + s2;
        process();
    }
    else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' || 
        b5 == 'X') && (b7 == 'x' || b7 == 'X')) {
        document.getElementById('print')
            .innerHTML = "You won";
        window.alert('You won');
        s1++;
        x_score.innerHTML = ": " + s1;
        y_score.innerHTML = ": " + s2;
        process();
    }
    else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' || 
        b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
        document.getElementById('print')
            .innerHTML = "You won";
        window.alert('You won');
        s1++;
        x_score.innerHTML = ": " + s1;
        y_score.innerHTML = ": " + s2;
        process();
    }
    else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' || 
        b5 == 'X') && (b6 == 'x' || b6 == 'X')) {
        document.getElementById('print')
            .innerHTML = "You won";
        window.alert('You won');
        s1++;
        x_score.innerHTML = ": " + s1;
        y_score.innerHTML = ": " + s2;
        process();
    }
  
    // Checking of Player X finsh
    // Checking for BOT starts, Is BOT won or
    // not and after that disabled all the other fields
    else if ((b1== 'BOT' || b1== 'BOT') && (b2== 'BOT' || 
        b2== 'BOT') && (b3== 'BOT' || b3== 'BOT')) {
        document.getElementById('print')
            .innerHTML = "BOT won";
        window.alert('BOT won');
        s2++;
        x_score.innerHTML = ": " + s1;
        y_score.innerHTML = ": " + s2;
        process();
    }
    else if ((b1== 'BOT' || b1== 'BOT') && (b4== 'BOT' || 
        b4== 'BOT') && (b7== 'BOT' || b7== 'BOT')) {
        document.getElementById('print')
            .innerHTML = "BOT won";
        window.alert('BOT won');
        s2++;
        x_score.innerHTML = ": " + s1;
        y_score.innerHTML = ": " + s2;
        process();
    }
    else if ((b7== 'BOT' || b7== 'BOT') && (b8== 'BOT' || 
        b8== 'BOT') && (b9== 'BOT' || b9== 'BOT')) {
        document.getElementById('print')
            .innerHTML = "BOT won";
        window.alert('BOT won');
        s2++;
        x_score.innerHTML = ": " + s1;
        y_score.innerHTML = ": " + s2;
        process();
    }
    else if ((b3== 'BOT' || b3== 'BOT') && (b6== 'BOT' || 
        b6== 'BOT') && (b9== 'BOT' || b9== 'BOT')) {
        document.getElementById('print')
            .innerHTML = "BOT won";
        window.alert('BOT won');
        s2++;
        x_score.innerHTML = ": " + s1;
        y_score.innerHTML = ": " + s2;
        process();
    }
    else if ((b1== 'BOT' || b1== 'BOT') && (b5== 'BOT' || 
        b5== 'BOT') && (b9== 'BOT' || b9== 'BOT')) {
        document.getElementById('print')
            .innerHTML = "BOT won";
        window.alert('BOT won');
        s2++;
        x_score.innerHTML = ": " + s1;
        y_score.innerHTML = ": " + s2;
        process();
    }
    else if ((b3== 'BOT' || b3== 'BOT') && (b5== 'BOT' || 
        b5== 'BOT') && (b7== 'BOT' || b7== 'BOT')) {
        document.getElementById('print')
            .innerHTML = "BOT won";
        window.alert('BOT won');
        s2++;
        x_score.innerHTML = ": " + s1;
        y_score.innerHTML = ": " + s2;
        process();
    }
    else if ((b2== 'BOT' || b2== 'BOT') && (b5== 'BOT' || 
        b5== 'BOT') && (b8== 'BOT' || b8== 'BOT')) {
        document.getElementById('print')
            .innerHTML = "BOT won";
        window.alert('BOT won');
        s2++;
        x_score.innerHTML = ": " + s1;
        y_score.innerHTML = ": " + s2;
        process();
    }
    else if ((b4== 'BOT' || b4== 'BOT') && (b5== 'BOT' || 
        b5== 'BOT') && (b6== 'BOT' || b6== 'BOT')) {
        document.getElementById('print')
            .innerHTML = "BOT won";
        window.alert('BOT won');
        s2++;
        x_score.innerHTML = ": " + s1;
        y_score.innerHTML = ": " + s2;
        process();
    }
  
    // Checking of BOT finsh
    // Here, Checking about Tie
    else if ((b1 == 'X' || b1== 'BOT') && (b2 == 'X' 
        || b2== 'BOT') && (b3 == 'X' || b3== 'BOT') && 
        (b4 == 'X' || b4== 'BOT') && (b5 == 'X' || 
        b5== 'BOT') && (b6 == 'X' || b6== 'BOT') && 
        (b7 == 'X' || b7== 'BOT') && (b8 == 'X' || 
        b8== 'BOT') && (b9 == 'X' || b9== 'BOT')) {
            document.getElementById('print')
                .innerHTML = "Match Tie";
            window.alert('Match Tie');
            process();
    }
    else {
  
        // Here, Printing Result
        if (flag == 1) {
            document.getElementById('print')
                .innerHTML = "Your Turn";
        }
        else {
            document.getElementById('print')
                .innerHTML = "BOT's Turn";

            setTimeout(COM, 500);
        }
    }


}

function red(){
    document.getElementById('load').innerHTML = "Redirecting..."
    document.getElementById('loading').style.opacity = "1";
    document.getElementById('main').style.opacity = "0";

    setTimeout(function(){
        location.href = "Reveal/index.html";
    }, 7000);
}

function process(){

    x_score.innerHTML = ": " + s1;
    y_score.innerHTML = ": " + s2;

    if(s1 == 5){
        alert('Happy Birthday Alyssa!');
        setTimeout(red, 3000);
    }
    else if(s2 == 5){
        alert('Game Over, click reset to try again.');
    }
    else{
        myfunc_2(1);
    }

}

var bt = [0,0,0,0,0,0,0,0,0];
var checked = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

// Function to reset game
function myfunc_2(num) {
   // location.reload();
   if(num === 0){
       s1 = 0;
       s2 = 0;
       x_score.innerHTML = ": " + s1;
       y_score.innerHTML = ": " + s2;
   }

        for(var a = 1; a <= 9; a++){
            var element = document.getElementById("b" + a);

            if(bt[a-1] == 1){
               element.classList.remove("rev");
            }
            else {
                element.classList.remove("b_rev");
            }

            element.disabled = false;
            element.value = '';

            selected[a-1] = 0;
            bt[a-1] = 0;
        }
   
        for(var a = 0; a < 24; a++){
            checked[a] = 0;
        }
        
        flag = 1;
        
        return 0;
}
  
// Here onwards, functions check turn of the player 
// and put accordingly value X or 0
function myfunc_3() {
    selected[0] = 1;
    if (flag == 1) {
        document.getElementById("b1").value = "X";
        document.getElementById("b1").className = "b1 rev";
        document.getElementById("b1").disabled = true;
        flag = 0;
        bt[0] = 1;
    }
    else {
        document.getElementById("b1").value = "BOT";
        document.getElementById("b1").disabled = true;
        document.getElementById("b1").className = "b1 b_rev";
        flag = 1;
    }
}
  
function myfunc_4() {
    selected[1] = 1;
    if (flag == 1) {
        document.getElementById("b2").value = "X";
        document.getElementById("b2").className = "b2 rev";
        document.getElementById("b2").disabled = true;
        flag = 0;
        bt[1] = 1;
    }
    else {
        document.getElementById("b2").value = "BOT";
        document.getElementById("b2").disabled = true;
        document.getElementById("b2").className = "b2 b_rev";
        flag = 1;
    }
}
  
function myfunc_5() {
    selected[2] = 1;
    if (flag == 1) {
        document.getElementById("b3").value = "X";
        document.getElementById("b3").className = "b3 rev";
        document.getElementById("b3").disabled = true;
        flag = 0;
        bt[2] = 1;
    }
    else {
        document.getElementById("b3").value = "BOT";
        document.getElementById("b3").disabled = true;
        document.getElementById("b3").className = "b3 b_rev";
        flag = 1;
    }
}
  
function myfunc_6() {
    selected[3] = 1;
    if (flag == 1) {
        document.getElementById("b4").value = "X";
        document.getElementById("b4").className = "b4 rev";
        document.getElementById("b4").disabled = true;
        flag = 0;
        bt[3] = 1;
    }
    else {
        document.getElementById("b4").value = "BOT";
        document.getElementById("b4").disabled = true;
        document.getElementById("b4").className = "b4 b_rev";
        flag = 1;
    }
}
  
function myfunc_7() {
    selected[4] = 1;
    if (flag == 1) {
        document.getElementById("b5").value = "X";
        document.getElementById("b5").className = "b5 rev";
        document.getElementById("b5").disabled = true;
        flag = 0;
        bt[4] = 1;
    }
    else {
        document.getElementById("b5").value = "BOT";
        document.getElementById("b5").disabled = true;
        document.getElementById("b5").className = "b5 b_rev";
        flag = 1;
    }
}
  
function myfunc_8() {
    selected[5] = 1;
    if (flag == 1) {
        document.getElementById("b6").value = "X";
        document.getElementById("b6").className = "b6 rev";
        document.getElementById("b6").disabled = true;
        flag = 0;
        bt[5] = 1;
    }
    else {
        document.getElementById("b6").value = "BOT";
        document.getElementById("b6").disabled = true;
        document.getElementById("b6").className = "b6 b_rev";
        flag = 1;
    }
}
  
function myfunc_9() {
    selected[6] = 1;
    if (flag == 1) {
        document.getElementById("b7").value = "X";
        document.getElementById("b7").className = "b7 rev";
        document.getElementById("b7").disabled = true;
        flag = 0;
        bt[6] = 1;
    }
    else {
        document.getElementById("b7").value = "BOT";
        document.getElementById("b7").disabled = true;
        document.getElementById("b7").className = "b7 b_rev";
        flag = 1;
    }
}
  
function myfunc_10() {
    selected[7] = 1;
    if (flag == 1) {
        document.getElementById("b8").value = "X";
        document.getElementById("b8").className = "b8 rev";
        document.getElementById("b8").disabled = true;
        flag = 0;
        bt[7] = 1;
    }
    else {
        document.getElementById("b8").value = "BOT";
        document.getElementById("b8").disabled = true;
        document.getElementById("b8").className = "b8 b_rev";
        flag = 1;
    }
}
  
function myfunc_11() {
    selected[8] = 1;
    if (flag == 1) {
        document.getElementById("b9").value = "X";
        document.getElementById("b9").className = "b9 rev";
        document.getElementById("b9").disabled = true;
        flag = 0;
        bt[8] = 1;
    }
    else {
        document.getElementById("b9").value = "BOT";
        document.getElementById("b9").className = "b9 b_rev";
        document.getElementById("b9").disabled = true;
        flag = 1;
    }
}

function Random(){
    return Math.floor((Math.random() * 8));
}

function COM(){

    var r_move = pred();
    
            if(r_move == 0){
                myfunc_3();
            }
            else if(r_move == 1){
                myfunc_4();
            }
            else if(r_move == 2){
                myfunc_5();
            }
            else if(r_move == 3){
                myfunc_6();
            }
            else if(r_move == 4){
                myfunc_7();
            }
            else if(r_move == 5){
                myfunc_8();
            }
            else if(r_move == 6){
                myfunc_9();
            }
            else if(r_move == 7){
                myfunc_10();
            }
            else{
                myfunc_11();
            }
            myfunc();
    
}

function pred(){

    var output = 0;
    var done = true;
    var rec = 0;

   do{
    if(rec < 24){
        if(bt[0] == 1 && bt[1] == 1 && checked[0] == 0){
                if(selected[2] == 1){
                    checked[0] = 1;
                    done = true;
                }
                else{
                    output = 2;
                    done = false;
                }
        }
        else if(bt[1] == 1 && bt[2] == 1 && checked[1] == 0){
                if(selected[0] == 1){
                    checked[1] = 1;
                    done = true;
                }
                else{
                    output = 0;
                    done = false;
                }
        }
        else if(bt[0] == 1 && bt[2] == 1 && checked[2] == 0){
                if(selected[1] == 1){
                    checked[2] = 1;
                    done = true;
                }
                else{
                    output = 1;
                    done = false;
                }
        }
        else if(bt[3] == 1 && bt[4] == 1 && checked[3] == 0){
                if(selected[5] == 1){
                    checked[3] = 1;
                    done = true;
                }
                else{
                    output = 5;
                    done = false;
                }
        }
        else if(bt[4] == 1 && bt[5] == 1 && checked[4] == 0){
                if(selected[3] == 1){
                    checked[4] = 1;
                    done = true;
                }
                else{
                    output = 3;
                    done = false;
                }
        }
        else if(bt[3] == 1 && bt[5] == 1 && checked[5] == 0){
                if(selected[4] == 1){
                    checked[5] = 1;
                    done = true;
                }
                else{
                    output = 4;
                    done = false;
                }
        }
        else if(bt[6] == 1 && bt[7] == 1 && checked[6] == 0){
            if(selected[8] == 1){
                checked[6] = 1;
                done = true;
            }
            else{
                output = 8;
                done = false;
            }
        }
        else if(bt[7] == 1 && bt[8] == 1 && checked[7] == 0){
            if(selected[6] == 1){
                checked[7] = 1;
                done = true;
            }
            else{
                output = 6;
                done = false;
            }
        }
        else if(bt[6] == 1 && bt[8] == 1 && checked[8] == 0){
            if(selected[7] == 1){
                checked[8] = 1;
                done = true;
            }
            else{
                output = 7;
                done = false;
            }
        }
        else if(bt[0] == 1 && bt[4] == 1 && checked[9] == 0){
            if(selected[8] == 1){
                checked[9] = 1;
                done = true;
            }
            else{
                output = 8;
                done = false;
            }
        }
        else if(bt[4] == 1 && bt[8] == 1 && checked[10] == 0){
            if(selected[0] == 1){
                checked[10] = 1;
                done = true;
            }
            else{
                output = 0;
                done = false;
            }
        }
        else if(bt[0] == 1 && bt[8] == 1 && checked[11] == 0){
            if(selected[4] == 1){
                checked[11] = 1;
                done = true;
            }
            else{
                output = 4;
                done = false;
            }
        }
        else if(bt[2] == 1 && bt[4] == 1 && checked[12] == 0){
            if(selected[6] == 1){
                checked[12] = 1;
                done = true;
            }
            else{
                output = 6;
                done = false;
            }
        }
        else if(bt[4] == 1 && bt[6] == 1 && checked[13] == 0){
            if(selected[2] == 1){
                checked[13] = 1;
                done = true;
            }
            else{
                output = 2;
                done = false;
            }
        }
        else if(bt[2] == 1 && bt[6] == 1 && checked[14] == 0){
            if(selected[4] == 1){
                checked[14] = 1;
                done = true;
            }
            else{
                output = 4;
                done = false;
            }
        }
        else if(bt[0] == 1 && bt[3] == 1 && checked[15] == 0){
            if(selected[6] == 1){
                checked[15] = 1;
                done = true;
            }
            else{
                output = 6;
                done = false;
            }
            }
            else if(bt[4] == 1 && bt[7] == 1 && checked[16] == 0){
                if(selected[1] == 1){
                    checked[16] = 1;
                    done = true;
                }
                else{
                    output = 1;
                    done = false;
                }
            }
            else if(bt[2] == 1 && bt[8] == 1 && checked[17] == 0){
                if(selected[5] == 1){
                    checked[17] = 1;
                    done = true;
                }
                else{
                    output = 5;
                    done = false;
                }
            }
            else if(bt[6] == 1 && bt[3] == 1 && checked[18] == 0){
                if(selected[0] == 1){
                    checked[18] = 1;
                    done = true;
                }
                else{
                    output = 0;
                    done = false;
                }
            }
            else if(bt[0] == 1 && bt[6] == 1 && checked[19] == 0){
                if(selected[3] == 1){
                    checked[19] = 1;
                    done = true;
                }
                else{
                    output = 3;
                    done = false;
                }
            }
            else if(bt[1] == 1 && bt[4] == 1 && checked[20] == 0){
                if(selected[7] == 1){
                    checked[20] = 1;
                    done = true;
                }
                else{
                    output = 7;
                    done = false;
                }
            }
            else if(bt[1] == 1 && bt[7] == 1 && checked[21] == 0){
                if(selected[4] == 1){
                    checked[21] = 1;
                    done = true;
                }
                else{
                    output = 4;
                    done = false;
                }
            }
            else if(bt[2] == 1 && bt[5] == 1 && checked[22] == 0){
                if(selected[8] == 1){
                    checked[22] = 1;
                    done = true;
                }
                else{
                    output = 8;
                    done = false;
                }
            }
            else if(bt[5] == 1 && bt[8] == 1 && checked[23] == 0){
                if(selected[2] == 1){
                    checked[23] = 1;
                    done = true;
                }
                else{
                    output = 2;
                    done = false;
                }
            }
        else{
            do{
                output = Random();

            }while(selected[output] == 1);
            done = false;
        }
    }
    else{
        do{
            output = Random();

        }while(selected[output] == 1);
        done = false;
    }
    rec++;
}while(done);

   return output;

}

var index = 0; 

load();

function load(){
   
    //document.getElementById('loading').style.opacity = "1";
    if(index == 0){
        var username = window.prompt("Enter username: ");

        if(username === "@alyssa26"){
            window.alert("Hello, Alyssa!");
            document.getElementById('loading').style.opacity = "1";
            setTimeout(load, 7000);
            for(var a = 1; a <= 9; a++){
                var element = document.getElementById("b" + a);
                element.disabled = true;
            }
        }
        else{
            window.alert("Invalid username!");
            load();
        }
       
    }
    else if(index == 1){
        document.getElementById('load').innerHTML = "Tuning BOT...";
        setTimeout(load, 7000);
    }
    else if(index == 2){
        for(var a = 1; a <= 9; a++){
            var element = document.getElementById("b" + a);
            element.disabled = false;
        }
        document.getElementById('loading').style.opacity = "0";
        document.getElementById('main').style.opacity = "1";
    }

    console.log("Nganong ga tan-aw2 ka sa console? - PM me.");
    index++;
}

var username = "", password = "";
var index = 0;

var img = document.getElementById('img');

var images = ['1.jpg','2.jpg','3.jpg','4.png','5.png','6.jpg','7.png',
'8.jpg','9.jpg','10.png','11.jpg','12.png','13.jpg','14.png','15.png',
'16.png','17.png','18.jpg','19.png','20.jpg','21.png','22.jpg','23.png','24.png','25.png','26.jpg'];


var status = document.getElementById('status'),
    loading = document.getElementById('loading'),
    header = document.getElementById('header'),
    button = document.getElementById('button'),
    vid = document.getElementById('vid'),
    container = document.getElementById('container');

var grant = false;
var count = -1;

button.addEventListener('click', function(){
    if(count == -1){
        username = document.getElementById('username').value;
        password = document.getElementById('password').value;
        count = 0;
        setTimeout(logIn, 5000);
        loading.style.opacity = "1";
        console.log(username + "," + password);
    }
    else{
        if(username === document.getElementById('username').value && password === document.getElementById('password').value){
            loading.innerHTML =  `<div class="loader"></div>
            <p class="status" id="status">Loading, please wait...</p>`;
            loading.style.opacity = "1";
            count = 1;
            logIn();
        }
        else{
            loading.style.opacity = "1";
            loading.innerHTML = `<p class="status" id="status">Wrong username or password.</p>`;
        }
    }
        
}, false);

function logIn(){
    if(count == 0){
        document.getElementById('username').value = "";
        document.getElementById('password').value = "";
        header.innerHTML = "Login Account";
        loading.style.opacity = "0";
        button.innerHTML = "Login";
    }
    else if(count == 1){
        setTimeout(logIn, 5000);
        button.removeEventListener('click', logIn);
    }
    else if(count == 2){
        loading.innerHTML = `<p class="status" id="status">Oops, something went wrong.</p>`;
        setTimeout(logIn, 2500);
    }
    else if(count == 3){
        header.style.zIndex = "0";
        header.opacity = "0";
        container.style.top = "50%";
        vid.style.opacity = "1";
        vid.style.zIndex = "4";
        vid.muted = false;
        vid.currentTime = "1";
        vid.play();
        setTimeout(logIn, 18000);
        loading.innerHTML = `<p class="status" id="status">Our system detect some errors.</p>`;
    }   
    else if(count == 4){
        vid.style.opacity = "0";
        vid.style.zIndex = "0";
        loading.innerHTML =  `<div class="loader"></div>
        <p class="status" id="status">Fixing errors... 1 of 2.</p>`;
        showImage();
    }

    count++;
}

function showImage(){
    
    img.src = "images/"+images[index];

    index++;

    if(index > 25){
        index = 0;
    }

    if(vid.currentTime >= 59){
        vid.pause();
        setTimeout(newVid, 2500); 
        img.style.opacity = "0";
        img.style.zIndex = "1";
        header.innerHTML = "You got Rick Rolled!";
    }

    setTimeout(showImage, 1500);

}

var c = 0;

function newVid(){
    if(c == 0){
        vid.src = "videos/2.mp4";
        vid.style.opacity = "1";
        vid.style.zIndex = "5";
        vid.play();
        vid.muted = false;
        loading.innerHTML =  `<div class="loader"></div>
            <p class="status" id="status">Fixing errors... 2 of 2.</p>`;
        setTimeout(newVid, 23000);
    }
    else if(c == 2){
        vid.style.opacity = "0";
        header.innerHTML = "Happy Birthday Wayesteen!"
        header.style.opacity = "1";
        header.style.zIndex = "6";
        setTimeout(newVid, 5000);
    }
    else if(c == 3){
        header.style.opacity = "0";
        header.style.zIndex = "1";
        vid.src = "videos/3.mp4";
        vid.style.opacity = "1";
        vid.style.zIndex = "5";
        vid.play();
        vid.muted = false;
        loading.innerHTML =  `<div class="loader"></div>
            <p class="status" id="status">Applying fix...</p>`;
        setTimeout(function(){
          location.href = "Reveal/index.html";
        },11500);
    }

    c++;
}

//showImage();
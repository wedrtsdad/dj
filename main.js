nx=0;
ny=0;
lwx=0;
rwx=0;
lw=0;
rw=0;

function preload(){
    img1= loadImage("istockphoto-941875534-170667a.jpg");
    music1= loadSound("ph.mp3");
}

function setup(){
    canvas = createCanvas(800,600);
    canvas.position(390, );
    video= createCapture(VIDEO);
    video.size(700,500);
    poseNet= ml5.poseNet(video,booom);
    poseNet.on('pose',pose1);
    video.hide();
}

function booom(){
    console.log('💥💥💥💥💥💥💥💥💥💥boooooooooom💥💥💥💥💥💥💥💥');
}

function pose1(results) {
    if (results.length > 0) {
        console.log(results);

        nx= results[0].pose.nose.x;
        ny= results[0].pose.nose.y;

        lwx= results[0].pose.leftWrist.x;
        lwy= results[0].pose.leftWrist.y;

        rwx= results[0].pose.rightWrist.x;
        rwy= results[0].pose.rightWrist.y;

        lw= results[0].pose.keypoints[9].score;
        rw= results[0].pose.keypoints[10].score;
        console.log("wrist loaded");
    }
}

function play1(){
    music1.play();
    music1.setVolume(1);
    music1.rate(1);
}

function draw(){
    background(img1);
    image(video ,25 ,25 ,750 ,550 );
    fill("red");
    stroke("red");
    if (lw > 0.2) {
        circle(lwx,lwy,20);
        num= Number(lwy);
        volume= floor(num)/500;
        music1.setVolume(volume);
    }

    if (rw > 0.2) {
        circle(rwx,rwy,20); 
        if((rwy > 0) && (rwy <= 100)){
            music1.rate(0.5);
            document.getElementById("s1").innerHTML="speed = 0.5";
        }

        if((rwy > 100) && (rwy <= 200)){
            music1.rate(1.0);
            document.getElementById("s1").innerHTML="speed = 1.0";
        }

        if((rwy > 300) && (rwy <= 400)){
            music1.rate(1.5);
            document.getElementById("s1").innerHTML="speed =1.5";
        }

        if((rwy > 400) && (rwy <= 500)){
            music1.rate(2.0);
            document.getElementById("s1").innerHTML="speed = 2.0";
        }
    }
    }

    
noseX = 0;
noseY = 0;

function preload(){
    moustache = loadImage('https://i.postimg.cc/W13GSMHx/5896063dcba9841eabab60f7-1.png');
}


function setup(){
     canvas = createCanvas(400, 400);
     canvas.center();
     video = createCapture(VIDEO);
     video.size(300, 300);
     video.hide();
     poseNet = ml5.poseNet(video, modelLoaded);
     poseNet.on('pose', gotPoses);

}

function modelLoaded(){
    console.log('PoseNet is now loaded!');
}



function take_snapshot(){
    save("moustache_filter.png");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x  + 90;
        noseY = results[0].pose.nose.y + 100;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = "+ results[0].pose.nose.y);
    }
}

function draw(){
    image(video, 0, 0, 500, 500);
    image(moustache, noseX, noseY, 30, 30);
}
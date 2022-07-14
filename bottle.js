img="";
status1="";
object=[];

function preload(){
    img =loadImage('bottles.jpg');
}
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector =ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML ="Status : Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded");
    status1 = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error,results){
    if(error) 
    {
        console.log(error);
        
    }
    else{
        console.log(results);
        object= results;
    }
    
    
}
function draw(){
    image(img,0,0,640,420);
    if(status1 !="")
    {
        for(i=0 ; i<object.length;i++){
            fill("yellow");
            percent=floor(object[i].confidence*100);
            text(object[i].label+" "+percent+"%",object[i].x,object[i].y);
            noFill();
            stroke("yellow");
            rect(object[i].x,object[i].y,object[i].width,object[i].height);
        }
    }
}

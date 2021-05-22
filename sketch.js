

var engine, world;
var backgroundImg;

var bg  ;
var Snowfall1 , Snowfall2

function preload() {
  Snowfall1Img = loadImage("snow4.webp")
  Snowfall2Img = loadImage("snow5.webp")
  getBackgroundImg();

}

function setup() {
  createCanvas(800,400);
 
  Snowfall1=createSprite(400, 200, 50,50);
	Snowfall1.addImage(Snowfall1Img)
	Snowfall1.scale=0.2

	Snowfall2=createSprite(400, 70, 50,50);
Snowfall2.addImage(Snowfall2Img)
	Snowfall2.scale=0.2
}

function draw() {

  if(backgroundImg){
    background(backgroundImg);
   }


   ;

   drawSprites();

  
}


async function getBackgroundImg(){
   
  var response = await fetch ("https://worldtimeapi.org/api/timezone/Asia/Tokyo")
  
  var responseJSON = await response.json()
  
  var datetime = responseJSON.datetime;
  var hour = datetime.slice (11,13)

 
  if(hour >=04 && hour<=14 ){
      bg = "snow1.jpg"
 }
 else if(hour >=14 && hour<=20 ){
   bg = "snow2.jpg"
}

else{
     bg = "snow3.jpg"
}

 
  backgroundImg=loadImage(bg);
  console.log(backgroundImg)   
   
      }

    
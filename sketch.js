var cap,ir,mar;
var avenger;
var time=4;
var chance=10;
var rapunzelQuestion;

function preload(){
  photoIMG=loadImage("av&pw.png");
  playavIMG=loadImage("playav.png");
  playpwIMG=loadImage("playpw.png");
  capIMG=loadImage("cap..png");
  irIMG=loadImage("ir..png");
  mrIMG=loadImage("mr..png");
  back1IMG=loadImage("back1.png");
  captainIMG=loadImage("captainamerica.png");
  ironmanIMG=loadImage("ironman.png");
  captainmarvelIMG=loadImage("captainmarvel.png");
  thanosIMG=loadImage("thanos1.png");
  bulletIMG=loadImage("bullet.png");
  rapsIMG=loadImage("raps.png");
  elsIMG=loadImage("els.png");
  rapunzelQuestionIMG=loadImage("rapunzelquestion.png");
  elsaQuestionIMG=loadImage("elsaQuestion.png");
  cinderellaQuestionIMG=loadImage("venellopeQuestion.png");
  youloseIMG=loadImage("youlose.png");
  youwonIMG=loadImage("youwon.png");
  excellentIMG=loadImage("excellent.png");
  verygoodIMG=loadImage("verygood.png");
  goodIMG=loadImage("good.png");
  note1IMG=loadImage("note1.png");
  youwonIMG=loadImage("youwon.png");
  youloseIMG=loadImage("youlose.png");
}
function setup(){
  createCanvas(1520,750);

    
     back1=createSprite(750,370,20,20);
     back1.addImage(back1IMG);
     back1.scale=2;
     back1.velocityX=-20.5;
     back1.x = back1.width /2;
  
     avenger=createSprite(150,300,40,40);
     avenger.addAnimation("captain",captainIMG);
     avenger.addAnimation("captainmarvel",captainmarvelIMG);
     avenger.addAnimation("ironman",ironmanIMG);
     avenger.scale=0.45;
     avenger.visible=false;
     avenger.debug=false;
     avenger.setCollider("rectangle",-3,-9,avenger.weight,avenger.height);
   
     thanos=createSprite(1290,200,50,50);
     thanos.addImage(thanosIMG);
     thanos.scale=0.50;
     thanos.velocityY=20;
     thanos.visible=false;
  
     cap=createSprite(300,300,20,20);
     cap.addImage(capIMG);
     cap.scale=1.5;
  
     shot=createSprite(160,150,15,15);
     shot.visible=false; 
     shot.addImage(bulletIMG);
     shot.scale=0.1;
     shot.debug=false;
     shot.setCollider("rectangle",0,0,1,50);
  
     ir=createSprite(1000,300,20,20);
     ir.addImage(irIMG);
     ir.scale=1.5;

     mar=createSprite(670,520,20,20);
     mar.addImage(mrIMG);
     mar.scale=1.5;

     line=createSprite(750,375,1,2000);
     line.visible=false;

     photo=createSprite(750,370,20,20);
     photo.addImage(photoIMG);
     photo.scale=1.2;

     button1=createSprite(250,700,20,20);
     button1.addImage(playavIMG);
     button1.scale=0.50;

     button2=createSprite(1090,700,20,20);
     button2.addImage(playpwIMG);
     button2.scale=0.50;
  
    elsaQuestion=createSprite(800,375,50,50);
    elsaQuestion.addImage(elsaQuestionIMG);
    elsaQuestion.visible=false;
    elsaQuestion.scale=1.2;
  
    cinderellaQuestion=createSprite(800,375,50,50);
    cinderellaQuestion.addImage(cinderellaQuestionIMG);
    cinderellaQuestion.visible=false;
    cinderellaQuestion.scale=1.2;
    
    rapunzelQuestion=createSprite(800,375,50,50);
    rapunzelQuestion.addImage(rapunzelQuestionIMG);
    rapunzelQuestion.visible=false;
    rapunzelQuestion.scale=1.2;
  
    
  good=createSprite(750,350,20,20);
  good.addImage(goodIMG);
  good.visible=false;
  verygood=createSprite(750,350,20,20);
  verygood.addImage(verygoodIMG);
  verygood.visible=false;
  excellent=createSprite(750,350,20,20);
  excellent.addImage(excellentIMG);
  excellent.visible=false;
  youwon=createSprite(750,420,20,20);
  youwon.addImage(youwonIMG);
  youwon.visible=false;
  youlose=createSprite(750,420,20,20);
  youlose.addImage(youloseIMG);
  youlose.visible=false;
  
}
function draw(){
  background("black");
  
  
    if(back1.x<0){
      back1.x=back1.width/2;  
     }
 
  if(keyDown("z")){
    var note1=createSprite(750,600,20,20);
    note1.addImage(note1IMG);
    note1.velocityX=-4.5;
    photo.destroy();
    button1.destroy();
    button2.destroy(); 
    rapunzelQuestion.destroy();
    elsaQuestion.destroy();
    cinderellaQuestion.destroy();
    youwon.destroy();
    youlose.destroy();
    excellent.destroy();
    good.destroy();
    verygood.destroy();}
     if(chance===0){
    fill("white");
    textSize(100);
    textFont("Algerian");
    stroke("pink");
    text("You Lose"  ,480,375)
     fill("white");
    textSize(100);
    textFont("Algerian");
    stroke("Aqua");
    text("So Sorry"  ,390,460)     
    shot.destroy();
    thanos.destroy(); }
  if(keyDown("x")){
     avenger.visible=true;
     cap.destroy();
     ir.destroy();
     mar.destroy(); 
     avenger.changeAnimation("captain",captainIMG);
    avenger.scale=0.35;
    thanos.visible=true;   }
    
  if(keyDown("c")){
     avenger.visible=true;
     cap.destroy();
     ir.destroy();
     mar.destroy(); 
     avenger.changeAnimation("ironman",ironmanIMG);
     avenger.scale=0.55;
     thanos.visible=true;
    
   }
  shot.y=avenger.y;
  
  if(keyWentDown("b")){  
    shot.velocityX=20;
    shot.visible=true;  
  } 
  if(shot.x>1520){
    shot.x=160;}
  
   if(thanos.y>730){
    thanos.y=30;}
  
  if(shot.isTouching(line)){
    chance=chance-1;
  }
  if(shot.isTouching(thanos)){
    time=time-1;
    shot.x=160;
  }
   
  if(keyDown("v")){
     avenger.visible=true;
     cap.destroy();
     ir.destroy();
     mar.destroy();  
    avenger.changeAnimation("captainmarvel",captainmarvelIMG);
        avenger.scale=0.70;
    thanos.visible=true;
   
   }
  if(chance===-1){
 text("You Lose"  ,480,375)
 fill("white");
 textSize(100);
 textFont("Algerian");
 stroke("Aqua");
 text("So Sorry"  ,390,460)
  }
  if(chance===-2){
 text("You Lose"  ,480,375)
 fill("white");
 textSize(100);
 textFont("Algerian");
 stroke("Aqua");
 text("So Sorry"  ,390,460)
  }
  if(chance===-3){
 text("You Lose"  ,480,375)
 fill("white");
 textSize(100);
 textFont("Algerian");
 stroke("Aqua");
 text("So Sorry"  ,390,460)
  }
  if(chance===-4){
 text("You Lose"  ,480,375)
 fill("white");
 textSize(100);
 textFont("Algerian");
 stroke("Aqua");
 text("So Sorry"  ,390,460)
  }
  
     
  if(keyDown("m")){
    photo.destroy();
    button1.destroy();
    button2.destroy();
    avenger.destroy();
    shot.destroy();
    thanos.destroy();
    cap.destroy();
    ir.destroy();
    mar.destroy();
    rapunzelQuestion.visible=true;
    var quizzes=createSprite(150,40,190,30);
    quizzes.shapeColor="white";
    fill("black");
    textSize(20);
    text("Quizzes",60,50)
 } 
   if(keyDown("left")){
    rapunzelQuestion.destroy();
    cinderellaQuestion.visible=true;
   good.destroy();}
   if(keyDown("q")){
    good.visible=true;}
   if(keyDown("w")){
    youlose.visible=true;
    youwon.destroy();
    elsaQuestion.destroy();
    cinderellaQuestion.destroy();}
   if(keyDown("d")){
    verygood.visible=true;}
   if(keyDown("a")){
    youlose.visible=true;
    youwon.destroy();
    elsaQuestion.destroy();}
   if(keyDown("s")){
    youlose.visible=true;
    youwon.destroy();
    elsaQuestion.destroy();}
   if(keyDown("y")){
    youlose.visible=true;
    youwon.destroy();}
  if(keyDown("i")){
    youlose.visible=true;
    youwon.destroy();}
  if(keyDown("t")){
    excellent.visible=true;
    youwon.visible=true;}  
  if(keyDown("right")){
    cinderellaQuestion.destroy();
    elsaQuestion.visible=true;
    verygood.destroy();}
  
   if(keyDown("up")){
    avenger.y=avenger.y-7.5;
  } 
  if(keyDown("down")){
    avenger.y=avenger.y+7.5;
  } 
  
  
  createEdgeSprites();
  drawSprites();
  
  
  fill("white");
  textSize(20);
  text("Chances : " +chance  ,60,50)
  if(time===0){
    fill("white");
    textSize(100);
    textFont("Algerian");
    stroke("pink");
 text("You Won"  ,480,375)
     fill("white");
 textSize(100);
 textFont("Algerian");
 stroke("Aqua");
 text("Well Played"  ,390,460)
    shot.destroy();
    thanos.destroy();
    back1.velocityX=0;
  }
 fill("white");
 textSize(20);
 textFont("Algerian");
 stroke("blue");
 text("Time : " +time  ,232,3000)
}
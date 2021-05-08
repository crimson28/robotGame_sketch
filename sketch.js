// instead of writing matter.engine for everything, we give it a constant nickname 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var robot;
var wall1, wall2, wall3, wall4, wall5, wall6,wall7,wall8,wall9,wall10,wall11, wall12;
var wall13, wall14,wall15,wall16,wall17,wall18, wall19, wall20, wall21, wall22;
//var wallTop, bottom;
var side1, side2;

var engine,world;


function preload(){


}

function setup(){
    
    createCanvas(900,800);

    //create engine

    engine = Engine.create();

    //assign the World created by engine to the variable name we made
    world = engine.world;

    //create robot and add to myWorld

    robot = Bodies.rectangle(50,120,30,30);
    World.add(world,robot);
    console.log(robot);
    
    console.log(world);

    
    
    
    
    //robot = createSprite(50,120,30,30);
    
    wall1 = new Wall(250,550,350,20);
    wall2 = new Wall(200,250,350,20);
    wall3 = new Wall(120,90,20,150);
    wall4 = new Wall(330,55,20,150);
    wall5 = new Wall(420,180,20,200);
    wall6 = new Wall(550,150,250,20);
    wall7 = new Wall(210,170,20,150);
    wall8 = new Wall(770,220,20,250);
    wall9 = new Wall(520,220,200,20);
    wall10 = new Wall(610,333,300,20);
    wall11 = new Wall(750,420,750,20);
    wall12 = new Wall(370,380,20,100);
    wall13 = new Wall(310,440,20,200);
    wall14 = new Wall(500,550,20,250);
    wall15 = new Wall(100,450,195,20);
    wall16 = new Wall(140,350, 170, 20);
    wall17 = new Wall(70,660,200,20);
    wall18 = new Wall(230,775,500,20);
    wall19 = new Wall(333,680,20,100);
    wall20 = new Wall(373,625,100,20);
    wall21 = new Wall(510,70,200,20);
    wall22 = new Wall(680,760,250,20);
    wall23 = new Wall(590,680,200,20);
    wall24 = new Wall(570,570,150,20);
    wall25 = new Wall(810,670,20,200);
    wall26 = new Wall(825,560,150,20);
    wall27 = new Wall(770,630,70,20);

   // wallTop = new Wall(450,3,900,20);
    //console.log(wallTop);
   
   // bottom = new Wall(450,790,900,20);
    side1 = new Wall(890,405,20,900);
    side2 = new Wall(10,405,20,900);

}

function draw(){
    
    
    background("orange");
    
    //update engine

    Engine.update(engine);

    if(robot.position.y > 800){
        
        Matter.Body.setPosition(robot, {x : 160 , y: -30});
    }

    
    
    
    //robot.velocityY += 0.8;

    text(mouseX + "," + mouseY,mouseX,mouseY);

    //display robot 

    rectMode(CENTER);
    //console.log(robot.body.position);
    rect(robot.position.x, robot.position.y,30,30);

   // wallTop.display();
   // bottom.display();
    side1.display();
    side2.display();
    


    wall1.display();
    wall2.display();
    wall3.display();
    wall4.display();
    wall5.display();
    wall6.display();
    wall7.display();
    wall8.display();
    wall9.display();
    wall10.display();
    wall11.display();
    wall12.display();
    wall13.display();
    wall14.display();
    wall15.display();
    wall16.display();
    wall17.display();
    wall18.display();
    wall19.display();
    wall20.display();
    wall21.display();
    wall22.display();
    wall23.display();
    wall24.display();
    wall25.display();
    wall26.display();
    wall27.display();

    //wallTop.body.render.visible = false;
  
    
    drawSprites();

    
}

function keyPressed(){

    if(keyIsDown(LEFT_ARROW)){

        //this will move the robot

        Matter.Body.setVelocity(robot,{ x : -10 , y : 0});
    }

    if(keyIsDown(RIGHT_ARROW)){

        //this will move the robot

        // when it is a vector, you need to declare x and y in culry brackets
 
        Matter.Body.setVelocity(robot,{ x : 10 , y : 0});

       
    }

    if(keyIsDown(32) && Matter.SAT.collides(robot,wall2.body)){

        //this will move the robot
console.log("Touching");
      //  Matter.Body.translate(robot,{ x : 0 , y : 15});
      Matter.Body.setVelocity(robot,{x : 0, y : -10} );
    }
}


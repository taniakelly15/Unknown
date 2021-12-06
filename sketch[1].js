let Xdir, Ydir, Zdir;
let x= -10;
let y=-10;
let z =0;
let timer= 3;
easing=0.0001;
let rx,ry,rz;

function setup() {
  Unknown= createCanvas(400, 400, WEBGL);
   Xdir=x;
   Ydir=y;
   Zdir=z;
  
}

function draw() {
  //background(0);
  
  push();
  
  pop();
  
  
  strokeWeight(1.2);
  if (frameCount% 30 && timer > 0){
    timer--
  }
  if (timer == 0){
    Xdir = random((-width/2), width/2);
    Ydir = random((height/2), height/2);
    //ir = random((400/2),400/2);
    
//  rx= constrain(x,0,400);
 // ry=constrain(y,0,400);
 // rz=constrain(z,0,400);
    
    rotateY(millis(random()) / 1000);
    rotateX(millis(random(frameCount))/100);

   timer=5;
  }
  x=x+((Xdir-x)*easing/Xdir);
  y= y+((Ydir-y)*easing);
//z = z+ ((Zdir -z)* easing);
  
  push()
  translate(x/2,y/x,50*2);
  sphere(20,20,20);
  pop();
  
  push();
  strokeWeight(0.2);
  translate(y*2,(x/y),-200);
  sphere(20,24,2);
  pop();
  
  push();
  strokeWeight(0.5);
  stroke('red');
  translate(0,y,0);
  torus(1000, 2, 24,16);
  pop();


}
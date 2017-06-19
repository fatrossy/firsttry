
function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  frameRate(1);
  //background(102)
}


function draw() {
  background(200);


  //hours indicate
   if (hour()<12){
  fill(80,40,175,100);
  clockhand(0,-60,30*(hour()+minute()/60),160);
  }

  else {
     fill(80,40,175,100);
     clockhand(0,-60,30*((hour()-12)+minute()/60),160);
  }

  //minutes indicate
  fill(206,52,107,100);
  clockhand(0,-130,6*minute(),300);


  // seconds indicate
  fill(45,215,224,100);
  clockhand(0,-205,6*second(),450);

  noStroke();
  fill(random(255),random(255),random(255),150)
  ellipse(width/2,height/2,40,40);
}

function clockhand(x,y,rot,radius){
  push();
  translate(width/2,height/2);
  rotate(-rot);
  //translate(x,y);
  noStroke();
  ellipse(x,y,radius,radius);
  pop();


}

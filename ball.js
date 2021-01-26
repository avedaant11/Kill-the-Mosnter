class Ball {
    constructor(x,y,width,height) {
      var options = {
          frictionAir:0.005,
          density:0.8
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width=width;
      this.height=height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      this.image=loadImage("flyImg.jpeg");
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      ellipse(0, 0, this.width,this.height);
      pop();
    }
  };

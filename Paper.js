class Paper{
  constructor(x, y, width, height) {
      var options = {
        isStatic:false,
          'restitution':0.3,
          'friction':0,
          'density':1.2
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("paper2.png");
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0,0,60,60  );
      pop();
    }
}
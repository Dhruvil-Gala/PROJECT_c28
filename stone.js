class Stone {
    constructor(x, y) {
      var options = {
          isStatic:false,
          'restitution':0,
          'friction':1,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, 15, options);
      this.image = loadImage("stone.png");
      this.width=15;
      this.height=15;
      
      
      World.add(world, this.body);
    }
    display(){
    
      var pos =this.body.position;
     var angle = this.body.angle;
      
      imageMode(CENTER);
      fill(211,33,45);
      
      image(this.image, pos.x, pos.y, this.width +30, this.height+30);
      
    }
  };
  
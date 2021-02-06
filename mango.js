class Mango {
    constructor(x,y) {
      var options = {
          isStatic: true,
          restiution:0,
          friction:1,
          
      }
      this.body = Bodies.circle(x,y,25,options);
      this.image=loadImage("mango.png");
      this.radius = 25;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     
      imageMode(CENTER);
      
      
      fill(210,105,30);
      image(this.image,pos.x,pos.y, this.radius+25, this.radius+25);
      
    }
  };
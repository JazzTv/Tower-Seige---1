class Box
{
    constructor(xpos,ypos,width1, height1)
   {
     var box_options = 
     { 
       isStatic : false,
      'restitution': 0.8,
      'friction': 0.7,
      'density': 0.5
     }
     this.body = Bodies.rectangle(xpos,ypos,width1,height1,box_options);
     this.width = width1;
     this.height = height1;
     World.add(world,this.body);
   }
  display()
  {
    var position = this.body.position;
    var angle = this.body.angle;
    
    push();
        translate(position.x,position.y)
        rectMode(CENTER);
        rotate(angle);
        rect(0,0,this.width,this.height)
    pop();
  }
}
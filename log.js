class Log {
  constructor(x, y){
    var options = {
      friction :1,
      isStatic:true
    }
    this.body = Bodies.rectangle(x, y, 200, 20, options);
    this.width =200;
    this.height = 20;
    World.add(world, this.body);
  }
  display(){
    stroke("Green");
    strokeWeight(4);
    fill ("red")
    push ();
    translate(this.body.position.x,this.body.position.y)
    rect(0,0, this.width, this.height);
    pop ();
  }
}
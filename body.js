class body{
constructor(x,y){
    this.body=Bodies.circle(x,y,2)
    World.add(world,this.body)
   
}
display(){
    ellipseMode(CENTER)
    ellipse(this.body.position.x,this.body.position.y,4,4)
}
}
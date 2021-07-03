class Chain
{
   constructor(bodyA,bodyB){
    var option= {
        bodyA:bodyA,
        bodyB:bodyB,
        stiffness:0.04,
        length:10     
     }
     var chain=Constraint.create(option)
     World.add(world,chain)
 
   }
  display(){
      var pointA=this.chain.bodyA.position
      var pointB=this.chain.bodyB.position
      strokeWeight(4)
      line(pointA.x,pointA.y,pointB.x,pointB.y)
  }

}
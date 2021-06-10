class loncher {
    constructor(bodyA,pointB){
        var options={bodyA:bodyA,pointB:pointB,stiffness:0.003,lenth:2};
        this.pointB=pointB;
    this.loncher=Constraint.create(options)
    World.add(world,this.loncher);
    }
    
    display(){
        if(this.loncher.bodyA){
    
            var pointA=this.loncher.bodyA.position;
            var pointB=this.pointB;
            strokeWeight(3)
            line(pointA.x,pointA.y,pointB.x,pointB.y);
    
        }
        
    
    
        
    
    }

 attach(body) { 
     
    this.loncher.bodyA=body; 
}


    fly(){
    this.loncher.bodyA=null;
    
    
    }
    
    
}
    
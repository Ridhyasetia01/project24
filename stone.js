class Stone {

    constructor(x,y,r) 
    {
     
     var options={
    'restitution':0.8,
    'friction':3,
    'density':2
     }  ; 

     this.body =  Bodies.circle(x,y,r/2,options);
     this.r=r;
     World.add(world,this.body);

    }
    
    display(){
        var ironpos=this.body.position;
        push();
        translate(ironpos.x,ironpos.y);
        ellipseMode(CENTER)
        strokeWeight(4);
        fill("darkpink")
        stroke("red");
        ellipse(0,0,this.r,this.r);
        pop();
    }

}
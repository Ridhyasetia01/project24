class Iron {

    constructor(x,y) 
    {
     
     var options={
    'restitution':0.8,
    'friction':3,
    'density':30
     }  ; 

     this.body =  Bodies.rectangle(x,y,60,40,options);
     this.width=60;
     this .height=40;
     World.add(world,this.body);

    }
    
    display(){
        var ironpos=this.body.position;
        push();
        translate(ironpos.x,ironpos.y);
        rectMode(CENTER)
        strokeWeight(4);
        fill("darkpink")
        stroke("red");
        rect(0,0,60,40);
        pop();
    }

}
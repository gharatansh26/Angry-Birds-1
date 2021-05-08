class Bird
{
    constructor(x,y,width,height)
    {
        var option={
            'restitution' : 0.8,
            'friction': 0.3,
            'density': 0.1
        }
        this.body=Bodies.rectangle(x,y,50,50,option);
        World.add(world,this.body);
        
        this.width=50;
        this.height=50;
    }

    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        pos.x=mouseX
        pos.y=mouseY
        fill("green")
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,50,50);
        pop();     
    }
}

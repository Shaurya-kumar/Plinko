class Circle{

constructor(x,y,r){

    var options={

        isStatic:false,
        restitution:1,
        friction:1,
        density:5
    
    }

    this.r = r;
    this.x = x
    this.y = y

this.body = Bodies.circle(x,y,r,options);
this.color = color(random(0,255),random(0,255),random(0,255))
     
World.add(world,this.body)


}

display(){

var pos = this.body.position;

push()
translate(pos.x,pos.y)
noStroke();
fill(this.color);
ellipseMode(RADIUS);
ellipse(0,0,this.r,this.r) ;

pop();

}


}
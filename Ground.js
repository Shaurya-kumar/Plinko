class Ground{

    constructor(x,y,w,h){
    
        var options={
    
            isStatic:true,
            restitution:1.3,
            friction:1,
            density:5
        
        }
    
        this.x = x
        this.y = y
        this.width = w;
        this.height = h;
    
    this.body = Bodies.rectangle(x,y,w,h,options);
         
    World.add(world,this.body)
    
    
    }
    
    display(){
    
    var pos = this.body.position;
    
    push()
    translate(pos.x,pos.y)
    fill(255)
    rectMode(CENTER);
    rect(0,0,this.width,this.height) ;
    pop();
    
    }
    
    
    }
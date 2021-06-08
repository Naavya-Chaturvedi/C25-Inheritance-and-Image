class Bird extends Baseclass{
    //all the properties are listed inside the constructor()
    //the object is referred in the class with the keyword "this"
    constructor(x,y){
        super(x,y,50,50);
        this.image = loadImage("sprites/bird.png");
    }

    display(){
        var pos = this.body.position
        pos.x = mouseX;
        pos.y = mouseY;
        super.display();
    
    }
}
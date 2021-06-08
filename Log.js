class Log extends Baseclass{
    //all the properties are listed inside the constructor()
    //the object is referred in the class with the keyword "this"
    constructor(x,y,height,angle){
        super(x,y,20,height,angle)
        Matter.Body.setAngle(this.body,angle);
        this.image = loadImage("sprites/wood2.png");
    }

}
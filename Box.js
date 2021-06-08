class Box extends Baseclass{
    //all the properties are listed inside the constructor()
    //the object is referred in the class with the keyword "this"
    constructor(x,y,width,height){
        super(x,y,width,height)
        this.image = loadImage("sprites/wood1.png");
    }

}
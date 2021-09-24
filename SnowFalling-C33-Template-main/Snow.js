class Snow{
    constructor(){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(400,200,20,20,options)
        this.image = loadImage("snow1.jpg")
        this.body=World.add(world,this.body)
    }
    display(){
        image(this.image,this.body.position.x,this.body.position.y, 20,20)
    }
}

class Player{
    constructor(){
        this.spt = createSprite(width/2,height+50,30,30);
        this.spt.shapeColor = "red";
    }

    moveLeft(){
        this.spt.x=this.spt.x-10;
    }
    moveRight(){
        this.spt.x=this.spt.x+10;
    }
    moveUp(){
        this.spt.y=this.spt.y-10;
    }
    moveDown(){
        this.spt.y=this.spt.y+10;
    }
    respwan(){
        this.spt.x=this.spt.x=width/2;
        this.spt.y=this.spt.y=height+50;
    }


}


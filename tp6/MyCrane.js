class MyCrane extends CGFobject 
{
    constructor(scene)
    {
        super(scene);
        this.structure = new MyCraneStructure(this.scene);
        this.angle = 0;

    };

    display()
    {

        this.scene.pushMatrix();
	  	 	this.structure.display();
	    this.scene.popMatrix();
    };

    verticalMove()
    {  
       this.angle += Math.PI / 100;
    };

    update() 
    {
        this.verticalMove();
        this.structure.setAngle(this.angle);
    };
};
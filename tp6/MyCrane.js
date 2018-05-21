class MyCrane extends CGFobject 
{
    constructor(scene)
    {
        super(scene);
        this.structure = new MyCraneStructure(this.scene);

    };

    display()
    {

        this.scene.pushMatrix();
	  	 	this.structure.display();
	    this.scene.popMatrix();
    };
};
class MyClock extends CGFobject
{
	constructor(scene) 
	{
        super(scene);
        this.cylinder = new MyCylinder(scene, 12, 1);
    };
    
	display() 
	{	
		this.cylinder.display();
	};
};
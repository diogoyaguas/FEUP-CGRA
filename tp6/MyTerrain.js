class MyTerrain extends Plane
{
	constructor(scene)
	{
        super(scene, 50, 0, 150, 0, 150);

		this.floorAppearence = new CGFappearance(this.scene);
		this.floorAppearence.loadTexture("resources/images/grass.png");
		this.floorAppearence.setAmbient(0.3,0.3,0.3,1);
		this.floorAppearence.setDiffuse(0.6,0.6,0.6,1);
		this.floorAppearence.setSpecular(0,0.2,0.8,1);
		this.floorAppearence.setShininess(120);

		this.initBuffers();
    };

	display()
	{
        this.scene.pushMatrix();
	    	this.floorAppearence.apply();
	  	 	super.display();
	    this.scene.popMatrix();

	};
};

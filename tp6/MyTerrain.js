class MyTerrain extends Plane
{
	constructor(scene, nrDivs, altimetry)
	{
        super(scene, nrDivs, 0, 150, 0, 150);

		/*this.floorAppearence = new CGFappearance(this.scene);
		this.floorAppearence.loadTexture("resources/images/grass.png");
		this.floorAppearence.setAmbient(0.3,0.3,0.3,1);
		this.floorAppearence.setDiffuse(0.6,0.6,0.6,1);
		this.floorAppearence.setSpecular(0,0.2,0.8,1);
		this.floorAppearence.setShininess(120);*/

		this.altimetry = altimetry;
		this.applyAltimetry();

    };

	display()
	{
        this.scene.pushMatrix();
	    	//this.floorAppearence.apply();
	  	 	super.display();
	    this.scene.popMatrix();

	};

	applyAltimetry() {

		let count = 2;

		for(let i = 0; i < this.altimetry.length; i++){

			for(let j = 0; j < this.altimetry[i].length; j++){

				this.vertices[count] = this.altimetry[i][j];
				count += 3;
			}
		}

		super.initGLBuffers();
	}
};

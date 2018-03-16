/**
 * MyTable
 * @constructor
 */
 class MyTable extends CGFobject
 {
	constructor(scene) 
	{
		super(scene);
		this.materialD = new CGFappearance(this.scene);
		//this.materialD.setAmbient(0.1,0.1,0.1,1);
		this.materialD.setDiffuse(0.86,0.47,0.14,1);
		this.materialD.setSpecular(0.1,0.03,0.03,1);	
		this.materialD.setShininess(60);

		this.materialE = new CGFappearance(this.scene);
		//this.materialE.setAmbient(0.1,1,1,1);
		this.materialE.setDiffuse(.678,.698,.741,1);
		this.materialE.setSpecular(1,1,1,1);	
		this.materialE.setShininess(1);

		this.myUnitCubeQuad = new MyUnitCubeQuad(this.scene);
	};

	display() 
	{
		// legs
		this.scene.pushMatrix();
		this.scene.translate(2, 3.5 / 2, 1);
		this.scene.scale(0.3, 3.5, 0.3);
		this.materialE.apply();
		this.myUnitCubeQuad.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(2, 3.5 / 2, -1);
		this.scene.scale(0.3, 3.5, 0.3);
		this.materialE.apply();
		this.myUnitCubeQuad.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(-2, 3.5 / 2, 1);
		this.scene.scale(0.3, 3.5, 0.3);
		this.materialE.apply();
		this.myUnitCubeQuad.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(-2, 3.5 / 2, -1);
		this.scene.scale(0.3, 3.5, 0.3);
		this.materialE.apply();   
		this.myUnitCubeQuad.display();
		this.scene.popMatrix();

		// table top
		this.scene.pushMatrix();
		this.scene.translate(0, 3.5, 0);
		this.scene.scale(5, 0.3, 3);
		this.materialD.apply();
		this.myUnitCubeQuad.display();
		this.scene.popMatrix();
	};
 };


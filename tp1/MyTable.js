/**
 * MyTable
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyTable extends CGFobject
{
	constructor(scene)
	{
		super(scene);
		this.quad = new MyUnitCubeQuad(this.scene);
		this.quad.initBuffers();
	};

	display()
	{
		this.scene.pushMatrix();
		this.scene.scale(5,0.3,3);
		this.quad.display();
		this.scene.popMatrix();
		this.scene.pushMatrix();
		this.scene.translate(-2.35,-1.90,1.35);
		this.scene.scale(0.3,3.5,0.3);
		this.quad.display();
		this.scene.popMatrix();
		this.scene.pushMatrix();
		this.scene.translate(-2.35,-1.90,-1.35);
		this.scene.scale(0.3,3.5,0.3);
		this.quad.display();
		this.scene.popMatrix();
		this.scene.pushMatrix();
		this.scene.translate(2.35,-1.90,-1.35);
		this.scene.scale(0.3,3.5,0.3);
		this.quad.display();
		this.scene.popMatrix();
		this.scene.pushMatrix();
		this.scene.translate(2.35,-1.90,1.35);
		this.scene.scale(0.3,3.5,0.3);
		this.quad.display();
		this.scene.popMatrix();
	};



};

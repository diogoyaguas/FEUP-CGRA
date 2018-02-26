/**
 * MyFloor
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyFloor extends CGFobject
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
		this.scene.translate(0,-3.65,0);
		this.scene.scale(8,0.1,6);
		this.quad.display();
		this.scene.popMatrix();

	};



};

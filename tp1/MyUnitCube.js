/**
 * MyUnitCube
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyUnitCube extends CGFobject
{
	constructor(scene)
	{
		super(scene);
		this.initBuffers();
	};

	initBuffers()
	{
		this.vertices = [
				-0.5, -0.5, -0.5,
				-0.5, -0.5, 0.5,
				0.5, -0.5, 0.5,
				0.5, -0.5, -0.5,
				-0.5, 0.5, -0.5,
				-0.5, 0.5, 0.5,
				0.5, 0.5, 0.5,
				0.5, 0.5, -0.5
				];

		this.indices = [
				0, 3, 2,
				2, 1, 0,
				4, 5, 6, 
				6, 7, 4,
				7, 6, 2, 
				3, 7, 2,
				2, 6, 5, 
				5, 1, 2, 
				0, 1, 5, 
				0, 5, 4,
				4, 7, 3, 
				3, 0, 4
			];

		this.primitiveType=this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};

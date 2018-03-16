/**
 * MyCylinder
 * @constructor
 */
class MyCylinder extends CGFobject
{
	constructor(scene, slices, stacks)
	{
		super(scene);
		this.slices = slices;
		this.stacks = stacks;
		this.initBuffers();
	}

	initBuffers() 
	{
		this.vertices = [];
 		this.normals = [];
 		this.indices = [];
	
	var angle = (2*Math.PI)/this.slices;



		
		this.primitiveType = this.scene.gl.TRIANGLES;
		
		this.initGLBuffers();
	};
};

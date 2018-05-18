/**
 * MyQuad
 * @constructor
 */
class MyPrism extends CGFobject
{
	constructor(scene, slices, stacks) 
	{
		super(scene);
		this.slices = slices;
		this.stacks = stacks;

		this.initBuffers();
	};

	initBuffers() 
	{	
		this.vertices = [];
		this.indices = [];
		this.normals = [];

		let ang = 0;
		let angDelta = Math.PI * 2 / this.slices;
		
		let z = 0;
		let zDelta = 1.0/this.stacks;

		for (let j = 0; j < this.stacks; j++){

			for (let i = 0; i < this.slices; i++){
				this.vertices.push(Math.cos(ang), Math.sin(ang), z + zDelta);
				this.vertices.push(Math.cos(ang), Math.sin(ang), z);
				ang += angDelta;
				this.vertices.push(Math.cos(ang), Math.sin(ang), z + zDelta);
				this.vertices.push(Math.cos(ang), Math.sin(ang), z);
				for (let j = 0; j < 4; j++){
					this.normals.push(Math.cos(ang - angDelta/2), Math.sin(ang - angDelta/2), 0);
				}
			}
			
			for (let i = 0; i < this.slices * this.stacks * 4; i += 4){
				this.indices.push(i, i+1, i+2);
				this.indices.push(i+2, i+1, i+3);
			}

			z += zDelta;
	}
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	};
};

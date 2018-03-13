/**
 * MyPrism
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
	}

	initBuffers() 
	{
		this.vertices = [];
		this.indices = [];

		let ang = 0;
		let teta = Math.PI * 2 / this.slices;
	
		for (let i = 0; i < this.slices; i++){
			this.vertices.push(Math.cos(ang), Math.sen(ang), 0);
			this.vertices.push(Math.cos(ang), Math.sen(ang), 1);
			ang += teta;
			this.vertices.push(Math.cos(ang), Math.sen(ang), 0);
			this.vertices.push(Math.cos(ang), Math.sen(ang), 1);
			for(let j = 0 ; j < 4; j++){
				this.normals.push(Math.cos(ang+teta/2), Math.sen(ang + teta/2),0);
			}
		}

		for (let i = 0; i < this.slices; i++){
			this.indices.push(i, i+1, i+2);
			this.indices.push(i+2, i+3, i+4); 
		}
		
		this.indices = [];

		this.primitiveType = this.scene.gl.TRIANGLES;

		this.normals = [
		0, 0, 1, 
		0, 0, 1, 
		0, 0, 1, 
		0, 0, 1
		];
		
		this.initGLBuffers();
	};
};

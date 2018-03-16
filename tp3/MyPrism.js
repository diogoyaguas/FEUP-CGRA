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
 		this.normals = [];
 		this.indices = [];
	
	var angle = (2*Math.PI)/this.slices;

	for (var j = 0; j < this.stacks; j++) {
		//---------------slices------------------
		for (var i = 0; i < this.slices; i++) {

		this.vertices.push(Math.cos(i*angle));
		this.vertices.push(Math.sin(i*angle));
		this.vertices.push(j);

		this.vertices.push(Math.cos((i+1)*angle));
		this.vertices.push(Math.sin((i+1)*angle));
		this.vertices.push(j);

		this.vertices.push(Math.cos(i*angle));
		this.vertices.push(Math.sin(i*angle));
		this.vertices.push(j+1);

		this.vertices.push(Math.cos((i+1)*angle));
		this.vertices.push(Math.sin((i+1)*angle));
		this.vertices.push(j+1);

		//----------------------------------------------------------------

		this.indices.push(this.slices*4*j+4*i);
		this.indices.push(this.slices*4*j+4*i+1);
		this.indices.push(this.slices*4*j+4*i+2);

		this.indices.push(this.slices*4*j+4*i+3);
		this.indices.push(this.slices*4*j+4*i+2);
		this.indices.push(this.slices*4*j+4*i+1);

		//----------------------------------------------------------------


		this.normals.push(Math.cos(angle*(i+0.5)));
		this.normals.push(Math.sin(angle*(i+0.5)));
		this.normals.push(0);

		this.normals.push(Math.cos(angle*(i+0.5)));
		this.normals.push(Math.sin(angle*(i+0.5)));
		this.normals.push(0);

		this.normals.push(Math.cos(angle*(i+0.5)));
		this.normals.push(Math.sin(angle*(i+0.5)));
		this.normals.push(0);

		this.normals.push(Math.cos(angle*(i+0.5)));
		this.normals.push(Math.sin(angle*(i+0.5)));
		this.normals.push(0);


		}

	}

		
		this.primitiveType = this.scene.gl.TRIANGLES;
		
		this.initGLBuffers();
	};
};

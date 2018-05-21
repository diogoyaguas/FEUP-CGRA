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
		var teta=2*Math.PI/this.slices;
 	this.vertices = [
 	
 	];
 	this.normals=[];
	var teta=2*Math.PI/this.slices;
 	for(var j=0;j<=this.stacks;j++){
 		for(var i=0;i<this.slices;i++){
 			this.vertices.push(Math.cos(i*teta));
 			this.vertices.push(Math.sin(i*teta));
 			this.vertices.push(j*1.0/this.stacks);
 			this.normals.push(Math.cos((i+0.5)*teta));
			this.normals.push(Math.sin((i+0.5)*teta));
			this.normals.push(0);
 		}
 	}
 	for(var j=0;j<=this.stacks;j++){
 		for(var i=0;i<this.slices;i++){
 			this.vertices.push(Math.cos(i*teta));
 			this.vertices.push(Math.sin(i*teta));
 			this.vertices.push(j*1.0/this.stacks);
 			this.normals.push(Math.cos((i-0.5)*teta));
			this.normals.push(Math.sin((i-0.5)*teta));
			this.normals.push(0);

 		}
 	}

 this.indices=[];

 	for(var j=0;j<this.stacks;j++){
 		for(var i=0;i<this.slices;i++){
 			this.indices.push((this.stacks+1)*this.slices+(j+1)*this.slices+(i+1)%this.slices);
 			this.indices.push(j*this.slices+i);//+0.5
			this.indices.push((this.stacks+1)*this.slices+j*this.slices+(i+1)%this.slices);
			this.indices.push((j+1)*this.slices+i);//+0.5
 			this.indices.push(j*this.slices+i);//+0.5
 			this.indices.push((this.stacks+1)*this.slices+(j+1)*this.slices+(i+1)%this.slices);
 		}
 	}
 	
	console.log(this.vertices);
	console.log(this.normals);
	console.log(this.indices);
 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
	};
};

class MyClockHand extends CGFobject
{
	constructor(scene, length, angle) {
        super(scene);
        this.length = length;
        this.angle = angle;
		this.initBuffers();
	};

	setAngle(angle) {
	this.angle = angle;
	};

	initBuffers() 
	{
		this.vertices = [];
 		this.indices = [];
		this.normals = [];

		this.vertices.push(0,this.length,0);
		this.vertices.push(0.02,0,0);
		this.vertices.push(-0.02,0,0);

		this.normals.push(0,0,1);	
		this.normals.push(0,0,1);
		this.normals.push(0,0,1);

		this.indices.push(0,2,1);
		
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};
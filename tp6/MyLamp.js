class MyLamp extends CGFobject
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
		this.texCoords = [];

		let theta = Math.PI * 2 / this.slices;
		let phi = (Math.PI / 2.0) / this.stacks;

		for (let i = 0; i <= this.stacks; i++)
		{
			for (let j = 0; j < this.slices; j++)
			{
				let x = 1 * Math.cos(phi * i) * Math.cos(theta * j);
				let y = 1 * Math.cos(phi * i) * Math.sin(theta * j);
				let z = 1 * Math.sin(phi * i);
				this.vertices.push(x, y, z);
				this.normals.push(x, y, z);
			}
		}

		for (let i = 0; i < this.stacks; i++)
		{
			for (let j = 0; j < this.slices - 1; j++)
			{
				this.indices.push(i * this.slices + j, i * this.slices + j + 1, (i + 1) * this.slices + j);
				this.indices.push(i * this.slices + j + 1, (i + 1) * this.slices + j + 1, (i + 1) * this.slices + j);
			}

			this.indices.push(i * this.slices + this.slices - 1, i * this.slices, (i + 1) * this.slices + this.slices - 1);
			this.indices.push(i * this.slices, i * this.slices + this.slices, (i + 1) * this.slices + this.slices - 1);
		}

		var s = 0;
		var t = 0;
		var sinc = 1 / this.slices;
		var tinc = 1 / this.stacks;
		for (var a = 0; a <= this.stacks; a++)
		{
			for (var b = 0; b < this.slices; b++)
			{
				this.texCoords.push(s, t);
				s += sinc;
			}
			s = 0;
			t += tinc;
		}

		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	};

};
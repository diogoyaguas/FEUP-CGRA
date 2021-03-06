var degToRad = Math.PI / 180.0;

var BOARD_WIDTH = 6.0;
var BOARD_HEIGHT = 4.0;

var BOARD_A_DIVISIONS = 30;
var BOARD_B_DIVISIONS = 100;

class LightingScene extends CGFscene 
{
	constructor()
	{
		super();
	};

	init(application) 
	{
		super.init(application);

		this.initCameras();

		this.initLights();

		this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
		this.gl.clearDepth(100.0);
		this.gl.enable(this.gl.DEPTH_TEST);
		this.gl.enable(this.gl.CULL_FACE);
		this.gl.depthFunc(this.gl.LEQUAL);

		this.axis = new CGFaxis(this);

		// Scene elements
		this.table = new MyTable(this, 0, 1, 0, 1);
		this.wall = new Plane(this);
		this.floor = new MyQuad(this, 0, 10, 0, 12);
		this.left_wall=new MyQuad(this, -0.6, 1.55, -0.6, 1.55);

		this.prism = new MyPrism(this, 8, 20);
		this.cylinder = new MyCylinder(this, 8, 20);
		
		this.boardA = new Plane(this, BOARD_A_DIVISIONS, -0.25, 1.25, 0, 1);
		this.boardB = new Plane(this, BOARD_B_DIVISIONS, -0.0936, 1.0936, 0, 1);

		this.column =new MyCylinder(this,90,10);

		// Materials
		this.materialDefault = new CGFappearance(this);
		
		this.materialA = new CGFappearance(this);
		this.materialA.setAmbient(0.3,0.3,0.3,1);
		this.materialA.setDiffuse(0.6,0.6,0.6,1);
		this.materialA.setSpecular(0,0.2,0.8,1);
		this.materialA.setShininess(120);

		this.materialB = new CGFappearance(this);
		this.materialB.setAmbient(0.3,0.3,0.3,1);
		this.materialB.setDiffuse(0.6,0.6,0.6,1);
		this.materialB.setSpecular(0.8,0.8,0.8,1);	
		this.materialB.setShininess(120);
		
		this.materialC = new CGFappearance(this);
		this.materialC.setAmbient(0.3,0.3,0.3,1);
		this.materialC.setDiffuse(0.6,0.6,0.6,1);
		this.materialC.setSpecular(0.8,0.8,0.8,1);	
		this.materialC.setShininess(120);

		this.tableAppearence = new CGFappearance(this);
		this.tableAppearence.setAmbient(0.1,0.1,0.1,1);
		this.tableAppearence.setDiffuse(0.86,0.47,0.14,1);
		this.tableAppearence.setSpecular(0.1,0.03,0.03,1);
		this.tableAppearence.setShininess(60);
		this.tableAppearence.loadTexture("../resources/images/table.png");

		this.floorAppearence = new CGFappearance(this);
		this.floorAppearence.setAmbient(0.1,0.1,0.1,1);
		this.floorAppearence.setDiffuse(0.6,0.6,0.6,1);
		this.floorAppearence.setSpecular(0.1,0.03,0.03,1);
		this.floorAppearence.setShininess(60);
		this.floorAppearence.loadTexture("../resources/images/floor.png");

		this.windowAppearence = new CGFappearance(this);
		this.windowAppearence.setAmbient(0.1,0.1,0.1,1);
		this.windowAppearence.setDiffuse(0.6,0.6,0.6,1);
		this.windowAppearence.setSpecular(0.1,0.03,0.03,1);
		this.windowAppearence.setShininess(60);
		this.windowAppearence.setTextureWrap("CLAMP_TO_EDGE", "CLAMP_TO_EDGE");
		this.windowAppearence.loadTexture("../resources/images/window.png");

		this.slidesAppearance = new CGFappearance(this);
		this.slidesAppearance.setAmbient(0.25,0.25,0.25,1);
		this.slidesAppearance.setDiffuse(0.75,0.75,0.75,1);
		this.slidesAppearance.setSpecular(0.25,0.25,0.25,1);	
		this.slidesAppearance.setShininess(10);
		this.slidesAppearance.setTextureWrap("CLAMP_TO_EDGE", "CLAMP_TO_EDGE");
		this.slidesAppearance.loadTexture("../resources/images/slides.png");

		this.boardAppearance = new CGFappearance(this);
		this.boardAppearance.setAmbient(0.25,0.25,0.25,1);
		this.boardAppearance.setDiffuse(0.25,0.25,0.25,1);
		this.boardAppearance.setSpecular(0.4,0.4,0.4,1);	
		this.boardAppearance.setShininess(120);
		this.boardAppearance.setTextureWrap("CLAMP_TO_EDGE", "CLAMP_TO_EDGE");
		this.boardAppearance.loadTexture("../resources/images/board.png");

		this.granitoAppearence = new CGFappearance(this);
		this.granitoAppearence.setAmbient(0.1,0.1,0.1,1);
		this.granitoAppearence.setDiffuse(0.6,0.6,0.6,1);
		this.granitoAppearence.setSpecular(0.1,0.03,0.03,1);
		this.granitoAppearence.setShininess(60);
		this.granitoAppearence.setTextureWrap("CLAMP_TO_EDGE", "CLAMP_TO_EDGE");
		this.granitoAppearence.loadTexture("../resources/images/granito.png");



		this.enableTextures(true);

	};

	initCameras() 
	{
		this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(30, 30, 30), vec3.fromValues(0, 0, 0));
	};

	initLights() 
	{
		this.setGlobalAmbientLight(0,0,0,0);
		
		// Positions for four lights
		this.lights[0].setPosition(4, 6, 1, 1);
		this.lights[0].setVisible(true); // show marker on light position (different from enabled)
		
		this.lights[1].setPosition(10.5, 6.0, 1.0, 1.0);
		this.lights[1].setVisible(true); // show marker on light position (different from enabled)

		this.lights[2].setPosition(10.5, 6.0, 5.0, 1.0);
		this.lights[2].setVisible(true); // show marker on light position (different from enabled)
		this.lights[3].setPosition(4, 6.0, 5.0, 1.0);
		this.lights[3].setVisible(true); // show marker on light position (different from enabled)

		this.lights[4].setPosition(1, 4, 7.5, 1.0);
		this.lights[4].setVisible(true);

		this.lights[0].setAmbient(0, 0, 0, 1);
		this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
		this.lights[0].setSpecular(1.0,1.0,0,1.0);
		this.lights[0].enable();

		this.lights[1].setAmbient(0, 0, 0, 1);
		this.lights[1].setDiffuse(1.0, 1.0, 1.0, 1.0);
		this.lights[1].enable();

		this.lights[2].setAmbient(0, 0, 0, 1);
		this.lights[2].setDiffuse(1.0, 1.0, 1.0, 1.0);
		this.lights[2].setSpecular(1.0, 1.0, 1.0, 1.0);
		this.lights[2].setConstantAttenuation(0);
		this.lights[2].setLinearAttenuation(1.0);
		this.lights[2].setQuadraticAttenuation(0);
		this.lights[2].enable();

		this.lights[3].setAmbient(0, 0, 0, 1);
		this.lights[3].setDiffuse(1.0, 1.0, 1.0, 1.0);
		this.lights[3].setSpecular(1.0,1.0,0,1.0);
		this.lights[3].setConstantAttenuation(0);
		this.lights[3].setLinearAttenuation(0);
		this.lights[3].setQuadraticAttenuation(1.0);
		this.lights[3].enable();

		this.lights[4].setAmbient(0, 0, 0, 1);
		this.lights[4].setDiffuse(1.0, 1.0, 1.0, 1.0);
		this.lights[4].setSpecular(1.0,1.0,0,1.0);
		this.lights[4].setConstantAttenuation(0);
		this.lights[4].setLinearAttenuation(0);
		this.lights[4].setQuadraticAttenuation(1.0);
		this.lights[4].enable();


	};

	updateLights() 
	{
		for (var i = 0; i < this.lights.length; i++)
			this.lights[i].update();
	}


	display() 
	{
		// ---- BEGIN Background, camera and axis setup

		// Clear image and depth buffer everytime we update the scene
		this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
		this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

		// Initialize Model-View matrix as identity (no transformation)
		this.updateProjectionMatrix();
		this.loadIdentity();

		// Apply transformations corresponding to the camera position relative to the origin
		this.applyViewMatrix();

		// Update all lights used
		this.updateLights();

		// Draw axis
		this.axis.display();

		this.materialDefault.apply();

		//this.prism.display();
		 
		//this.cylinder.display();

		// ---- END Background, camera and axis setup

		// ---- BEGIN Scene drawing section

		// Floor
		this.pushMatrix();
			this.translate(7.5, 0, 7.5);
			this.rotate(-90 * degToRad, 1, 0, 0);
			this.scale(15, 15, 0.2);
			this.floorAppearence.apply();
			this.floor.display();
		this.popMatrix();

		// Left Wall
		this.pushMatrix();
			this.translate(0, 4, 7.5);
			this.rotate(90 * degToRad, 0, 1, 0);
			this.scale(15, 8, 0.2);
			this.windowAppearence.apply();
			this.left_wall.display();
		this.popMatrix();

		// Plane Wall
		this.pushMatrix();
			this.translate(7.5, 4, 0);
			this.scale(15, 8, 0.2);
			this.wall.display();
		this.popMatrix();

		// First Table
		this.pushMatrix();
			this.translate(5, 0, 8);
			this.table.display();
		this.popMatrix();

		// Second Table
		this.pushMatrix();
			this.translate(12, 0, 8);
			this.table.display();
		this.popMatrix();

		// Board A
		this.pushMatrix();
			this.translate(4, 4.5, 0.2);
			this.scale(BOARD_WIDTH, BOARD_HEIGHT, 1);
			this.slidesAppearance.apply();
			this.boardA.display();
		this.popMatrix();

		// Board B
		this.pushMatrix();
			this.translate(10.5, 4.5, 0.2);
			this.scale(BOARD_WIDTH, BOARD_HEIGHT, 1);
			this.boardAppearance.apply();
			this.boardB.display();
		this.popMatrix();

		//Column A

		this.pushMatrix();
			this.granitoAppearence.apply();
			this.rotate(90 * degToRad, 1, 0, 0);
			this.translate(1 , 1, -8);
			this.scale(1, 1, 12);
			this.column.display();
		this.popMatrix();

		//Column B

		// ---- END Scene drawing section
	};
};

var degToRad = Math.PI / 180.0;

var BOARD_WIDTH = 6.0;
var BOARD_HEIGHT = 4.0;

var BOARD_A_DIVISIONS = 32;
var BOARD_B_DIVISIONS = 100;

var UPDATE_TIME = 0.05;

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

		this.enableTextures(true);

		this.gl.clearColor(0.529, 0.808, 0.922, 1.0);
		this.gl.clearDepth(100.0);
		this.gl.enable(this.gl.DEPTH_TEST);
		this.gl.enable(this.gl.CULL_FACE);
		this.gl.depthFunc(this.gl.LEQUAL);

		this.axis = new CGFaxis(this);
		this.Light1 = true; 
		this.Light2 = true; 
		this.Light3 = true;
		this.Light4 = true;
		this.show_axis = false;
		this.Speed = 3;

		// Scene elements
		this.car = new MyVehicle(this);
		this.terrain = new MyTerrain(this);

		// Materials
		this.materialDefault = new CGFappearance(this);
		this.floorAppearence = new CGFappearance(this);
		this.floorAppearence.loadTexture("resources/images/grass.png");
		this.floorAppearence.setAmbient(0.3,0.3,0.3,1);
		this.floorAppearence.setDiffuse(0.6,0.6,0.6,1);
		this.floorAppearence.setSpecular(0,0.2,0.8,1);
		this.floorAppearence.setShininess(120);

		this.setUpdatePeriod(UPDATE_TIME*1000);
	};

	initCameras() 
	{
		this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(30, 30, 30), vec3.fromValues(0, 0, 0));
	};

	initLights() 
	{
		this.setGlobalAmbientLight(0, 0, 0, 1.0);
		
		// Positions for four lights
		this.lights[0].setPosition(4, 6, 1, 1);
		this.lights[0].setVisible(false); // show marker on light position (different from enabled)
		
		this.lights[1].setPosition(10.5, 6.0, 1.0, 1.0);
		this.lights[1].setVisible(false); // show marker on light position (different from enabled)

		this.lights[2].setPosition(10.5, 6.0, 5.0, 1.0);
		this.lights[2].setVisible(false);

		this.lights[3].setPosition(4, 6.0, 5.0, 1.0);
		this.lights[3].setVisible(false); // show marker on light position (different from enabled)

		this.lights[4].setPosition(1, 4, 7.5, 1.0);
		this.lights[4].setVisible(false); // show marker on light position (different from enabled)

		this.lights[0].setAmbient(0, 0, 0, 1);
		this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
		this.lights[0].setSpecular(1.0, 1.0, 0, 1.0);
		this.lights[0].enable();

		this.lights[1].setAmbient(0, 0, 0, 1);
		this.lights[1].setDiffuse(1.0, 1.0, 1.0, 1.0);
		this.lights[1].enable();

		this.lights[2].setSpecular(1, 1, 1, 1);
		this.lights[2].setAmbient(0, 0, 0, 1);
		this.lights[2].setDiffuse(1.0, 1.0, 1.0, 1.0);
		this.lights[2].setConstantAttenuation(0);
		this.lights[2].setLinearAttenuation(1);
		this.lights[2].setQuadraticAttenuation(0);
		this.lights[2].enable();

		this.lights[3].setAmbient(0, 0, 0, 1);
		this.lights[3].setDiffuse(1.0, 1.0, 1.0, 1.0);
		this.lights[3].setSpecular(1.0, 1.0, 0, 1.0);
		this.lights[3].setConstantAttenuation(0);
		this.lights[3].setLinearAttenuation(0);
		this.lights[3].setQuadraticAttenuation(0.2);
		this.lights[3].enable();

		this.lights[4].setAmbient(1, 1, 1, 1);
		this.lights[4].setDiffuse(1.0, 1.0, 1.0, 1.0);
		this.lights[4].setSpecular(1.0, 1.0, 0, 1.0);
		this.lights[4].setConstantAttenuation(0);
		this.lights[4].setLinearAttenuation(0);
		this.lights[4].setQuadraticAttenuation(0.2);
		this.lights[4].enable();

	};

	updateLights() 
	{
		for (var i = 0; i < this.lights.length; i++)
			this.lights[i].update();

		if (this.Light1)
			this.lights[0].enable();
		if (this.Light2)
			this.lights[1].enable();
		if (this.Light3)
			this.lights[2].enable();
		if (this.Light4)
			this.lights[3].enable();

		if (!this.Light1)
			this.lights[0].disable();
		if (!this.Light2)
			this.lights[1].disable();
		if (!this.Light3)
			this.lights[2].disable();
		if (!this.Light4)
			this.lights[3].disable();

	}

	checkKeys(){

	var text="Keys pressed: ";
	var keysPressed=false;

	if (this.gui.isKeyPressed("KeyW")){
		text+=" W ";
		keysPressed=true;
		this.car.moveForward();
	}

	if (this.gui.isKeyPressed("KeyS")){
		text+=" S ";
		keysPressed=true;
		this.car.moveBackward();
	}

	if(this.gui.isKeyPressed("KeyA")){
		text+=" A ";
		keysPressed = true;
		this.car.moveLeft();
	}

	if(this.gui.isKeyPressed("KeyD")){
		text+=" D ";
		keysPressed = true;
		this.car.moveRight();
	}

	if (keysPressed)
		console.log(text);
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
		if(this.show_axis)
			this.axis.display();

		this.materialDefault.apply();

		//Check keys

		this.checkKeys();

		// ---- END Background, camera and axis setup

		// ---- BEGIN Scene drawing section

		// Car
		this.pushMatrix();
		this.car.display();
		this.popMatrix();

		// Terrain

		this.pushMatrix();
		this.translate(0, -1.05, 0);
		this.scale(50, 1, 50);
		this.rotate(-Math.PI / 2 , 1, 0 ,0);
		this.floorAppearence.apply();
        this.terrain.display();
        this.popMatrix();

		// ---- END Scene drawing section
	};

	Menu(){ 
	console.log("Doing something..."); 
	};

	update(currTime){
		this.car.update(currTime);
	};

	Axis(){

		this.show_axis = !this.show_axis;
	}

};



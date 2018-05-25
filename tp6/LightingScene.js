let UPDATE_TIME = 1000;
let degToRad = Math.PI / 180;

class LightingScene extends CGFscene {

    constructor() {
        super();
    };

    init(application) {

        super.init(application);

        this.initCameras();

        this.initLights();

        this.enableTextures(true);

        this.gl.clearColor(0.529, 0.808, 0.922, 1.0);
        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.lastSpeed = 0;

        this.altimetry = [
            [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
            [0.0, 0.0, .0, 0.0, 0.0, 0.0, 0.0, 0.0],
            [0.0, 0.0, 0.0, 0.0, -1.0, 0.0, 0.0, 0.0],
            [0.0, 0.0, 0.0, 0.0, 0.0, -0.5, 0.0, 0.0],
            [0.0, 0.0, 3.0, 0.0, 0.0, 0.0, 0.0, 0.0],
            [0.0, 0.0, 5.0, 3.7, 0.0, 0.0, 0.0, 0.0],
            [0.0, 0.0, 4.0, 8, 3.3, .0, 0.0, 0.0],
            [0.0, 0.0, 0.0, 7.0, 6.8, 6.5, 0.0, 0.0],
            [0.0, 0.0, 0.0, 0.0, 7.0, 6.6, 7.0, 0.0]
        ];

        this.plane = [
            []
        ];

        // Scene elements
        this.car = new MyVehicle(this);
        this.terrain = new MyTerrain(this, 8, this.altimetry);
        this.plane = new MyTerrain(this, 8, this.plane);
        this.lake = new MyLake(this, 100);
        this.crane = new MyCrane(this);

        // GUI elements
        this.axis = new CGFaxis(this);
        this.Light1 = true;
        this.Light2 = true;
        this.Light3 = true;
        this.Light4 = true;
        this.Light5 = true;
        this.Light6 = true;
        this.Light7 = true;
        this.show_axis = false;
        this.Speed = this.car.speed;


        // Materials
        this.materialDefault = new CGFappearance(this);

        this.floorAppearence = new CGFappearance(this);
        this.floorAppearence.loadTexture("resources/images/grass.png");
        this.floorAppearence.setAmbient(0.8, 0.8, 0.8, 1);
        this.floorAppearence.setDiffuse(0.5, 0.5, 0.5, 1);
        this.floorAppearence.setSpecular(1, 1, 1, 1);

        this.wallAppearence = new CGFappearance(this);
        this.wallAppearence.loadTexture("resources/images/dirt.jpg");
        this.wallAppearence.setAmbient(0.8, 0.8, 0.8, 1);
        this.wallAppearence.setDiffuse(0.5, 0.5, 0.5, 1);
        this.wallAppearence.setSpecular(1, 1, 1, 1);

        this.Original = new CGFappearance(this);
        this.Original.loadTexture("resources/images/black.png");
        this.Original.setAmbient(0.8, 0.8, 0.8, 1);
        this.Original.setDiffuse(0.5, 0.5, 0.5, 1);
        this.Original.setSpecular(1, 1, 1, 1);

        this.Retro = new CGFappearance(this);
        this.Retro.loadTexture("resources/images/retro.jpg");
        this.Retro.setAmbient(0.8, 0.8, 0.8, 1);
        this.Retro.setDiffuse(0.5, 0.5, 0.5, 1);
        this.Retro.setSpecular(1, 1, 1, 1);

        this.Pink = new CGFappearance(this);
        this.Pink.loadTexture("resources/images/pink.jpg");
        this.Pink.setAmbient(0.8, 0.8, 0.8, 1);
        this.Pink.setDiffuse(0.5, 0.5, 0.5, 1);
        this.Pink.setSpecular(1, 1, 1, 1);

        this.vehicleAppearances = [this.Original, this.Retro, this.Pink];
        this.vehicleAppearanceList = {
            'Original': 0,
            'Retro': 1,
            'Pink': 2
        }
        this.Textures = 'Original';
        this.currVehicleAppearance = this.vehicleAppearanceList[this.Textures];

        this.setUpdatePeriod(UPDATE_TIME / 60);

    };

    initCameras() {
        this.camera = new CGFcamera(0.5, 0.1, 500, vec3.fromValues(50, 50, 50), vec3.fromValues(0, 0, 0));
    };

    initLights() {
        this.setGlobalAmbientLight(0, 0, 0, 1.0);

        console.log(this.lights.length);

        console.log(this.lights.length);

        this.lights[0].setPosition(4.0, 6.0, 1.0, 1.0);
        this.lights[0].setVisible(false); // show marker on light position (different from enabled)

        this.lights[1].setPosition(10.5, 6.0, 1.0, 1.0);
        this.lights[1].setVisible(false); // show marker on light position (different from enabled)

        this.lights[2].setPosition(10.5, 6.0, 5.0, 1.0);
        this.lights[2].setVisible(false);

        this.lights[3].setPosition(4.0, 6.0, 5.0, 1.0);
        this.lights[3].setVisible(false); // show marker on light position (different from enabled)

        this.lights[4].setPosition(-10, 4.0, 10, 1.0);
        this.lights[4].setVisible(false); // show marker on light position (different from enabled)

        this.lights[5].setPosition(-8.0, 6.0, -8.0, 1.0);
        this.lights[5].setVisible(false); // show marker on light position (different from enabled)

        this.lights[6].setPosition(12, 12, 15, 1.0);
        this.lights[6].setVisible(false); // show marker on light position (different from enabled)

        this.lights[0].setAmbient(0, 0, 0, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].setSpecular(1.0, 1.0, 0, 1.0);
        this.lights[0].enable();

        this.lights[1].setAmbient(0, 0, 0, 1);
        this.lights[1].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[1].setSpecular(1.0, 1.0, 0, 1.0);
        this.lights[1].enable();

        this.lights[2].setAmbient(0, 0, 0, 1);
        this.lights[2].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[2].setSpecular(1.0, 1.0, 0, 1.0);
        this.lights[2].enable();

        this.lights[3].setAmbient(0, 0, 0, 1);
        this.lights[3].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[3].setSpecular(1.0, 1.0, 0, 1.0);
        this.lights[3].enable();

        this.lights[4].setAmbient(0, 0, 0, 1);
        this.lights[4].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[4].setSpecular(1.0, 1.0, 0, 1.0);
        this.lights[4].enable();

        this.lights[5].setAmbient(0, 0, 0, 1);
        this.lights[5].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[5].setSpecular(1.0, 1.0, 0, 1.0);
        this.lights[5].enable();

        this.lights[6].setAmbient(0, 0, 0, 1);
        this.lights[6].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[6].setSpecular(1.0, 1.0, 0, 1.0);
        this.lights[6].enable();

    };

    updateLights() {
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
        if (this.Light5)
            this.lights[4].enable();
        if (this.Light6)
            this.lights[5].enable();
        if (this.Light7)
            this.lights[6].enable();

        if (!this.Light1)
            this.lights[0].disable();
        if (!this.Light2)
            this.lights[1].disable();
        if (!this.Light3)
            this.lights[2].disable();
        if (!this.Light4)
            this.lights[3].disable();
        if (!this.Light5)
            this.lights[4].disable();
        if (!this.Light6)
            this.lights[5].disable();
        if (!this.Light7)
            this.lights[6].disable();


    }

    checkKeys() {

        var text = "Keys pressed: ";
        var keysPressed = false;

        if (this.gui.isKeyPressed("KeyW")) {
            text += " W ";
            keysPressed = true;
            if(this.car.moving)
            this.car.moveForward();
            this.Speed = this.car.speed * 100;
        }

        if (this.gui.isKeyPressed("KeyS")) {
            text += " S ";
            keysPressed = true;
            if(this.car.moving)
            this.car.moveBackward();
            this.Speed = this.car.speed * 100;
        }

        if (this.gui.isKeyPressed("KeyA")) {
            text += " A ";
            keysPressed = true;
            if(this.car.moving)
            this.car.moveLeft();
        }

        if (this.gui.isKeyPressed("KeyD")) {
            text += " D ";
            keysPressed = true;
            if(this.car.moving)
            this.car.moveRight();
        }

        if (keysPressed)
            console.log(text);
    }


    display() {
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
        if (this.show_axis)
            this.axis.display();

        this.materialDefault.apply();

        //Check keys

        this.checkKeys();

        // ---- END Background, camera and axis setup

        // ---- BEGIN Scene drawing section

        // Car
        this.pushMatrix();
        this.vehicleAppearances[this.currVehicleAppearance].apply();
        this.car.display();
        this.popMatrix();

        // Lake
        this.pushMatrix();
        this.rotate(Math.PI / 2 - this.lake.getAngle(), 0, 1, 0);
        this.translate(0, -0.1, 0);
        this.scale(23, 1, 23);
        this.rotate(-Math.PI / 2, 1, 0, 0);
        this.lake.display();
        this.popMatrix();

        // Walls
        this.pushMatrix();
        this.translate(0, 5, 0);
        this.scale(50, 50, 1);
        this.translate(0, -0.6, 25);
        this.wallAppearence.apply();
        this.plane.display();
        this.popMatrix();

        this.pushMatrix();
        this.rotate(Math.PI / 2, 0, 1, 0);
        this.translate(0, 5, 0);
        this.scale(50, 50, 1);
        this.translate(0, -0.6, 25);
        this.wallAppearence.apply();
        this.plane.display();
        this.popMatrix();

        this.pushMatrix();
        this.rotate(Math.PI, 0, 1, 0);
        this.translate(0, 5, 0);
        this.scale(50, 50, 1);
        this.translate(0, -0.6, 25);
        this.wallAppearence.apply();
        this.plane.display();
        this.popMatrix();

        this.pushMatrix();
        this.rotate(-Math.PI / 2, 0, 1, 0);
        this.translate(0, 5, 0);
        this.scale(50, 50, 1);
        this.translate(0, -0.6, 25);
        this.wallAppearence.apply();
        this.plane.display();
        this.popMatrix();

        this.pushMatrix();
        this.rotate(-Math.PI / 2, 0, 1, 0);
        this.rotate(Math.PI / 2, 1, 0, 0);
        this.translate(0, 5, 0);
        this.scale(50, 50, 1);
        this.translate(0, -0.1, 50);
        this.wallAppearence.apply();
        this.plane.display();
        this.popMatrix();

        // Terrain
        this.pushMatrix();
        this.translate(0, 0, 0);
        this.scale(50, 1, 50);
        this.rotate(-Math.PI / 2, 1, 0, 0);
        this.floorAppearence.apply();
        this.terrain.display();
        this.popMatrix();

        // Crane
        this.pushMatrix();
        this.translate(-15, 0, 12);
        this.rotate(-Math.PI / 2, 0, 1, 0);
        this.crane.display();
        this.popMatrix();

        // ---- END Scene drawing section
    };

    Menu() {
        console.log("Doing something...");
    };

    update(currTime) {

        if (this.Speed != this.lastSpeed) {

            this.car.speed = this.Speed / 100;
            this.lastSpeed = this.Speed;
        }

        this.car.update();
        this.currVehicleAppearance = this.vehicleAppearanceList[this.Textures];

         if (this.car.x < -6.5 && this.car.x > -9 && this.car.z > -13 && this.car.z < -10){
            this.car.moving = false;
            this.car.speed = 0;
            this.crane.update(this.car);
         }

        let time = (currTime - this.lastUpdate);

        this.lake.setAngle(this.lake.getAngle() + time / 100000);

        this.lastUpdate = currTime;


    };

    Axis() {

        this.show_axis = !this.show_axis;

    }

};
class MyVehicleStructure extends CGFobject {
    constructor(scene) {
        super(scene);

        this.quad = new MyUnitCubeQuad(this.scene);
        this.front_wheel = new MyWheel(this.scene);
        this.back_wheel = new MyWheel(this.scene);
        this.substitute_wheel = new MyWheel(this.scene);
        this.sphere = new MyLamp(this.scene, 30, 5);
        this.trapezius = new MyTrapezius(this.scene, 0.8, 1.2, 0.3);
        this.cylinder = new MyCylinder(this.scene, 30, 1);
        this.circle = new MyCircle(this.scene, 30, 1);
        this.windows = new MyTrapezius(this.scene, 2, 1, 0.5);

        this.glassAppearence = new CGFappearance(this.scene);
        this.glassAppearence.setAmbient(0.3, 0.3, 0.3, 1);
        this.glassAppearence.setDiffuse(0.9, 0.9, 0.9, 1);
        this.glassAppearence.setSpecular(0.1, 0.1, 0.1, 1);
        this.glassAppearence.setShininess(10);
        this.glassAppearence.loadTexture("resources/images/glass.jpg");

        this.blackMetalAppearence = new CGFappearance(this.scene);
        this.blackMetalAppearence.setAmbient(0.3, 0.3, 0.3, 1);
        this.blackMetalAppearence.setDiffuse(0.9, 0.9, 0.9, 1);
        this.blackMetalAppearence.setSpecular(0.1, 0.1, 0.1, 1);
        this.blackMetalAppearence.setShininess(10);
        this.blackMetalAppearence.loadTexture("resources/images/black.png");

        this.headlightAppearence = new CGFappearance(this.scene);
        this.headlightAppearence.setAmbient(0.3, 0.3, 0.3, 1);
        this.headlightAppearence.setDiffuse(0.9, 0.9, 0.9, 1);
        this.headlightAppearence.setSpecular(0.1, 0.1, 0.1, 1);
        this.headlightAppearence.setShininess(10);
        this.headlightAppearence.loadTexture("resources/images/headlight.png");

		this.metalAppearence = new CGFappearance(this.scene);
        this.metalAppearence.setAmbient(0.3, 0.3, 0.3, 1);
        this.metalAppearence.setDiffuse(0.9, 0.9, 0.9, 1);
        this.metalAppearence.setSpecular(0.1, 0.1, 0.1, 1);
        this.metalAppearence.setShininess(10);
        this.metalAppearence.loadTexture("resources/images/metal.png");

        this.licenseAppearence = new CGFappearance(this.scene);
        this.licenseAppearence.setAmbient(0.3, 0.3, 0.3, 1);
        this.licenseAppearence.setDiffuse(0.9, 0.9, 0.9, 1);
        this.licenseAppearence.setSpecular(0.1, 0.1, 0.1, 1);
        this.licenseAppearence.setShininess(10);
        this.licenseAppearence.loadTexture("resources/images/license.png");
    };

    display() {

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI , 0, 1, 0);

        //body down
        this.scene.pushMatrix();
        this.scene.translate(3, 0.1, 0);
        this.scene.scale(4, 0.2, 2.5);
        this.quad.display();
        this.scene.popMatrix();

        //body up
        this.scene.pushMatrix();
        this.scene.translate(3.35, 2.24, 0);
        this.scene.scale(3.3, 0.2, 2.5);
        this.quad.display();
        this.scene.popMatrix();

        //hood
        this.scene.pushMatrix();
        this.scene.translate(1.25, 1, 0);
        this.scene.scale(1, 0.2, 2);
        this.quad.display();
        this.scene.popMatrix();

        //body front
        this.scene.pushMatrix();
        this.scene.translate(0.85, 0.5, 0);
        this.scene.scale(0.2, 1, 2);
        this.quad.display();
        this.scene.popMatrix();

        //body front right
        this.scene.pushMatrix();
        this.scene.translate(1.25, 0.5, -0.9);
        this.scene.scale(1, 1, 0.2);
        this.quad.display();
        this.scene.popMatrix();

        //body front left
        this.scene.pushMatrix();
        this.scene.translate(1.25, 0.5, 0.9);
        this.scene.scale(1, 1, 0.2);
        this.quad.display();
        this.scene.popMatrix();

        //body big front
        this.scene.pushMatrix();
        this.scene.translate(1.8, 0.7, 0);
        this.scene.scale(0.2, 1.1, 2.5);
        this.quad.display();
        this.scene.popMatrix();

        //body back
        this.scene.pushMatrix();
        this.scene.translate(4.9, 0.7, 0);
        this.scene.scale(0.2, 1.1, 2.5);
        this.quad.display();
        this.scene.popMatrix();

        //body down right
        this.scene.pushMatrix();
        this.scene.translate(3.4, 0.7, 1.15);
        this.scene.scale(3.1, 1.1, 0.2);
        this.quad.display();
        this.scene.popMatrix();

        //body up right back
        this.scene.pushMatrix();
        this.scene.translate(4.3, 1.7, 1.125);
        this.scene.scale(1.4, 1.1, 0.25);
        this.quad.display();
        this.scene.popMatrix();

        //body up right front
        this.scene.pushMatrix();
        this.scene.translate(2.06, 1.7, 1.12);
        this.scene.scale(0.72, 0.9, 0.25);
        this.quad.display();
        this.scene.popMatrix();

        //body down left
        this.scene.pushMatrix();
        this.scene.translate(3.4, 0.7, -1.15);
        this.scene.scale(3.1, 1.1, 0.2);
        this.quad.display();
        this.scene.popMatrix();

        //body up left back
        this.scene.pushMatrix();
        this.scene.translate(4.3, 1.7, -1.12);
        this.scene.scale(1.4, 1.1, 0.25);
        this.quad.display();
        this.scene.popMatrix();

        //body up right front
        this.scene.pushMatrix();
        this.scene.translate(2.06, 1.7, -1.12);
        this.scene.scale(0.72, 0.9, 0.25);
        this.quad.display();
        this.scene.popMatrix();

        // headlight
        this.scene.pushMatrix();
        this.scene.translate(0.75, 0.8, -0.7);
        this.scene.rotate(-Math.PI / 2, 0, 1, 0);
        this.scene.scale(0.20, 0.20, 0.20);
        this.headlightAppearence.apply();
        this.sphere.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.75, 0.8, 0.7);
        this.scene.rotate(-Math.PI / 2, 0, 1, 0);
        this.scene.scale(0.20, 0.20, 0.20);
        this.headlightAppearence.apply();
        this.sphere.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.75, 0.15, 0.6);
        this.scene.scale(0.2, 0.15, 0.3);
        this.headlightAppearence.apply();
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.75, 0.15, -0.6);
        this.scene.scale(0.2, 0.15, 0.3);
        this.headlightAppearence.apply();
        this.quad.display();
        this.scene.popMatrix();

        //license plate front
        this.scene.pushMatrix();
        this.scene.translate(0.75, 0.35, 0,5);
        this.scene.scale(0.0005, 0.2, 0.7);
        this.licenseAppearence.apply();
        this.quad.display();
        this.scene.popMatrix();

        //license plate back
		this.scene.pushMatrix();
		this.scene.translate(5, 0.4, 0.57);
        this.scene.scale(0.0005, 0.2, 0.7);
        this.licenseAppearence.apply();
        this.quad.display();
        this.scene.popMatrix();

        // mudguards
        this.scene.pushMatrix();
        this.scene.translate(3.7, 0.4, 1);
        this.scene.scale(1.5, 1.5, 1.7);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.blackMetalAppearence.apply();
        this.trapezius.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(3.7, 0.4, -1.45);
        this.scene.scale(1.5, 1.5, 1.7);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.blackMetalAppearence.apply();
        this.trapezius.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(1.05, 0.4, 1);
        this.scene.scale(1.5, 1.5, 1.7);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.blackMetalAppearence.apply();
        this.trapezius.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(1.05, 0.4, -1.45);
        this.scene.scale(1.5, 1.5, 1.7);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.blackMetalAppearence.apply();
        this.trapezius.display();
        this.scene.popMatrix();

        //front glass 
        this.scene.pushMatrix();
        this.scene.translate(1.8, 1.7, 0);
        this.scene.scale(0.2, 0.9, 2);
        this.glassAppearence.apply();
        this.quad.display();
        this.scene.popMatrix();

        //back glass 
        this.scene.pushMatrix();
        this.scene.translate(4.9, 1.7, 0);
        this.scene.scale(0.2, 0.9, 2);
        this.glassAppearence.apply();
        this.quad.display();
        this.scene.popMatrix();

        //right glass 
        this.scene.pushMatrix();
        this.scene.translate(3, 1.7, 1.15);
        this.scene.scale(1.2, 0.9, 0.2);
        this.glassAppearence.apply();
        this.quad.display();
        this.scene.popMatrix();

        //left glass 
        this.scene.pushMatrix();
        this.scene.translate(3, 1.7, -1.15);
        this.scene.scale(1.2, 0.9, 0.2);
        this.glassAppearence.apply();
        this.quad.display();
        this.scene.popMatrix();

        //back_wheel 1
        this.scene.pushMatrix();
        this.scene.translate(1.7, -0.7, 1);
        this.front_wheel.display();
        this.scene.popMatrix();

        //front_wheel 1
        this.scene.pushMatrix();
        this.scene.translate(4.4, -0.7, 1);
        this.back_wheel.display();
        this.scene.popMatrix();

        //back_wheel 2
        this.scene.pushMatrix();
        this.scene.translate(1.7, -0.7, -1.4);
        this.front_wheel.display();
        this.scene.popMatrix();

        //front_wheel 2
        this.scene.pushMatrix();
        this.scene.translate(4.4, -0.7, -1.4);
        this.back_wheel.display();
        this.scene.popMatrix();

        // substitute_wheel
        this.scene.pushMatrix();
        this.scene.translate(5, 0.45, -0.4);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.substitute_wheel.display();
        this.scene.popMatrix();

         //axis1
	    this.scene.pushMatrix();
	    this.scene.translate(1.70,-0.5,-1);
	    this.scene.scale(0.075, 0.075, 2.1);
	    this.blackMetalAppearence.apply();
	    this.cylinder.display();
	    this.scene.popMatrix();

	    //axis2
	    this.scene.pushMatrix();
	    this.scene.translate(4.4,-0.5,-1);
	    this.scene.scale(0.075, 0.075, 2.1);
	    this.blackMetalAppearence.apply();
	    this.cylinder.display();
	    this.scene.popMatrix();

	    //axis3
	    this.scene.pushMatrix();
	    this.scene.rotate(Math.PI/2, 0, 1, 0);
	    this.scene.translate(0,-0.5,1.7);
	    this.scene.scale(0.075, 0.075, 2.7);
	    this.blackMetalAppearence.apply();
	    this.cylinder.display();
	    this.scene.popMatrix();

	    //door handle left
	    this.scene.pushMatrix();
        this.scene.translate(3.4, 1, -1.3);
        this.scene.scale(0.3, 0.05, 0.05);
       	this.metalAppearence.apply();
        this.quad.display();
        this.scene.popMatrix();

		//door handle right
        this.scene.pushMatrix();
        this.scene.translate(3.4, 1, 1.3);
        this.scene.scale(0.3, 0.05, 0.05);
       	this.metalAppearence.apply();
        this.quad.display();
        this.scene.popMatrix();

        //rearview mirror
	    this.scene.pushMatrix();
	    this.scene.rotate(Math.PI/2, 0, 0, 1);
	    this.scene.translate(-1, -3.9, -2);
	    this.scene.scale(0.1, 0.1, 0.35);
	    this.metalAppearence.apply();
	   // this.cylinder.display();
	    this.scene.popMatrix();

        this.scene.popMatrix();

    }
};
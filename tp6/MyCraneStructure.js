class MyCraneStructure extends CGFobject 
{

    constructor(scene) 
    {
        super(scene);
        
        this.cylinder = new MyCylinder(this.scene, 30, 1);
        this.circle = new MyCircle(this.scene, 100);
        this.arm = new MyArm(this.scene);
        
        this.iman = new MyIman(this.scene);

        this.rotateCar = false;
		this.carView = true;
	 	
		this.verticalCar = Math.PI;
        this.verticalAngle = 0;
        this.horizontalAngle = 0;

        this.metalAppearence = new CGFappearance(this.scene);
		this.metalAppearence.loadTexture("resources/images/metal.jpg");
		this.metalAppearence.setAmbient(0.3,0.3,0.3,1);
		this.metalAppearence.setDiffuse(0.6,0.6,0.6,1);
		this.metalAppearence.setSpecular(0,0.2,0.8,1);
		this.metalAppearence.setShininess(120);
    };

    display()
    {
        this.scene.pushMatrix()
        this.metalAppearence.apply();       

        // Base
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.scene.translate(0, 0.5, 0);
        this.scene.scale(1.5,1.5,1.3);
	  	 	this.cylinder.display();
	    this.scene.popMatrix();
    
        // Base Top
	    this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.scene.translate(0, 0.5, 1.3);
        this.scene.scale(1.5,1.5,1);
	       this.circle.display();
	    this.scene.popMatrix();

	    this.scene.translate(0, 0, -0.5);

		this.scene.pushMatrix();

	    this.scene.rotate(this.verticalAngle, 0, 1, 0);

	    this.scene.pushMatrix();

	    this.scene.rotate(Math.PI, 0, 1, 0);
    
        // First Arm
	    this.scene.pushMatrix();
        this.scene.translate(0, 1, 0);
        this.scene.rotate(-Math.PI/2.8 , 1, 0, 0);
        this.scene.scale(0.5, 0.5, 11);
	       this.arm.display();
	    this.scene.popMatrix();

        // Articulation
	    this.scene.pushMatrix();
	    this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.translate(-5.1, 10.8, -0.5);
        this.scene.scale(0.8,0.8,1.1)
	  	 	this.cylinder.display();
	    this.scene.popMatrix();

        // Articulation Top 1
	     this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/2, 0, 1, 0);
        this.scene.translate(5.1, 10.8, 0.5);
        this.scene.scale(0.8,0.8,0.8)
	       this.circle.display();
	    this.scene.popMatrix();

	    // Articulation Top 2
	     this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.translate(-5.1, 10.8, 0.6);
        this.scene.scale(0.8,0.8,0.8)
	       this.circle.display();
	    this.scene.popMatrix();

	   // Second Arm
	    this.scene.pushMatrix();
        this.scene.translate(0, 10.8, 5.3);
        this.scene.rotate(this.horizontalAngle, 1, 0, 0);
        this.scene.rotate(Math.PI/4 , 1, 0, 0);
        this.scene.scale(0.5, 0.5, 3.6);
	       this.arm.display();
	    this.scene.popMatrix();
	
		// Iman
		this.scene.pushMatrix();
		this.scene.translate(0,-1.59,-7);
		this.scene.translate(0, -(11 * Math.cos(Math.PI/2.8) - 3.6 * Math.cos(Math.PI / 4 + this.horizontalAngle) - 4), 11 * Math.sin(Math.PI/2.8)- 4 * Math.sin(Math.PI / 4 + this.horizontalAngle) );
		this.iman.display();
		this.scene.popMatrix();

		this.scene.popMatrix();

		this.scene.popMatrix();

		this.scene.pushMatrix();

		if(this.rotateCar)
		this.scene.rotate(this.verticalCar - Math.PI, 0, 1, 0);

		this.scene.pushMatrix();
		this.scene.translate(8,0,-11.5);
		this.scene.vehicleAppearances[this.scene.currVehicleAppearance].apply();
		if(this.verticalCar > 0.05) this.scene.car.display();
		this.scene.popMatrix();

		this.scene.popMatrix();

        this.scene.popMatrix();

    }

    set(angle1, angle2, bool1, bool2) {

       this.verticalAngle = angle1;
       this.horizontalAngle = angle2;
       this.verticalCar = angle1;
       this.rotateCar = bool1;
       this.carView = bool2;

    }

}

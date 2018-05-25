class MyCraneStructure extends CGFobject 
{

    constructor(scene) 
    {
        super(scene);
        
        this.cylinder = new MyCylinder(this.scene, 30, 1);
        this.circle = new MyCircle(this.scene, 100);
        this.prism = new MyPrism(this.scene, 6, 1);
        this.hexagon = new MyCircle(this.scene, 6);
        this.iman = new MyIman(this.scene);

        this.vertical_angle = 0;
        this.horizontal_angle = 0;

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

	    this.scene.rotate(this.vertical_angle, 0, 1, 0);
    
        // First Arm
	    this.scene.pushMatrix();
        this.scene.translate(0, 1, 0);
        this.scene.rotate(-Math.PI/2.8 , 1, 0, 0);
        this.scene.scale(0.5, 0.5, 11);
	       this.prism.display();
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
        this.scene.rotate(this.horizontal_angle, 1, 0, 0);
        this.scene.rotate(Math.PI/4 , 1, 0, 0);
        this.scene.scale(0.5, 0.5, 3.6);
	       this.prism.display();
	    this.scene.popMatrix();

	    // Second Arm Top
	    this.scene.pushMatrix();
        this.scene.translate(0, 8.27, 7.8);
        this.scene.rotate(this.horizontal_angle, 1, 0, 0);
        this.scene.rotate(Math.PI/4 , 1, 0, 0);
        this.scene.scale(0.5, 0.5, 1);
	       this.hexagon.display();
	    this.scene.popMatrix();
	
		// Iman
	    this.scene.translate(0,0,1.5);
		this.scene.translate(0, -Math.sin(this.horizontal_angle), -Math.cos(this.horizontal_angle) - 1);
		this.iman.display();

		
        this.scene.popMatrix();

    }

    setAngle(angle1, angle2) {

       this.vertical_angle = angle1;
       this.horizontal_angle = angle2;

    }
}

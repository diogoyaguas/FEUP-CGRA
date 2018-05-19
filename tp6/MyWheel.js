/**
 * MyWheel
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyWheel extends CGFobject
{
	constructor(scene)
	{
        super(scene);
        this.cylinder = new MyCylinder(this.scene, 30, 1);
        this.circle = new MyCircle(this.scene, 30, 1);

        this.tire = new CGFappearance(this.scene);
		this.tire.loadTexture("resources/images/tire.jpg");
		this.tire.setAmbient(0.3,0.3,0.3,1);
		this.tire.setDiffuse(0.6,0.6,0.6,1);
		this.tire.setSpecular(0,0.2,0.8,1);
		this.tire.setShininess(120);

		this.rim = new CGFappearance(this.scene);
		this.rim.loadTexture("resources/images/rim.png");
		this.rim.setAmbient(0.3,0.3,0.3,1);
		this.rim.setDiffuse(0.6,0.6,0.6,1);
		this.rim.setSpecular(0,0.2,0.8,1);
		this.rim.setShininess(120);

		this.angle_wheel = 0;
		this.rotate_wheel = 0;

	};

	display() {
        
        this.scene.pushMatrix();
        this.scene.translate(0, 0.2 , 0);
        this.scene.rotate(this.rotate_wheel, 0, 1, 0);
        this.scene.rotate(this.angle_wheel, 0, 0, 1);


	    this.scene.pushMatrix();
	    this.scene.scale(0.5, 0.5, 0.4);
	    this.tire.apply();
	    this.cylinder.display();
	    this.scene.popMatrix();

	    this.scene.pushMatrix();
	    this.scene.translate(0, 0, 0.40);
	    this.scene.scale(0.5, 0.5, 0.25);
	    this.rim.apply();
	    this.circle.display();
	    this.scene.popMatrix();

	    this.scene.pushMatrix();
	    this.scene.translate(0, 0, 0);
	    this.scene.rotate(Math.PI, 1, 0, 0);
	    this.scene.scale(0.5, 0.5, 0.25);
	    this.rim.apply();
	    this.circle.display();
	    this.scene.popMatrix();

	    this.scene.popMatrix();
	};


    setAngle(angle) {

       this.angle_wheel = angle; 
    }

    setRotate(rotate) {

    	this.rotate_wheel = rotate;
    }
}
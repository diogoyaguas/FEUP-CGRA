class MyClock extends CGFobject
{
	constructor(scene) 
	{
        super(scene);
        this.cylinder = new MyCylinder(scene, 12, 1);
        this.circle = new MyCircle(scene, 8, 20);
        this.hourHand =  new MyClockHand(scene, 0.4, 0);
		this.minuteHand =  new MyClockHand(scene, 0.7, 0);
		this.secondHand =  new MyClockHand(scene, 0.2, 0);

        this.clockAppearance = new CGFappearance(scene);
		this.clockAppearance.setAmbient(1, 1, 1, 1);
        this.clockAppearance.setDiffuse(1, 1, 1, 1);
        this.clockAppearance.setSpecular(1, 1, 1, 1);
		this.clockAppearance.setShininess(50);
		this.clockAppearance.loadTexture("../resources/images/clock.png");

		this.materialBlackPointer = new CGFappearance(scene);
		this.materialBlackPointer.setAmbient(1, 1, 1, 1);
		this.materialBlackPointer.setSpecular(0,0,0,1);
		this.materialBlackPointer.setShininess(1);
		this.materialBlackPointer.setDiffuse(0,0,0,1);

		this.materialYellowPointer = new CGFappearance(scene);
		this.materialYellowPointer.setAmbient(1, 1, 1, 1);
		this.materialYellowPointer.setSpecular(1,1,0,1);
		this.materialYellowPointer.setShininess(1);
		this.materialYellowPointer.setDiffuse(1,1,0,1);
    };
    
	display() 
	{	
		this.cylinder.display();

	this.scene.pushMatrix();
		this.materialBlackPointer.apply();
		this.scene.translate(0, 0, 1.010);
		this.hourHand.setAngle(Math.PI/2);
		this.hourHand.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.materialBlackPointer.apply();
		this.scene.translate(0, 0, 1.012);
		this.minuteHand.setAngle(Math.PI);
		this.minuteHand.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.materialYellowPointer.apply();
		this.scene.translate(0, 0, 1.015);
		this.secondHand.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.clockAppearance.apply();
		this.scene.translate(0, 0, 0.95);
		this.secondHand.setAngle(3*Math.PI/2);
		this.circle.display();
	this.scene.popMatrix();
	};
};
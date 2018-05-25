class MyClock extends CGFobject
{
	constructor(scene) 
	{
          super(scene);
        this.lastUpdate = (new Date).getTime();

        this.clockFace = new MyCircle(scene, 12);
        this.cylinder = new MyCylinder(scene, 12, 1);

        this.hoursCh = new MyClockHand(scene, 0.3, 0.03);
        this.hoursCh.setAngle(90);

        this.minutesCh = new MyClockHand(scene, 0.5, 0.03);
        this.minutesCh.setAngle(180);

        this.secondsCh = new MyClockHand(scene, 0.55, 0.03);
        this.secondsCh.setAngle(270);

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
            this.clockAppearance.apply();
            this.scene.translate(0, 0 , 1);
            this.clockFace.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.materialBlackPointer.apply();
            this.scene.translate(0, 0 , 1.1);
            this.hoursCh.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.materialBlackPointer.apply();
            this.scene.translate(0, 0 , 1.1);
            this.minutesCh.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.materialYellowPointer.apply();
            this.scene.translate(0, 0 , 1.1);
            this.secondsCh.display();
        this.scene.popMatrix();
    };

    update(currTime){          
        let time = (currTime - this.lastUpdate);
        this.lastUpdate = currTime;

        this.hoursCh.setAngle(this.hoursCh.getAngle() + time/1000 * 360/60/60/60);
        this.minutesCh.setAngle(this.minutesCh.getAngle() + time/1000 * 360/60/60);
        this.secondsCh.setAngle(this.secondsCh.getAngle() + time/1000 * 360/60);
    };
};
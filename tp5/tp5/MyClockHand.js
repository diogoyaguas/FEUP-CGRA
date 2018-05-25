class MyClockHand extends CGFobject
{
	constructor(scene, width, height) 
	{
        super(scene);
        this.pointer = new MyUnitCubeQuad(this.scene);
	    this.width = width;
        this.height = height;
	    this.angle = 0;
    };

    setAngle(angle){
        this.angle = angle * Math.PI / 180;
    };

    getAngle(){
        return this.angle * 180 / Math.PI;
    };
    
	display() 
	{
        this.scene.pushMatrix();
            this.scene.rotate(Math.PI/2 - this.angle, 0, 0, 1);
            this.scene.scale(this.width, this.height, 0.05);
            this.scene.translate(0.5, 0, 0);
            this.pointer.display();
        this.scene.popMatrix();

	};
};
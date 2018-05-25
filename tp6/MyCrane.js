class MyCrane extends CGFobject 
{
    constructor(scene)
    {
        super(scene);
        this.structure = new MyCraneStructure(this.scene);
        this.vertical_angle = 0;
        this.horizontal_angle = 0;
        this.state = -1;

    };

    display()
    {

        this.scene.pushMatrix();
	  	 	this.structure.display();
	    this.scene.popMatrix();
    };

    move(car)
    {  
    	switch(this.state) {

    		case -1:
    			if(this.vertical_angle <= Math.PI)
    			this.vertical_angle += Math.PI / 100;
    			else this.state = 0;
    			break;

    		case 0: // down arm 2
    			if(this.horizontal_angle <= Math.PI / 10)
    			this.horizontal_angle += Math.PI / 100;
    			else this.state = 1;
    			break;

    		case 1:
    			if(this.horizontal_angle >= 0){
    				this.horizontal_angle -= Math.PI / 100;
    				car.craneGetsCar(this.horizontal_angle);
    			}
    			else this.state = 2;
				break;

    		case 2:
    			if(this.vertical_angle >= 0)
    			this.vertical_angle -= Math.PI / 100;
    			else this.state = -3;
    			break;

    		case 3:
    			car.dropCar();
    			break;
    			
    	}

    };

    update(car) 
    {
        this.move(car);
        this.structure.setAngle(this.vertical_angle, this.horizontal_angle);
    };
};
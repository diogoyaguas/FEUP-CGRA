class MyCrane extends CGFobject 
{
    constructor(scene)
    {
        super(scene);
        this.structure = new MyCraneStructure(this.scene);
        this.verticalAngle = 0;
        this.horizontalAngle = 0;
        this.horizontalAngleHeight = 0;
        this.state = -1;
        this.car = 0;

        this.craneGetsCar =  false;
        this.rotateCar = false;
        this.craneMove = true;

        this.landed = true;

    };

    display()
    {

        this.scene.pushMatrix();
	  	 	this.structure.display();
	    this.scene.popMatrix();
    };

    move()
    {  
    	switch(this.state) {

    		case -1: // rotate to get car
    		    this.craneGetsCar =  false;
        		this.rotateCar = false;
        		this.craneMove = true;
        		this.landed = true;
    			if(this.verticalAngle <= Math.PI)
    			this.verticalAngle += Math.PI / 100;
    			else this.state = 0;
    			break;

    		case 0: // down arm 2
    			if(this.horizontalAngle <= Math.PI / 10)
    			this.horizontalAngle += Math.PI / 100;
    			else this.state = 1;
    			break;

    		case 1: // gets car up 
    			if(this.horizontalAngle >= 0){
    				this.horizontalAngle -= Math.PI / 100;
    				this.horizontalAngleHeight = this.horizontalAngle;
					this.craneGetsCar = true;
					this.landed = false;
    			}
    			else this.state = 2;
				break;

    		case 2: // rotate with car
    			if(this.verticalAngle >= 0) {
    			this.verticalAngle -= Math.PI / 100;
    				this.rotateCar = true;
    			}
    			else this.state = 3;
    			break;

    		case 3: // drop car
    			if(!this.landed){
    			this.craneMove = false;
				if(this.horizontalAngle <= Math.PI / 10)
    			this.horizontalAngle += Math.PI / 50;
    			else this.landed = true;
    			} 
    			else this.state = 4;
    			break;
    		case 4:
    			this.car.moving = true;
    			this.car.x -= 2* (Math.sin(Math.PI/4) * 3.6 + Math.cos(-Math.PI/2.8)*11);
    			this.car.y -= 2* (Math.sin(Math.PI/4) * 3.6 + Math.cos(-Math.PI/2.8)*11);
    			this.scene.car = this.car;
    			this.state = -1;
    			break;
    			
    	}

    };

    update() 
    {
        this.move();
        if(this.craneMove) this.structure.setAngle(this.verticalAngle, this.horizontalAngle);
        if(this.craneGetsCar) this.car.craneGetsCar(this.horizontalAngle, this.horizontalAngleHeight);
        if(this.rotateCar) this.car.rotateCar(this.verticalAngle);

    };

    setCar(car) {

    	this.car = car;
    };
};
var SPEED_INC = 0.005;
var ANGLE_INC = Math.PI / 50;
var BACK = Math.PI / 100;

class MyVehicle extends CGFobject {
    constructor(scene) {

        super(scene);
        this.structure = new MyVehicleStructure(this.scene);

    	this.x = 0;
    	this.z = 0; 

    	this.speed = 0;
    	this.moving = true;

    	this.rotationAngle = 0;
    	this.turnAngle = 0;
    	this.orientation = 0;

    };

    display() {

        this.scene.pushMatrix();
        this.scene.translate(this.x, 1, -this.z);
        this.scene.rotate(this.orientation, 0, 1, 0);
        this.scene.translate(2.5, 0, 0);
        this.structure.display();
        this.scene.popMatrix();

    }

    update() {

    	this.orientation += this.turnAngle * this.speed * 0.3;

    	this.x += this.speed * Math.cos(this.orientation);
    	this.z += this.speed * Math.sin(this.orientation);

    	this.rotationAngle += 2 * this.speed;
    	this.structure.front_wheel.setRotationAngle(this.rotationAngle);
    	this.structure.back_wheel.setRotationAngle(this.rotationAngle);

    	this.structure.front_wheel.setTurnAngle(this.turnAngle);

    	if (this.turnAngle > 0) {
            this.turnAngle -= BACK;
        } else if (this.turnAngle < -0) {
            this.turnAngle += BACK;
        }

    	
        
    };

    moveForward() {

        if (this.speed <= 0.25) {
			this.speed += SPEED_INC;
             
        }
    };

    moveBackward() {

        if (this.speed >= -0.25) {
    		this.speed -= SPEED_INC;
        }
    };

    moveLeft() {

        if (this.turnAngle < Math.PI / 5) {

            this.turnAngle += ANGLE_INC;
        }

    };

    moveRight() {

        if (this.turnAngle > - Math.PI / 5) {

            this.turnAngle -= ANGLE_INC;

        }

    };

    craneGetsCar(horizontal_angle) {
        this.scene.translate(0, -(11 * Math.cos(Math.PI/2.8) - 3.6 * Math.cos(Math.PI / 4 + horizontal_angle) - 4), 11 * Math.sin(Math.PI/2.8)- 4 * Math.sin(Math.PI / 4 + horizontal_angle));
    };

};
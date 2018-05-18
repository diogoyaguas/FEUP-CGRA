/**
 * MyVehicle
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

var SPEED_INC = 0.250;
var ANGLE_INC = 0.1;

var degToRad = Math.PI / 180.0;

class MyVehicle extends CGFobject
{
	constructor(scene)
	{
        super(scene);
        this.x = 0;
        this.z = 0; 
        this.velocity = 0;
        this.degree = -45*degToRad;
        this.structure = new MyVehicleStructure(this.scene, this.angle_wheel);
        this.angle_wheel = 0;
        this.rotate_wheel = 0;

    };
    
    display() {

        this.scene.pushMatrix();
        this.scene.translate(this.x, 0, this.z);
        this.scene.rotate(-45*degToRad,0,1,0);
        this.structure.display();
        this.scene.popMatrix();

    }

    update(currTime){

	this.x += this.velocity * UPDATE_TIME * Math.sin(this.degree);
	this.z += this.velocity * UPDATE_TIME * Math.sin(this.degree);
	this.angle_wheel += this.velocity * 2;
	if(this.rotate_wheel > 0){
	this.rotate_wheel -= 0.03;
	}
	else if(this.rotate_wheel < 0){
		this.rotate_wheel += 0.03;
	}
	this.structure.front_wheel.setAngle(this.angle_wheel);
	this.structure.back_wheel.setAngle(this.angle_wheel);
	this.structure.front_wheel.setRotate(this.rotate_wheel);
   
    }
	
	moveForward(){

		if(this.velocity <= 15){

			this.velocity += SPEED_INC;
		}
	}

	moveBackward(){

		if(this.velocity >= -15){

			this.velocity -= SPEED_INC;
		}
	}

	moveLeft(){

		if(this.rotate_wheel < Math.PI / 5.5) {

			this.rotate_wheel += ANGLE_INC
		}
	}

	moveRight(){

		if(this.rotate_wheel > - Math.PI / 5.5) {

			this.rotate_wheel -= ANGLE_INC
		}
	}
};

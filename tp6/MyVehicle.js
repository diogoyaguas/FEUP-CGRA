/**
 * MyVehicle
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

var SPEED_INC = 1;

var degToRad = Math.PI / 180.0;

class MyVehicle extends CGFobject
{
	constructor(scene)
	{
        super(scene);
        this.structure = new MyVehicleStructure(this.scene);
        this.x = 0;
        this.z = 0; 
        this.velocity = 0;
        this.degree = -45*degToRad;

    };
    
    display() {

        this.scene.pushMatrix();
        this.scene.translate(this.x, 0, this.z);
        this.structure.display();
        this.scene.popMatrix();

    }

    update(currTime){

	this.x += this.velocity * UPDATE_TIME * Math.sin(this.degree);
	this.z += this.velocity * UPDATE_TIME * Math.sin(this.degree);
   
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
};

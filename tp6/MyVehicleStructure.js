/**
 * MyVehicleStructure
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyVehicleStructure extends CGFobject
{
	constructor(scene)
	{
        super(scene);
        this.quad=new MyUnitCubeQuad(this.scene); 
        this.quad2=new MyUnitCubeQuad(this.scene); 
        this.front_wheel = new MyWheel(this.scene);
        this.back_wheel = new MyWheel(this.scene);

    };
    
    display() {

		//body
        this.scene.pushMatrix();
        this.scene.translate(3, 0, 0);
        this.scene.scale(4.5, 1.2, 2.5);
        this.quad.display();
        this.scene.popMatrix();

		//body 
        this.scene.pushMatrix();
        this.scene.translate(3, 1, 0);
        this.scene.scale(3, 0.8, 1.5);
        this.quad2.display();
        this.scene.popMatrix();
        
        //back_wheel 1
        this.scene.pushMatrix();
        this.scene.translate(1.7, -0.7, 1);
        this.front_wheel.display();
        this.scene.popMatrix();

        //front_wheel 1
        this.scene.pushMatrix();
        this.scene.translate(4.4, -0.7, 1);
        this.back_wheel.display();
        this.scene.popMatrix();

        //back_wheel 2
        this.scene.pushMatrix();
        this.scene.translate(1.7, -0.7, -1.4);
        this.front_wheel.display();
        this.scene.popMatrix();

        //front_wheel 2
        this.scene.pushMatrix();
        this.scene.translate(4.4, -0.7, -1.4);
        this.back_wheel.display();
        this.scene.popMatrix();
       
    }
};

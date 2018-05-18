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
        this.rodas= new MyCylinder(this.scene, 10, 2);

    };
    
    display() {

		//corpo baixo
        this.scene.pushMatrix();
        this.scene.translate(3, 0, 0);
        this.scene.rotate(-45*degToRad,0,1,0);
        this.scene.scale(4.5, 1.2, 2.5);
        this.quad.display();
        this.scene.popMatrix();

	
		//corpo cima
        this.scene.pushMatrix();
        this.scene.translate(3, 1, 0);
        this.scene.rotate(-45*degToRad,0,1,0);
        this.scene.scale(3, 0.8, 1.5);
        this.quad2.display();
        this.scene.popMatrix();
        
        /*
        //roda traseira 1
        this.scene.pushMatrix();
        this.scene.translate(1.7, -0.7, 1.1);
        this.scene.scale(0.4, 0.4, 0.4);
        this.rodas.display();
        this.scene.popMatrix();

        //roda dianteira 1
        this.scene.pushMatrix();
        this.scene.translate(4.4, -0.7, 1.1);
        this.scene.scale(0.4, 0.4, 0.4);
        this.rodas.display();
        this.scene.popMatrix();

        //roda traseira 2
        this.scene.pushMatrix();
        this.scene.translate(1.7, -0.7, 1.1);
        this.scene.scale(0.4, 0.4, -2.6);
        this.rodas.display();
        this.scene.popMatrix();

        //roda dianteira 2
        this.scene.pushMatrix();
        this.scene.translate(4.4, -0.7, 1.1);
        this.scene.scale(0.4, 0.4, -2.6);
        this.rodas.display();
        this.scene.popMatrix();
        */

    }
};

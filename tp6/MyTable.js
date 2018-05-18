/**
 * MyTable
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyTable extends CGFobject
{
	constructor(scene)
	{
        super(scene);
        this.quad=new MyUnitCubeQuad(this.scene); 

        this.materialC = new CGFappearance(this.scene);
	    this.materialC.setAmbient(0.1,0.1,0.1,1);
	    this.materialC.setDiffuse(.337,.184,.0055,1);
	    this.materialC.setSpecular(0.03,0.03,0.03,1);	
	    this.materialC.setShininess(1);

        this.materialD = new CGFappearance(this.scene);
        this.materialD.setAmbient(1,1,1,1);
        this.materialD.setDiffuse(.678,.698,.741,1);
        this.materialD.setSpecular(1,1,1,1);
        this.materialD.setShininess(30);
    };
    
    display() {

        this.scene.pushMatrix();

        this.scene.translate(0, 3.5+0.15, 0);
        this.scene.scale(5, 0.3, 3);
        this.scene.tableAppearance.apply();
        this.quad.display();

        this.scene.popMatrix();

        this.scene.pushMatrix();

        this.scene.translate(-2.5+0.15, 1.75, -1.5+0.15);
        this.scene.scale(0.3, 3.5, 0.3);
        this.materialD.apply();
        this.quad.display();

        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(2.5-0.15, 1.75, -1.5+0.15);
        this.scene.scale(0.3, 3.5, 0.3);
        this.materialD.apply();
        this.quad.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(2.5-0.15, 1.75, 1.5-0.15);
        this.scene.scale(0.3, 3.5, 0.3);
        this.materialD.apply();
        this.quad.display();
        this.scene.popMatrix();
        this.scene.translate(-2.5+0.15, 1.75, 1.5-0.15);
        this.scene.scale(0.3, 3.5, 0.3);
        this.materialD.apply();
        this.quad.display();
    }

	
};

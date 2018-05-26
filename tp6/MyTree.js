class MyTree extends CGFobject 
{
    constructor(scene)
    {
        super(scene);
        this.tree = new MyUnitCubeQuad(scene);

        this.trunkAppearence = new CGFappearance(this.scene);
        this.trunkAppearence.setAmbient(0.3, 0.3, 0.3, 1);
        this.trunkAppearence.setDiffuse(0.6, 0.6, 0.6, 1);
        this.trunkAppearence.setSpecular(0, 0.2, 0.8, 1);
        this.trunkAppearence.setShininess(120);
        this.trunkAppearence.loadTexture("resources/images/wood.jpg");

        this.leaveAppearence = new CGFappearance(this.scene);
        this.leaveAppearence.setAmbient(0.3, 0.3, 0.3, 1);
        this.leaveAppearence.setDiffuse(0.6, 0.6, 0.6, 1);
        this.leaveAppearence.setSpecular(0, 0.2, 0.8, 1);
        this.leaveAppearence.setShininess(120);
        this.leaveAppearence.loadTexture("resources/images/leave.png");

    };

    display(){
        
        // Trunk
        this.scene.pushMatrix();
        this.scene.scale(1.25,5,1.25);
        this.scene.translate(0, 0.5, 0);
        this.trunkAppearence.apply();
        this.tree.display();
        this.scene.popMatrix();

        // Big Leaves
        this.scene.pushMatrix();
        this.scene.scale(6,2,6);
        this.scene.translate(0,3,0);
        this.leaveAppearence.apply();
        this.tree.display();
        this.scene.popMatrix();

        // Medium Leaves
        this.scene.pushMatrix();
        this.scene.scale(3,1,3);
        this.scene.translate(0,7.5,0);
        this.leaveAppearence.apply();
        this.tree.display();
        this.scene.popMatrix();

        // Small Leaves
        this.scene.pushMatrix();
        this.scene.translate(0,8.5,0);
        this.leaveAppearence.apply();
        this.tree.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(1,8.5,0);
        this.leaveAppearence.apply();
        this.tree.display();
        this.scene.popMatrix();

         this.scene.pushMatrix();
        this.scene.translate(-1,8.5,0);
        this.leaveAppearence.apply();
        this.tree.display();
        this.scene.popMatrix();

         this.scene.pushMatrix();
        this.scene.translate(0,8.5,1);
        this.leaveAppearence.apply();
        this.tree.display();
        this.scene.popMatrix();

         this.scene.pushMatrix();
        this.scene.translate(0,8.5,-1);
        this.leaveAppearence.apply();
        this.tree.display();
        this.scene.popMatrix();


    };

}
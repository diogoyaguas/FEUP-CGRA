class MyIman extends CGFobject {

    constructor(scene) {
        super(scene);
        this.cylinder = new MyCylinder(this.scene, 30, 1);
        this.circle = new MyCircle(this.scene, 100);
    };

    display() {
        // Wire
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI / 2, 1, 0, 0);
        this.scene.translate(0, -7.8, 4);
        this.scene.scale(0.05, 0.05, 4.5);
        this.cylinder.display();
        this.scene.popMatrix();

        // Iman Base
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI / 2, 1, 0, 0);
        this.scene.translate(0, -7.8, 3.8);
        this.scene.scale(0.5, 0.5, 0.5);
        this.cylinder.display();
        this.scene.popMatrix();

        // Iman Top 1c
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI / 2, 1, 0, 0);
        this.scene.translate(0, -7.8, 4.3);
        this.scene.scale(0.5, 0.5, 0.5);
        this.circle.display();
        this.scene.popMatrix();

        // Iman Top 2
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.scene.translate(0, 7.8, -3.8);
        this.scene.scale(0.5, 0.5, 0.5);
        this.circle.display();
        this.scene.popMatrix();
    };

}
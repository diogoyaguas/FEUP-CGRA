class MyArm extends CGFobject {
    constructor(scene) {
        super(scene);
        this.hexagon = new MyCircle(this.scene, 6);
        this.prism = new MyPrism(this.scene, 6, 1);

    };

    display() {
        this.scene.pushMatrix();
        this.prism.display();
        this.scene.translate(0, 0, 1)
        this.hexagon.display();
        this.scene.popMatrix();


    };
}
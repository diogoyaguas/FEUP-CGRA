class MyLake extends MyCircle {
    constructor(scene, slices) {
        super(scene, slices);
        this.angle = 0;

        this.waterAppearence = new CGFappearance(this.scene);
        this.waterAppearence.setAmbient(0.3, 0.3, 0.3, 1);
        this.waterAppearence.setDiffuse(0.6, 0.6, 0.6, 1);
        this.waterAppearence.setSpecular(0, 0.2, 0.8, 1);
        this.waterAppearence.setShininess(120);
        this.waterAppearence.loadTexture("resources/images/water.jpg");

    };

    display() {
        this.scene.pushMatrix();
        this.waterAppearence.apply();
        super.display();
        this.scene.popMatrix();

    };

    setAngle(angle) {
        this.angle = angle * Math.PI / 180;
    };

    getAngle() {
        return this.angle * 180 / Math.PI;
    };


};
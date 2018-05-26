class MyCrane extends CGFobject {
    constructor(scene) {
        super(scene);
        this.structure = new MyCraneStructure(this.scene);
        this.verticalAngle = 0;
        this.horizontalAngle = 0;
        this.horizontalAngleHeight = 0;
        this.rotateAngle = 0;
        this.state = -1;
        this.car = 0;

        this.craneGetsCar = false;
        this.rotateCar = false;
        this.craneMove = true;
        this.landed = true;
        this.carView = true;

    };

    display() {

        this.scene.pushMatrix();
        this.structure.display();
        this.scene.popMatrix();
    };

    move() {
        switch (this.state) {

            case -1: // rotate to get car
                this.carView = true;
                this.craneGetsCar = false;
                this.rotateCar = false;
                this.craneMove = true;
                this.landed = true;
                if (this.verticalAngle <= Math.PI)
                    this.verticalAngle += Math.PI / 100;
                else this.state = 0;
                break;

            case 0: // down arm 2
                if (this.horizontalAngle <= Math.PI / 10)
                    this.horizontalAngle += Math.PI / 100;
                else this.state = 1;
                break;

            case 1: // gets car up 
                if (this.horizontalAngle >= 0) {
                    this.horizontalAngle -= Math.PI / 100;
                    this.horizontalAngleHeight = this.horizontalAngle;
                    this.craneGetsCar = true;
                    this.landed = false;
                } else this.state = 2;
                break;

            case 2: // rotate with car
                if (this.verticalAngle >= 0) {
                    this.verticalAngle -= Math.PI / 100;
                    this.rotateCar = true;
                    if (this.rotateAngle <= Math.PI)
                        this.rotateAngle += Math.PI / 100;
                } else this.state = 3;
                break;

            case 3: // drop car
                if (!this.landed) {
                    this.craneMove = false;
                    if (this.horizontalAngle <= Math.PI / 10)
                        this.horizontalAngle += Math.PI / 100;
                    else this.landed = true;
                } else {
                    this.state = 4;
                    this.carView = false;
                }
                break;
            case 4:

                this.car.moving = true;
                this.car.x = -14.5;
                this.car.z = -4.5;
                this.state = -1;
                break;

        }

    };

    update() {
        this.move();
        if (this.craneGetsCar) this.car.craneGetsCar(this.horizontalAngle, this.horizontalAngleHeight);
        if (this.craneMove) this.structure.set(this.verticalAngle, this.horizontalAngle, this.rotateCar, this.carView);

    };

    setCar(car) {

        this.car = car;
    };
};
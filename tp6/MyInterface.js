class MyInterface extends CGFinterface {


    /**
     * MyInterface
     * @constructor
     */
    constructor() {
        super();

    }

    initKeys() {
        this.scene.gui = this;
        this.processKeyboard = function() {};
        this.activeKeys = {};
    }

    processKeyDown(event) {
        this.activeKeys[event.code] = true;
    };

    processKeyUp(event) {
        this.activeKeys[event.code] = false;
    };

    isKeyPressed(keyCode) {
        return this.activeKeys[keyCode] || false;
    }

    /**
     * init
     * @param {CGFapplication} application
     */
    init(application) {
        // call CGFinterface init
        super.init(application);

        // init GUI. For more information on the methods, check:
        //  http://workshop.chromeexperiments.com/examples/gui

        this.gui = new dat.GUI();

        // add a button:
        // the first parameter is the object that is being controlled (in this case the scene)
        // the identifier 'doSomething' must be a function declared as part of that object (i.e. a member of the scene class)
        // e.g. LightingScene.prototype.doSomething = function () { console.log("Doing something..."); };

        this.gui.add(this.scene, 'Menu');

        // add a group of controls (and open/expand by defult)

        var group = this.gui.addFolder("Lights");

        // add two check boxes to the group. The identifiers must be members variables of the scene initialized in scene.init as boolean
        // e.g. this.option1=true; this.option2=false;

        group.add(this.scene, 'Light1');
        group.add(this.scene, 'Light2');
        group.add(this.scene, 'Light3');
        group.add(this.scene, 'Light4');
        group.add(this.scene, 'Light5');
        group.add(this.scene, 'Light6');
        group.add(this.scene, 'Light7');

        //AXIS GROUP

        this.gui.add(this.scene, 'Axis');

        // add a slider
        // must be a numeric variable of the scene, initialized in scene.init e.g.
        // this.speed=3;
        // min and max values can be specified as parameters

        this.gui.add(this.scene, 'Speed', -25, 25);

        this.gui.add(this.scene, 'Textures', ['Original', 'Retro', 'Pink']);

        this.initKeys();

        return true;
    };



};
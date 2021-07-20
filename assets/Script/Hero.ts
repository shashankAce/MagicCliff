

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {


    accLeft = false;
    accRight = false;

    xSpeed = 0;
    accel = 0;
    maxMoveSpeed = 0;

    onLoad() {

        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);

        // Acceleration direction switch
        this.accLeft = false;
        this.accRight = false;

        // The main character's current horizontal velocity
        this.xSpeed = 0;
        // acceleration
        this.accel = 100;
        this.maxMoveSpeed = 100;

        this.idle();

    }

    run() {
        this.node.getComponent(cc.Animation).play('run');
    }

    idle() {
        this.node.getComponent(cc.Animation).play('idle');
    }

    onKeyDown(event) {
        // set a flag when key pressed

        console.log("KeyDown");

        switch (event.keyCode) {
            case cc.macro.KEY.a:
                this.accLeft = true;
                this.run();
                break;
            case cc.macro.KEY.d:
                this.accRight = true;
                this.run();
                break;
        }
    }

    onKeyUp(event) {
        // unset a flag when key released
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                this.accLeft = false;
                this.idle();
                break;
            case cc.macro.KEY.d:
                this.accRight = false;
                this.idle();
                break;
        }
    }

    update(dt) {

        if (this.accLeft) {
            this.xSpeed -= this.accel * dt;
        } else if (this.accRight) {
            this.xSpeed += this.accel * dt;
        } else {
            //this.xSpeed -= this.accel * dt;  
        }


        // restrict the movement speed of the main character to the maximum movement speed
        if (Math.abs(this.xSpeed) > this.maxMoveSpeed) {
            // if speed reach limit, use max speed with current direction
            this.xSpeed = this.maxMoveSpeed * this.xSpeed / Math.abs(this.xSpeed);
        }

        // update the position of the main character according to the current speed
        this.node.x += this.xSpeed * dt;
    }

    onDestroy() {
        // Cancel keyboard input monitoring
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }
}

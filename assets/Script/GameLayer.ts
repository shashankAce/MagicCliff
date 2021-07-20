
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    /* @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello'; */

    isDebug = false;

    onLoad() {

        cc.log(" OnLoad");

        cc.debug.setDisplayStats(this.isDebug);
        cc.view.enableAntiAlias(false);
        cc.view.enableRetina(true);

        cc.director.getPhysicsManager().enabled = true;
        cc.director.getPhysicsManager().gravity = cc.v2(0, -640);

    }

    start() {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDebugDraw = true;
        cc.director.getCollisionManager().enabledDrawBoundingBox = true;
    }

    update(dt) {

    }
}

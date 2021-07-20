

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameWorld extends cc.Component {

    @property()
    WorldFallG: number = 0;


    @property()
    WorldWalkA: number = 0;

    static G: number = 0;
    static WalkA: number = 0;

    onLoad() {
        GameWorld.G = this.WorldFallG;
        GameWorld.WalkA = this.WorldWalkA;
    }

    start() {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDebugDraw = true;
        cc.director.getCollisionManager().enabledDrawBoundingBox = true;
    }

    // update (dt) {}
}

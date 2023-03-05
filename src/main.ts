import { Actor, Camera, Engine, Input, Loader, LockCameraToActorStrategy, Scene, vec } from "excalibur";
import { Player } from "./player";
import { Projectile } from "./projectile";
import { Resources } from "./resources";
import { ref } from "vue";

class gamescene extends Scene {
  public onInitialize(_engine: Engine): void {
    const player = new Player();
      _engine.add(player);

      this.camera.addStrategy(new LockCameraToActorStrategy(player))

      _engine.input.pointers.primary.on("down", (evt) => {
        var vel = evt.worldPos.sub(player.pos).normalize();
    
        var projectile = new Projectile(vel);
        this.add(projectile)
      });
  }
}



class Game extends Engine {
    initialize() {
      let buggy = ref(this);

      console.log(buggy.value);

      buggy.value.addScene('game', new gamescene());
      buggy.value.goToScene('game');

      buggy.value.start();
    }
  }
  
  export const game = new Game({
    pointerScope: Input.PointerScope.Document,
  });
  game.initialize();
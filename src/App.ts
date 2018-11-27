import { createScene } from "./createScene";

export class App {
    constructor(private rootElement: HTMLCanvasElement) {}

    run() {
        const engine = new BABYLON.Engine(this.rootElement,true);
        const scene = createScene(engine);

        engine.runRenderLoop(function() {
          scene.render();
        });
        
        window.addEventListener('resize', function() {
          engine.resize();
        });
    }
}

import { createScene } from './createScene';
import { setMouseControlls, setVrControlls } from './setControlls';

export class App {
    constructor(private rootElement: HTMLCanvasElement) {}

    run() {
        const engine = new BABYLON.Engine(this.rootElement, true);
        const scene = createScene(engine);
        const VRHelper = scene.createDefaultVRExperience();
        setMouseControlls(VRHelper, this.rootElement, scene);
        setVrControlls(VRHelper, scene);

        engine.runRenderLoop(function() {
            scene.render();
        });

        window.addEventListener('resize', function() {
            engine.resize();
        });
    }
}

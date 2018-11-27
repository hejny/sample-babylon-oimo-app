import * as BABYLON from 'babylonjs';
import { createSkybox } from './createSkybox';
import { createMaterialColor } from './createMaterial';

export function createScene(engine: BABYLON.Engine): BABYLON.Scene {
    const scene = new BABYLON.Scene(engine);
    scene.clearColor = BABYLON.Color4.FromHexString('#000000ff');

    const skyboxMesh = createSkybox(scene);
    const groundMesh = BABYLON.Mesh.CreateGround(
        'ground',
        1000,
        1000,
        2,
        scene,
    );

    const lights = [
        new BABYLON.HemisphericLight(
            'light',
            new BABYLON.Vector3(100, 100, 100),
            scene,
        ),
    ];

    scene.enablePhysics(
        new BABYLON.Vector3(0, -10, 0),
        new BABYLON.OimoJSPlugin(),
    );
    groundMesh.physicsImpostor = new BABYLON.PhysicsImpostor(
        groundMesh,
        BABYLON.PhysicsImpostor.BoxImpostor,
        {
            mass: 0,
            friction: 0.5,
            restitution: 0.5,
            nativeOptions: {
                noSleep: true,
                move: true,
            },
        },
    );

    /*
    for (let i = 0; i < 100; i++) {
        const boxMesh = BABYLON.MeshBuilder.CreateBox(
            'sphere',
            { size: 1 },
            scene,
        );
        boxMesh.position = new BABYLON.Vector3(
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.0) * 10,
            (Math.random() - 0.5) * 20,
        );
        boxMesh.material = createMaterialColor('#cc5522',scene);
        boxMesh.physicsImpostor = new BABYLON.PhysicsImpostor(
            boxMesh,
            BABYLON.PhysicsImpostor.BoxImpostor,
            {
                mass: 80,
                friction: 0.5,
                restitution: 0.5,
                nativeOptions: {
                    noSleep: true,
                    move: true,
                },
            },
        );
    }
    */

    return scene;
}

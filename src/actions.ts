import * as BABYLON from 'babylonjs';
import { createMaterialColor } from './createMaterial';

export function primaryAction(position: BABYLON.Vector3,direction: BABYLON.Vector3,scene:BABYLON.Scene){

    const boxMesh = BABYLON.MeshBuilder.CreateBox(
        'sphere',
        { size: 1 },
        scene,
    );
    boxMesh.position = position;
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
    boxMesh.physicsImpostor.setLinearVelocity(direction.normalize().scale(10));


}
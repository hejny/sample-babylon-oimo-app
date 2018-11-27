import * as BABYLON from 'babylonjs';
import { primaryAction } from './actions';
import { projectQuaternion } from './tools/projectQuaternion';

const MOUSE_DIRECTION = new BABYLON.Vector3(0, 0.3, 1);

export function setMouseControlls(
    vrHelper: BABYLON.VRExperienceHelper,
    element: HTMLElement,
    scene: BABYLON.Scene,
) {
    element.addEventListener('pointerup', () => {
        const position = vrHelper.currentVRCamera!.position;
        const direction = vrHelper.currentVRCamera!.getDirection(
            MOUSE_DIRECTION,
        );
        primaryAction(position, direction, scene);
    });
}

const CONTROLLER_DIRECTION = new BABYLON.Vector3(0, 0, -1);

export function setVrControlls(
    vrHelper: BABYLON.VRExperienceHelper,
    scene: BABYLON.Scene,
) {
    vrHelper.onControllerMeshLoadedObservable.add((controller) => {
        controller.onTriggerStateChangedObservable.add((event) => {
            if (event.value === 1) {
                const position = controller.devicePosition;
                const direction = projectQuaternion(
                    controller.deviceRotationQuaternion,
                    CONTROLLER_DIRECTION,
                );
                primaryAction(position, direction, scene);
            }
        });
    });
}

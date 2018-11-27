import * as BABYLON from 'babylonjs';
import { primaryAction } from './actions';

const MOUSE_DIRECTION = new BABYLON.Vector3(0,0.3,1);

export function setMouseControlls(vrHelper:BABYLON.VRExperienceHelper,element: HTMLElement,scene: BABYLON.Scene){
    element.addEventListener('pointerup',()=>{
        const position = vrHelper.currentVRCamera!.position;
        const direction = vrHelper.currentVRCamera!.getDirection(MOUSE_DIRECTION);
        primaryAction(position,direction,scene);
    })
}
import * as BABYLON from 'babylonjs';

export function projectQuaternion(
    quaternion: BABYLON.Quaternion,
    direction: BABYLON.Vector3,
): BABYLON.Vector3 {
    const matrix = new BABYLON.Matrix();
    quaternion.toRotationMatrix(matrix);
    return BABYLON.Vector3.TransformCoordinates(direction, matrix);
}

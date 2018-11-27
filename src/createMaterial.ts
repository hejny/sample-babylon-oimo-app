import * as BABYLON from 'babylonjs';

export function createMaterialColor(
    colorHex: string,
    scene: BABYLON.Scene,
): BABYLON.Material {
    const material = new BABYLON.StandardMaterial('material', scene);
    material.diffuseColor = BABYLON.Color3.FromHexString(colorHex);
    return material;
}

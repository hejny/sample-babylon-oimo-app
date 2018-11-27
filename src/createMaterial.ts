import * as BABYLON from 'babylonjs';

/*sphere.material = new BABYLON.StandardMaterial('material',scene);
    sphere.material.backFaceCulling = false;
    sphere.material.emissiveTexture = new BABYLON.Texture(PLANET, scene); 
    sphere.material.emissiveTexture.uScale = -1; 
    sphere.material.emissiveTexture.vScale = -1;*/



export function createMaterialColor(colorHex: string,scene: BABYLON.Scene):BABYLON.Material{
    
    const material = new BABYLON.StandardMaterial('material',scene);
    material.diffuseColor = BABYLON.Color3.FromHexString(colorHex);
    return material;
}

import * as BABYLON from 'babylonjs';
import { createSkybox } from './createSkybox';

export function createScene(engine: BABYLON.Engine): BABYLON.Scene{
    
   
    const scene = new BABYLON.Scene(engine);
  scene.clearColor = BABYLON.Color4.FromHexString('#000000ff');
  
  const VRHelper = scene.createDefaultVRExperience();
  const skyboxMesh = createSkybox(scene);
  const groundMesh = BABYLON.Mesh.CreateGround("ground", 1000, 1000, 2, scene);
  
  const lights = [new BABYLON.HemisphericLight('light', new BABYLON.Vector3(100,100,100), scene)];
  
  {
    const sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {}, scene);
    const size = 5;
    sphere.scaling = new BABYLON.Vector3(size,size,size);
  
    /*sphere.material = new BABYLON.StandardMaterial('material',scene);
    sphere.material.backFaceCulling = false;
    sphere.material.emissiveTexture = new BABYLON.Texture(PLANET, scene); 
    sphere.material.emissiveTexture.uScale = -1; 
    sphere.material.emissiveTexture.vScale = -1;*/
  }
  {
    const sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {}, scene);
    const size = 1.5
    sphere.scaling = new BABYLON.Vector3(size,size,size);
  
    /*sphere.material = new BABYLON.StandardMaterial('material',scene);
    sphere.material.backFaceCulling = false;
    sphere.material.emissiveTexture = new BABYLON.Texture(PLANETS.e_m, scene); 
    sphere.material.emissiveTexture.uScale = -1; 
    sphere.material.emissiveTexture.vScale = -1;*/
    
    scene.registerBeforeRender(()=>{
      sphere.position = new BABYLON.Vector3(
        Math.cos(performance.now()/1000)*7    
        ,0
        ,Math.sin(performance.now()/1000)*7
      );
    })
  }



  return scene;


}
/*import { App } from './App';

const app = new App(document.getElementById('root') as HTMLDivElement);
app.run();
console.log(app);
*/
import * as BABYLON from 'babylonjs';



const PLANETS = {
    mars: 'https://www.solarsystemscope.com/images/textures/full/2k_mars.jpg',
    earths: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ffarm3.staticflickr.com%2F2521%2F3884071286_92de0b5a98_o_d.jpg&f=1',
    
    
    
    e_m:'https://deepart-io.s3.amazonaws.com/cache/33/1f/331fb1b64f1f994200a77c53f54343e1.jpg',
    m_e:'https://deepart-io.s3.amazonaws.com/cache/09/45/09452ef6e01bc5a76962b990d6004a4f.jpg'
    
  }
  const PLANET = PLANETS.m_e;
  
  
  const canvas = document.getElementById('scene') as HTMLCanvasElement;
  const engine = new BABYLON.Engine(canvas,true);
  const scene = new BABYLON.Scene(engine);
  scene.clearColor = BABYLON.Color4.FromHexString('#000000ff');
  
  //const VRHelper = scene.createDefaultVRExperience();
  const camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 10, new BABYLON.Vector3(0, 0, 0), scene);
  camera.beta = Math.PI/2;
  camera.attachControl(canvas, true);
  
  const light1 = new BABYLON.PointLight('light', new BABYLON.Vector3(100,100,100), scene);
  
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
  
  
  engine.runRenderLoop(function() {
    scene.render();
  });
  
  window.addEventListener('resize', function() {
    engine.resize();
  });
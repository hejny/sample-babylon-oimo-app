import { App } from './App';

const app = new App(document.getElementById('scene') as HTMLCanvasElement);
app.run();
console.log('app',app);
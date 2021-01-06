import { Wave } from './wave.js';

export class WaveGroup {
  constructor(){
    this.totalWaves = 3;
    this.totalPoints = [6, 11, 12];

    this.color = ['rgba(204, 255, 221, 0.4)', 'rgba(255, 128, 170, 0.4)', 'rgba(153, 204, 255, 0.4)'];

    this.waves = [];

    for(let i=0; i < this.totalWaves; i++){
      const wave = new Wave(
          i, // i번째 wave 
          this.totalPoints[i], // 주기를 나타냄.
          this.color[i]
      );
      this.waves[i] = wave;
    }

  }

  resize(stageWidth, stageHeight) {
    for(let i=0; i < this.totalWaves; i++){
      const wave = this.waves[i];
      wave.resize(stageWidth, stageHeight);
    }
  }

  draw(ctx){
    for(let i=0; i < this.totalWaves; i++){
      const wave = this.waves[i];
      wave.draw(ctx);
    }
  }

}
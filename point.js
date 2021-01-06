export class Point { // points for wave
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.fixedY = y;
    this.speed = 0.1
    this.cur = 0;
    this.max = Math.random() * 100;
  }
  update(){ // 아래 위로 움직인다?
    this.cur += this.speed;
    this.y = this.fixedY + Math.sin(this.cur) * this.max;
  }
}
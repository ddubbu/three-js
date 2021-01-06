export class Point { // points for wave
  constructor(index, x, y){
    this.x = x;
    this.y = y;
    this.fixedY = y;
    this.speed = 0.1
    this.cur = index //0;
    this.max = Math.random() * 100; //+ 150;
  }

  update(){ 
    //! 아래 위로 움직인다? 
    // Mathi.sin 덕분에 -max ~ +max 사이로 bound
    this.cur += this.speed; // 무한히 커지는 단점이 있음.
    this.y = this.fixedY + Math.sin(this.cur) * this.max;
  }
}
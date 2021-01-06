import { Point } from "./point.js"; // js 확장자 필수.


export class Wave {
  constructor(index, totalPoints, color){
    console.log("wave")
    this.index = index;
    this.totalPoints = totalPoints; // num
    this.color = color;
    this.points = [];
  }
  resize(stageWidth, stageHeight){
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;
    
    this.centerX = stageWidth / 2;
    this.centerY = stageHeight / 2;

    this.pointGap = this.stageWidth / (this.totalPoints - 1);

    this.init();
    console.log("init")
  }

  init(){
    this.points = [];
    // N개의 point 생성
    for(let i=0 ; i < this.totalPoints; i++){
      const point = new Point(
          this.index + i, // parent wave idx
          this.pointGap * i,//this.centerX,
          this.centerY
      ); 
      console.log("point")
      this.points[i] = point;
      //this.points.push(point);
    }

    // this.point = new Point(
    //     this.centerX,
    //     this.centerY
    // ); 
  }

  draw(ctx){
    // 원 색 채우기
    ctx.fillStyle = this.color; //'#ff0000';
    // ctx.fill();

    // 원 그리기
    ctx.beginPath();

    let prevX = this.points[0].x;
    let prevY = this.points[0].y;

    ctx.moveTo(prevX, prevY);

    for(let i=1; i<this.totalPoints; i++){
      // console.log(i)
      if(i < this.totalPoints -1){
        // ctx.arc(this.points[i].x, this.points[i].y, 10, 0, 2*Math.PI);
        this.points[i].update();
      }

      const cx = (prevX + this.points[i].x) / 2;
      const cy = (prevY + this.points[i].y) / 2;

      ctx.lineTo(cx, cy);

      prevX = this.points[i].x;
      prevY = this.points[i].y;
      

    }

    ctx.lineTo(prevX, prevY);
    ctx.lineTo(this.stageWidth, this.stageHeight);
    ctx.lineTo(this.points[0].x, this.stageHeight);
    ctx.fill();
    ctx.closePath();
    
    // this.points[0].update();
  }
}
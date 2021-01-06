import { Wave } from './wave.js'

class App {
  constructor(){
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    document.body.appendChild(this.canvas);

    this.wave = new Wave();

    /* 꼭짓점 표시 */
    // this.vertices = [[10, 10], [document.body.clientWidth -100, document.body.clientHeight-50]];
    // this.vertices.forEach((ele)=>{
    //   console.log(ele)
    //   let $vertex = document.createElement('span');
    //   $vertex.classList.add('vertex')
    //   $vertex.style.left = ele[0] + 'px';
    //   $vertex.style.top = ele[1] + 'px';
    //   console.log($vertex)
    //   $vertex.textContent = JSON.stringify(ele);
    //   document.body.appendChild($vertex);
    // })
    // this.ctx.fillRect(0, 0, 300, 150);
    
    
    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize()

    requestAnimationFrame(this.animate.bind(this))
    
  }

  resize(){
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;
    // console.log(this.stageWidth, this.stageHeight);

    /* CSS 말고 tag 속성을 바꾸면 drawing area를 바꾸는 거임*/
    this.canvas.width = this.stageWidth * 2; // 600
    this.canvas.height = this.stageHeight * 2; //300
    this.ctx.scale(2, 2);

    this.wave.resize(this.stageWidth, this.stageHeight);
    
  }
  animate(){
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
    this.wave.draw(this.ctx)
    requestAnimationFrame(this.animate.bind(this))
  }
}


window.onload = () =>{
  new App();
}
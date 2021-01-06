// import { Wave } from './wave.js'
import { WaveGroup } from './wavegroup.js'

class App {
  constructor(){
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    document.body.appendChild(this.canvas);

    this.waveGroup = new WaveGroup();

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
    //! Q. animation 서로 부르는 형태로? 재귀?
    // 1초에 60번 동작 -> 비동기적으로 하기위해 callback 전달
      
  }

  resize(){
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;
    // console.log(this.stageWidth, this.stageHeight); // 700, 460

    /* CSS 말고 tag 속성을 바꾸면 drawing area를 바꾸는 거임*/
    this.canvas.width = this.stageWidth  // 840
    this.canvas.height = this.stageHeight  //413
    // this.ctx.scale(2, 2); => 이걸 도대체 왜 한거지?

    this.waveGroup.resize(this.stageWidth, this.stageHeight);
    
  }
  animate(){
    // 캔버스 전체영역 지우기
    // console.log("here")
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
    this.waveGroup.draw(this.ctx); // 갱신된 위치가 그려짐.
    requestAnimationFrame(this.animate.bind(this))
  }
}


window.onload = () =>{
  new App();
}
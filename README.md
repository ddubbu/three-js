## Intro
두고보라고, 즐겁게 코딩할거야  
Interaction Web coding with Three.js

## 시작하기
### 1. Three.js 세팅/Import 하는 방법
참고 자료 : https://medium.com/threejs/using-es6-modules-in-three-js-7621f98d72d5

```
$ mkdir project_name
$ npm init
$ npm install three express pm2

// public/, app.js 파일 추가 후
$ npm start
```

### 2. app.js 고려할 점.
- express 모듈을 이용해 서버 구동
- root path(`http://127.0.0.1:3000/`) 에서 정적 파일 public/*.html 렌더링
- node_modues/three/build 내부의 파일을 import 하기 위해 `/build` URI 생성

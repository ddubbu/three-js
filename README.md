## 마음 가짐
두고보라고, 즐겁게 코딩할거야  
Interaction Web coding with Three.js

-----

## 환경 설정 with Express
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

-----
## ✌️ 환경 설정 with webpack

공식 문서 따라하면 되긴하는데 이해가 안돼
webpack.js.org/guides/getting-started/

그래서 한글 설명
https://velog.io/@decody/Webpack-설정
https://jeonghwan-kim.github.io/js/2017/05/15/webpack.html

세팅 완료 후
```
npx webpack --config webpack.config.js
```
그리고 live server로 index.html 확인하기

### 1. webpack 원리
번들링된 파일 script로 넣고, html이 live server를 통해 구동할 뿐이구나!

### 2. 변경사항 감지하는 방법 (watch option)
아래 키워드로 실행 후 webpack이 감지하고 있을 때만 가능!

```
// package.json 파일 script 부분에 
"build" : "webpack --watch"

// 혹은 webpack.config.js 파일에
"watch" : true

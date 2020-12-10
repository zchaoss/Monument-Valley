export default `/*点击代码块可暂停或者继续渲染图片
当下方的图片的动画开始运行，
点击人物可暂停或者继续动画*/
.wrap .body .hat {
  border-width: 200px 50px;
  border-style: solid;
  border-color: transparent transparent #fff transparent;
  width: 0;
  height: 0;
  transform: translate(260px, -240px) rotate(-60deg);
  transform-origin: bottom center;
}
.wrap .body .head {
  border-radius: 30% 70% 70% 30%/50%;
  width: 76px;
  height: 100px;
  background-color: #392b22;
  transform: translate(288px, 110px) rotate(29deg);
  transform-origin: 30% center;
}
.wrap .body .face {
  border-radius: 24px 32px 32px 24px/50%;
  width: 56px;
  height: 90px;
  background-color: #fff;
  transform: translate(310px, 118px) rotate(2deg);
}
.wrap .body .neck {
  z-index: 2;
  border-radius: 50%/6px;
  width: 26px;
  height: 30px;
  background-color: #392b22;
  transform: translate(300px, 202px);
}
.wrap .body .shirt {
  z-index: 1;
  border-width: 96px 38px 104px 104px;
  border-style: solid;
  border-color: transparent transparent #fff transparent;
  width: 0;
  height: 0;
  transform: translate(216px, 112px) rotate(3deg);
}
.wrap .body .skirt {
  z-index: 5;
  border-radius: 50%/55% 55% 45% 45%;
  width: 150px;
  height: 100px;
  background-color: #fff;
  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.5);
  transform: translate(208px, 274px) rotate(10deg);
}
.wrap .body .leftleg,
.wrap .body .rightleg {
  z-index: 4;
  border-radius: 6px;
  width: 16px;
  height: 90px;
  background-color: #fff;
}
.wrap .body .leftleg {
  transform: translate(286px, 366px);
}
.wrap .body .rightleg {
  transform: translate(316px, 352px);
}
.wrap .body .leftleg::after,
.wrap .body .rightleg::after {
  display: block;
  position: absolute;
  bottom: 0;
  border-top-left-radius: 50% 100%;
  border-top-right-radius: 50% 100%;
  width: 14px;
  height: 24px;
  background-color: #fff;
  transform: translate(-2px, -8px) rotate(130deg);
  transform-origin: bottom center;
  content: "";
}
.liveImg .wrap .body::after {
  content: "";
  display: block;
  z-index: -1;
  transform: translate(200px, 380px);
  width: 200px;
  height: 140px;
  background: radial-gradient(100px 70px, #a43531, transparent);
}
`;

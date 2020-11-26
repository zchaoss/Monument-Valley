export default `.wrap .body .hat {
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
    border-radius: 50%/55% 55% 45% 45%;
    width: 150px;
    height: 100px;
    background-color: #fff;
    box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.5);
    transform: translate(208px, 274px) rotate(10deg);
  }
  .wrap .body .leftleg,
  .wrap .body .rightleg {
    z-index: -1;
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
  .wrap .platform,
  .wrap .wave {
    position: absolute;
    left: 50%;
  }
  .wrap .platform {
    /* bottom: -120px; */
    bottom: -74px;
    z-index: 2;
    width: 450px;
    height: 450px;
    background-color: #fdb65c;
    box-shadow: inset 0 0 0 50px #fdb65c, inset 0 0 0 100px #ef8b2c,
      inset 0 0 0 150px #fdb65c, inset 0 0 0 200px #ef8b2c;
    transform: translate(-50%) rotate(45deg) skew(-15deg, -15deg) scale(0.35);
  }
  .liveImg .wrap .abovewater {
    position: static;
  }
  .wrap .abovewater::after,
  .wrap .abovewater::before {
    display: block;
    position: absolute;
    bottom: 0;
    left: 50%;
    z-index: 2;
    width: 140px;
    height: 46px;
    content: "";
  }
  .wrap .abovewater::after {
    background-color: #74302f;
    transform: translate(-100%, -24px) skewY(30deg);
    transform-origin: bottom right;
  }
  .wrap .abovewater::before {
    background-color: #cb6b14;
    transform: translate(0, -24px) skewY(-30deg);
    transform-origin: bottom left;
  }
  
  .wrap .underwater {
    bottom: 0;
    left: 50%;
    z-index: 0;
    border-width: 82px 140px 0;
    border-style: solid;
    border-color: transparent #74302f transparent #cb6b14;
    height: 106px;
    opacity: 0.5;
    transform: translate(-50%);
  }
  .wrap .wave,
  .wave::after,
  .wave::before {
    z-index: 1;
    border-width: 14px;
    border-style: solid;
  }
  .wrap .wave {
    bottom: -96px;
    border-color: rgba(255, 255, 255, 0.8);
    width: 400px;
    height: 400px;
    transform: translate(-50%) rotate(45deg) skew(-15deg, -15deg) scale(0.56);
  }
  .wrap .wave::after,
  .wrap .wave::before {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: "";
  }
  .wrap .wave::after {
    border-color: rgba(255, 255, 255, 0.5);
    width: 550px;
    height: 550px;
  }
  .wrap .wave::before {
    border-color: rgba(255, 255, 255, 0.1);
    width: 700px;
    height: 700px;
  }  
  `;

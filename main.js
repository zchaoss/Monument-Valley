import str from "./css.js";
let liveCode = document.querySelector(`code`);
let liveStyle = document.querySelector(`style`);
let player = {
  id: undefined,
  time: 100,
  i: 0,
  events: { play: `play`, pause: `pause`, quick: `quick`, restore: `restore` },
  init() {
    this.play();
    this.bindEvents();
  },
  bindEvents() {
    // for (let key in player.events) {
    //   let value = player.events[key];
    //   document.querySelector(key).onclick = player[value];
    // }
    play.onclick = player.play;
    pause.onclick = player.pause;
    quick.onclick = player.quick;
    restore.onclick = player.restore;
  },
  play() {
    player.id = setInterval(player.run, player.time);
  },
  pause() {
    clearInterval(player.id);
  },
  quick() {
    player.time = 0;
    player.pause();
    player.play();
  },
  restore() {
    player.pause();
    [player.i, player.time] = [0, 100];
    player.play();
  },
  run() {
    if (player.i >= str.length) {
      player.pause();
      return;
    }
    liveStyle.innerHTML = liveCode.innerText = str.substring(0, ++player.i);
    liveCode.scrollTop = liveCode.scrollHeight;
    hljs.highlightBlock(liveCode);
  },
};
player.init();

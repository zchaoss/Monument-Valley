import str from "./css.js";
let $liveCode = $(`code`);
let $liveStyle = $(`.style`);
let player = {
  id: undefined,
  i: 0,
  status: 1,
  speed: 200,
  play() {
    player.id = setInterval(player.run, player.speed);
  },
  pause() {
    clearInterval(player.id);
  },
  run() {
    let note = `/*点击代码块可暂停或者继续渲染图片
当下方的图片的动画开始运行，
点击人物可暂停或者继续动画*/`.length;
    if (player.i > note) {
      clearInterval(player.id);
      player.speed = 0;
      player.play();
    }
    if (player.i >= str.length) {
      player.pause();
      click();
      $(`.liveContent`).off(`click`);
      let id = setTimeout(() => {
        toggleNode.call(Nodelist);
        clearTimeout(id);
      }, 400);
      // toggleNode.call(Nodelist);
      return;
    }
    let content = str.substring(0, ++player.i);
    $liveCode.text(content);
    $liveStyle.html(content);
    $liveCode.scrollTop($liveCode[0].scrollHeight);
    hljs.highlightBlock($liveCode[0]);
  },
};
player.play();

//动态添加动画
let Nodelist = {
  ".wrap .body ": `float1`,
  ".wrap .platform": `float2`,
  ".wrap .abovewater": `float3`,
  ".wrap .wave": `float4`,
};

let obj = {
  timer: 1,
  status: 0,
};
//添加或删除类名
function toggleNode() {
  for (let prop in this) {
    $(prop).toggleClass(this[prop]);
  }
}
$(`.wrap .platform`).on(`animationiteration`, () => {
  obj.timer = !obj.timer;
  if (obj.timer && obj.status) {
    toggleNode.call(Nodelist);
  }
});
// 元素不含有类名的时候添加相应类名
function click() {
  $(`.wrap`).on(`click`, () => {
    if (!$(`.wrap .platform`).hasClass(`float2`)) {
      obj.status = 0;
      toggleNode.call(Nodelist);
    } else {
      obj.status = 1;
    }
  });
}
// 按扭样式设置
$(`.liveContent`).on(`click`, () => {
  player.status = !player.status;
  if (player.status) {
    $(`#play`).addClass(`show`);
    $(`#pause`).removeClass(`show`);
    player.play();
  } else {
    $(`#play`).removeClass(`show`);
    $(`#pause`).addClass(`show`);
    player.pause();
  }
});

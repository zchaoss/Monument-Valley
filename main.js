import str from "./css.js";
let $liveCode = $(`code`);
let $liveStyle = $(`.style`);
let player = {
  id: undefined,
  i: 0,
  status: 1,
  play() {
    player.id = setInterval(player.run, 0);
  },
  pause() {
    clearInterval(player.id);
  },
  run() {
    if (player.i >= str.length) {
      player.pause();
      $(`.liveContent`).off(`click`);
      addNode.call(Nodelist);
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
// 元素含有类名的时候等动画完成一个循环在删除类名
let obj = {
  i: 0, //判断动画执行的循环数
  status: 0, //判断执行动画的时候是否触发了click事件,
  get timer() {
    if (!(++this.i % 2)) {
      if (this.status) {
        removeNode.call(Nodelist);
      }
    }
  },
};
// 添加和删除节点
function addNode() {
  for (let prop in this) {
    $(prop).addClass(this[prop]);
  }
}
function removeNode() {
  for (let prop in this) {
    $(prop).removeClass(this[prop]);
  }
}
// 元素不含有类名的时候添加相应类名
$(`.wrap`).on(`click`, () => {
  if (!$(`.wrap .platform`).hasClass(`float2`)) {
    obj.status = 0;
    addNode.call(Nodelist);
  } else {
    obj.status = 1;
  }
});

$(`.wrap .platform`).on(`animationiteration`, () => !obj.timer);

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

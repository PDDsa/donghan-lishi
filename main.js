import "./styles.css";
import castImage from "./assets/han-cast.png";
import correctFeedbackGif from "./assets/feedback-correct.gif";
import wrongFeedbackGif from "./assets/feedback-wrong.gif";

const FEEDBACK_MEDIA = {
  correct: correctFeedbackGif,
  wrong: wrongFeedbackGif
};

const QUESTIONS = [
  {
    id: 1,
    scene: "时空入口",
    title: "第一站，先把王朝排好队",
    prompt: "秦朝结束后，新的大汉王朝要登场了。下面谁站在秦朝后面？",
    options: ["西汉", "唐朝", "清朝"],
    answer: 0,
    explain: "先记住最重要的一步：秦朝后面接的是西汉，后面的人物故事都从这里往下接。",
    review: "这题不用背很多年份，只先抓顺序。像排队一样记住：秦在前，西汉在后。",
    character: "刘邦",
    relationUnlocks: ["liu-bang"],
    timelineUnlocks: ["qin", "western-han"],
    world: "这时候世界另一边也有很多国家在发展，但中国先进入了西汉的新阶段。"
  },
  {
    id: 2,
    scene: "楚汉争霸",
    title: "谁建立了西汉？",
    prompt: "打完大仗后，谁把队伍带起来，建立了西汉？",
    options: ["刘邦", "司马迁", "张骞"],
    answer: 0,
    explain: "刘邦是西汉的开国者。可以先把他记成一个会找队友、会带队的开国队长。",
    review: "司马迁是写历史的人，张骞是后来往西边探路的人。建立西汉的人是刘邦。",
    character: "刘邦",
    relationUnlocks: ["liu-bang"],
    timelineUnlocks: ["western-han"],
    world: "一个新王朝建立，就像游戏开了新地图，后面的人物都要从这里接着认识。"
  },
  {
    id: 3,
    scene: "王朝走廊",
    title: "时间轴要连起来",
    prompt: "哪一条时间顺序更对？",
    options: ["秦 -> 西汉 -> 新 -> 东汉", "西汉 -> 秦 -> 东汉 -> 新", "秦 -> 东汉 -> 西汉 -> 新"],
    answer: 0,
    explain: "这条顺序是首版最重要的纵向线索。孩子不一定背年份，但一定要知道前后谁接谁。",
    review: "先抓两头：秦在西汉前面，东汉在新后面。中间不要把位置打乱。",
    character: "时间轴",
    relationUnlocks: [],
    timelineUnlocks: ["xin", "eastern-han"],
    world: "时间顺序像一条轨道，后面的故事都沿着它往前跑。"
  },
  {
    id: 4,
    scene: "宫廷关系",
    title: "人物不只是名字，还要知道关系",
    prompt: "吕后和刘邦是什么关系？",
    options: ["夫妻", "师生", "对手"],
    answer: 0,
    explain: "吕后和刘邦是夫妻。历史里很多事，不只是个人选择，也和家人、同盟、权力关系有关。",
    review: "这题不是比武关系，也不是上课关系。先想他们都在西汉开头的重要位置，就能想到是夫妻。",
    character: "吕后",
    relationUnlocks: ["lu-zhi", "link-liu-lu"],
    timelineUnlocks: [],
    world: "学历史不只是认脸，还要看他们怎么连在一起。"
  },
  {
    id: 5,
    scene: "百姓村庄",
    title: "怎样让大家过得轻松一点？",
    prompt: "如果你想让百姓休息、种田、吃饱饭，哪种做法更合适？",
    options: ["少收税，少折腾", "天天修大工程", "到处乱打仗"],
    answer: 0,
    explain: "这就是文景之治可以先让孩子感受到的地方：国家先稳下来，百姓日子会更好。",
    review: "想让大家过得轻松，当然不是一直打仗，也不是一直搞大工程。让百姓少累一点才对。",
    character: "文景之治",
    relationUnlocks: [],
    timelineUnlocks: ["wenjing"],
    world: "一个强大的国家，不一定先靠打仗，也可能先靠把日子过稳。"
  },
  {
    id: 6,
    scene: "诸侯地图",
    title: "谁想自己说了算？",
    prompt: "七国之乱里，最麻烦的问题是什么？",
    options: ["有些诸侯国不想听中央安排", "大家都想去种树", "皇帝不让吃饭"],
    answer: 0,
    explain: "这里不是让孩子背事件细节，而是知道：国家里会有中央和地方的关系问题。",
    review: "历史里的大乱子，常常和谁来做主有关。七国之乱重点不是吃饭和种树，而是谁不想听中央安排。",
    character: "中央与诸侯",
    relationUnlocks: [],
    timelineUnlocks: ["seven-states"],
    world: "历史中的很多冲突，背后都在问一个问题：谁来决定大事？"
  },
  {
    id: 7,
    scene: "少年皇帝",
    title: "国家想变强，要先找对人",
    prompt: "汉武帝想让国家更强，第一步更像下面哪一个？",
    options: ["重用能打仗、能做事的人", "把所有事情都拖着不管", "每天只玩不练"],
    answer: 0,
    explain: "汉武帝像一个行动派皇帝。他想把国家练强，所以特别需要能人。",
    review: "想变强，就不能一直拖着，更不能只玩不练。汉武帝这条线最重要的是重用人才。",
    character: "汉武帝",
    relationUnlocks: ["han-wudi"],
    timelineUnlocks: ["han-wudi-era"],
    world: "一个时代会不会变强，常常和它有没有找到合适的人有关系。"
  },
  {
    id: 8,
    scene: "边塞战场",
    title: "谁在前线帮汉武帝？",
    prompt: "卫青和霍去病主要是在对付谁？",
    options: ["匈奴", "秦始皇", "司马迁"],
    answer: 0,
    explain: "卫青和霍去病是汉武帝这条线上的重要将领，孩子可以先记住他们是同一阵营的战友。",
    review: "秦始皇比他们早得多，司马迁是写历史的人。卫青和霍去病是在边塞对付匈奴。",
    character: "卫青与霍去病",
    relationUnlocks: ["wei-qing", "huo-qubing", "link-wudi-wei", "link-wudi-huo"],
    timelineUnlocks: ["xiongnu-war"],
    world: "边疆安全会影响国家信心，所以这些将领很像守护队员。"
  },
  {
    id: 9,
    scene: "关系图点亮",
    title: "他们是什么关系？",
    prompt: "霍去病和卫青更像下面哪种关系？",
    options: ["亲属加战友", "陌生人", "师生加裁判"],
    answer: 0,
    explain: "这题就是为了让孩子看到人物网：不是孤零零记一个人，而是知道他们互相有关联。",
    review: "他们不是互不认识的人，也不是课堂关系。更关键的是：他们既有亲属关系，也一起打仗。",
    character: "人物关系",
    relationUnlocks: ["link-wei-huo"],
    timelineUnlocks: [],
    world: "人物关系图一旦亮起来，历史就不再像散开的卡片。"
  },
  {
    id: 10,
    scene: "丝路卷轴",
    title: "谁敢往西边探路？",
    prompt: "张骞向西出发，更像是在做什么？",
    options: ["帮国家找新路、交新朋友", "去海边抓鱼", "去天上摘星星"],
    answer: 0,
    explain: "张骞的意义，可以先让孩子理解成勇敢去远方，把中国和更远地方连起来的人。",
    review: "这题抓住关键词就行：'向西出发' 不是玩，也不是幻想，而是去远方探路和交流。",
    character: "张骞",
    relationUnlocks: ["zhang-qian", "link-wudi-zhang"],
    timelineUnlocks: ["silk-road"],
    world: "从这里开始，孩子会第一次感觉到：中国和很远的地方原来可以互相联系。"
  },
  {
    id: 11,
    scene: "世界同屏",
    title: "同一时间，西边也很热闹",
    prompt: "西汉很强的时候，世界西边也有个厉害的国家，更像下面哪一个？",
    options: ["罗马", "明朝", "元朝"],
    answer: 0,
    explain: "这题只建立横向感觉：原来西汉不是单独存在，同一时期的世界也在发生大事。",
    review: "明朝和元朝都比西汉晚得多。这里要记住的是：西汉同时期，西边还有罗马。",
    character: "罗马同时期",
    relationUnlocks: [],
    timelineUnlocks: ["rome"],
    world: "把中国放进世界里看，孩子会更容易产生“同一时间别处在干嘛”的好奇心。"
  },
  {
    id: 12,
    scene: "史官书房",
    title: "谁把故事认真记下来？",
    prompt: "很多后人能知道这些人物和故事，要感谢谁认真写历史？",
    options: ["司马迁", "霍去病", "刘邦"],
    answer: 0,
    explain: "司马迁让孩子知道：历史不是自动留下来的，是有人很认真地记、很认真地写。",
    review: "霍去病是将军，刘邦是开国者。写下很多历史故事、让后人能读到的人，是司马迁。",
    character: "司马迁",
    relationUnlocks: ["sima-qian"],
    timelineUnlocks: ["records"],
    world: "如果没有记录者，很多故事就会慢慢消失。"
  },
  {
    id: 13,
    scene: "终局总览",
    title: "把整张历史图拼完整",
    prompt: "下面哪一句最像我们刚刚拼出来的西汉地图？",
    options: [
      "人物会连线，时间会排队，中国也能和世界连起来",
      "历史就是只背一个年份",
      "只要记住一个名字就够了"
    ],
    answer: 0,
    explain: "首版目标不是背完西汉，而是知道：人物有关联，事件有前后，世界有同时期。",
    review: "历史不是只背一个年份，也不是只记一个名字。真正重要的是把人、时间、世界一起连起来。",
    character: "总复盘",
    relationUnlocks: [],
    timelineUnlocks: ["complete"],
    world: "这就是首版最重要的学习成果：一张关系图、一条时间轴、一个世界窗口。"
  }
];

const RELATION_NODES = [
  { id: "liu-bang", label: "刘邦", role: "开国队长", x: 18, y: 18 },
  { id: "lu-zhi", label: "吕后", role: "宫廷权力", x: 40, y: 14 },
  { id: "han-wudi", label: "汉武帝", role: "行动皇帝", x: 64, y: 18 },
  { id: "wei-qing", label: "卫青", role: "稳健大将", x: 50, y: 48 },
  { id: "huo-qubing", label: "霍去病", role: "少年猛将", x: 76, y: 46 },
  { id: "zhang-qian", label: "张骞", role: "西行探路", x: 34, y: 72 },
  { id: "sima-qian", label: "司马迁", role: "历史记录", x: 68, y: 76 }
];

const RELATION_LINKS = [
  { id: "link-liu-lu", from: "liu-bang", to: "lu-zhi", label: "夫妻" },
  { id: "link-wudi-wei", from: "han-wudi", to: "wei-qing", label: "重用" },
  { id: "link-wudi-huo", from: "han-wudi", to: "huo-qubing", label: "重用" },
  { id: "link-wudi-zhang", from: "han-wudi", to: "zhang-qian", label: "派出使者" },
  { id: "link-wei-huo", from: "wei-qing", to: "huo-qubing", label: "亲属 / 战友" }
];

const TIMELINE = [
  { id: "qin", label: "秦", year: "前221" },
  { id: "western-han", label: "西汉", year: "前202" },
  { id: "wenjing", label: "文景之治", year: "前180前后" },
  { id: "seven-states", label: "七国之乱", year: "前154" },
  { id: "han-wudi-era", label: "汉武帝", year: "前141" },
  { id: "xiongnu-war", label: "抗击匈奴", year: "前129前后" },
  { id: "silk-road", label: "张骞出使", year: "前138" },
  { id: "records", label: "司马迁写史", year: "前109前后" },
  { id: "xin", label: "新", year: "9" },
  { id: "eastern-han", label: "东汉", year: "25" },
  { id: "rome", label: "罗马同屏", year: "同时期" }
];

const state = {
  current: -1,
  selected: null,
  score: 0,
  unlockedRelations: new Set(),
  unlockedTimeline: new Set(),
  completed: false,
  feedback: null
};

const app = document.querySelector("#app");

function unlockItems(question) {
  for (const item of question.relationUnlocks) {
    state.unlockedRelations.add(item);
  }

  for (const item of question.timelineUnlocks) {
    state.unlockedTimeline.add(item);
  }
}

function buildFeedback(question, correct) {
  if (correct) {
    return {
      correct: true,
      title: "答对了，继续点亮历史地图",
      body: question.explain,
      review: "这一步已经点亮成功。继续往下玩，你会把人物关系图和时间轴越拼越完整。",
      actionLabel: question.id === QUESTIONS.length ? "去看通关总结" : "继续下一站",
      media: FEEDBACK_MEDIA.correct
    };
  }

  return {
    correct: false,
    title: "这题先别急，我们一起想明白",
    body: question.explain,
    review: question.review,
    actionLabel: question.id === QUESTIONS.length ? "我明白了" : "知道了，继续",
    media: FEEDBACK_MEDIA.wrong
  };
}

function advanceFromFeedback() {
  state.feedback = null;
  state.selected = null;

  if (state.current < QUESTIONS.length - 1) {
    state.current += 1;
  } else {
    state.completed = true;
  }

  render();
}

function nextQuestion() {
  state.feedback = null;
  state.selected = null;

  if (state.current === -1) {
    state.current = 0;
  } else if (state.current < QUESTIONS.length - 1) {
    state.current += 1;
  } else {
    state.completed = true;
  }

  render();
}

function selectOption(index) {
  if (state.selected !== null || state.feedback) {
    return;
  }

  state.selected = index;
  const question = QUESTIONS[state.current];
  const correct = index === question.answer;

  if (correct) {
    state.score += 1;
    unlockItems(question);
  }

  state.feedback = buildFeedback(question, correct);
  render();
}

function restart() {
  state.current = -1;
  state.selected = null;
  state.score = 0;
  state.unlockedRelations = new Set();
  state.unlockedTimeline = new Set();
  state.completed = false;
  state.feedback = null;
  render();
}

function renderStartScreen() {
  app.innerHTML = `
    <main class="game-shell intro-screen">
      <section class="intro-copy">
        <p class="eyebrow">横板 H5 历史问答原型</p>
        <h1>西汉小英雄</h1>
        <p class="intro-lead">
          跟着 Q 版人物闯过 13 站，把 <strong>人物关系图</strong>、<strong>时间轴</strong> 和
          <strong>世界同一时期</strong> 一次拼出来。
        </p>
        <div class="intro-tags">
          <span>适合二年级</span>
          <span>单屏横版</span>
          <span>三选一闯关</span>
          <span>6~8分钟</span>
        </div>
        <div class="intro-actions">
          <button class="cta-primary" id="start-game">开始冒险</button>
          <button class="cta-secondary" id="show-structure">看页面结构</button>
        </div>
      </section>

      <aside class="intro-brief">
        <h2>首版 UI 模块</h2>
        <ul>
          <li><strong>主舞台：</strong>故事标题、当前人物、问题卡片、三选一按钮</li>
          <li><strong>史官侧栏：</strong>人物关系图、时间轴、世界历史提示</li>
          <li><strong>顶部 HUD：</strong>关卡、得分、学习目标</li>
          <li><strong>反馈弹窗：</strong>正确 / 错误 GIF、解释、继续下一关</li>
        </ul>
      </aside>
    </main>
  `;

  document.querySelector("#start-game").addEventListener("click", nextQuestion);
  document.querySelector("#show-structure").addEventListener("click", () => {
    document
      .querySelector(".intro-brief")
      ?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
}

function renderGraph() {
  const linkMarkup = RELATION_LINKS.map((link) => {
    const from = RELATION_NODES.find((node) => node.id === link.from);
    const to = RELATION_NODES.find((node) => node.id === link.to);
    const unlocked = state.unlockedRelations.has(link.id);
    const length = Math.hypot(to.x - from.x, to.y - from.y);
    const angle = (Math.atan2(to.y - from.y, to.x - from.x) * 180) / Math.PI;

    return `
      <div
        class="graph-link ${unlocked ? "is-live" : ""}"
        style="left:${from.x}%; top:${from.y}%; width:${length}%; transform: rotate(${angle}deg);"
      >
        <span>${link.label}</span>
      </div>
    `;
  }).join("");

  const nodeMarkup = RELATION_NODES.map((node) => {
    const unlocked = state.unlockedRelations.has(node.id);

    return `
      <article
        class="graph-node ${unlocked ? "is-live" : ""}"
        style="left:${node.x}%; top:${node.y}%;"
      >
        <h4>${node.label}</h4>
        <p>${node.role}</p>
      </article>
    `;
  }).join("");

  return `
    <section class="sidebar-card graph-card">
      <div class="card-heading">
        <p>人物关系图</p>
        <span>答对后点亮人物与连线</span>
      </div>
      <div class="graph-board">
        ${linkMarkup}
        ${nodeMarkup}
      </div>
    </section>
  `;
}

function renderTimeline() {
  const items = TIMELINE.map((item) => {
    const unlocked = state.unlockedTimeline.has(item.id);

    return `
      <li class="timeline-item ${unlocked ? "is-live" : ""}">
        <span class="timeline-dot"></span>
        <div>
          <strong>${item.label}</strong>
          <small>${item.year}</small>
        </div>
      </li>
    `;
  }).join("");

  return `
    <section class="sidebar-card timeline-card">
      <div class="card-heading">
        <p>纵向时间轴</p>
        <span>从秦到东汉，边玩边排顺序</span>
      </div>
      <ol class="timeline-list">${items}</ol>
    </section>
  `;
}

function renderFeedbackModal() {
  if (!state.feedback) {
    return "";
  }

  const reviewBlock = !state.feedback.correct
    ? `
      <div class="modal-review">
        <p class="modal-review-label">答疑一下</p>
        <p class="modal-review-copy">${state.feedback.review}</p>
      </div>
    `
    : `
      <div class="modal-review is-soft">
        <p class="modal-review-label">小收获</p>
        <p class="modal-review-copy">${state.feedback.review}</p>
      </div>
    `;

  return `
    <div class="feedback-modal-backdrop">
      <section class="feedback-modal ${state.feedback.correct ? "is-correct" : "is-wrong"}" role="dialog" aria-modal="true">
        <div class="feedback-modal-media">
          <img src="${state.feedback.media}" alt="${state.feedback.correct ? "答对庆祝" : "答错思考"}" />
        </div>
        <div class="feedback-modal-copy">
          <p class="feedback-modal-tag">${state.feedback.correct ? "回答正确" : "回答错误"}</p>
          <h3>${state.feedback.title}</h3>
          <p class="feedback-modal-body">${state.feedback.body}</p>
          ${reviewBlock}
          <button class="cta-primary" id="modal-next">${state.feedback.actionLabel}</button>
        </div>
      </section>
    </div>
  `;
}

function renderCompleteScreen() {
  const percent = Math.round((state.score / QUESTIONS.length) * 100);

  app.innerHTML = `
    <main class="game-shell finish-screen">
      <section class="finish-summary">
        <p class="eyebrow">通关完成</p>
        <h1>历史拼图亮起来了</h1>
        <p class="intro-lead">
          你一共答对 <strong>${state.score}</strong> / <strong>${QUESTIONS.length}</strong> 题，完成度
          <strong>${percent}%</strong>。
        </p>
        <div class="recap-grid">
          <article>
            <h3>人物</h3>
            <p>刘邦、吕后、汉武帝、卫青、霍去病、张骞、司马迁</p>
          </article>
          <article>
            <h3>时间</h3>
            <p>秦 -> 西汉 -> 新 -> 东汉，关键节点也已经点亮。</p>
          </article>
          <article>
            <h3>世界</h3>
            <p>孩子能知道：西汉同时期，西边还有罗马这样的强国。</p>
          </article>
        </div>
        <div class="intro-actions">
          <button class="cta-primary" id="restart-game">再玩一遍</button>
        </div>
      </section>
      <section class="finish-panels">
        ${renderGraph()}
        ${renderTimeline()}
      </section>
    </main>
  `;

  document.querySelector("#restart-game").addEventListener("click", restart);
}

function renderGameScreen() {
  const question = QUESTIONS[state.current];
  const progress = Math.round((question.id / QUESTIONS.length) * 100);
  const isAnswered = state.selected !== null;
  const answerCorrect = isAnswered && state.selected === question.answer;
  const sceneLabel = `第 ${question.id} 站`;

  const optionsMarkup = question.options
    .map((option, index) => {
      let className = "answer-button";

      if (isAnswered && index === question.answer) {
        className += " is-correct";
      } else if (isAnswered && index === state.selected) {
        className += " is-wrong";
      }

      return `
        <button class="${className}" data-index="${index}">
          <span class="option-index">${["A", "B", "C"][index]}</span>
          <span class="option-text">${option}</span>
        </button>
      `;
    })
    .join("");

  app.innerHTML = `
    <main class="game-shell play-screen">
      <section class="main-stage">
        <header class="stage-topbar">
          <div>
            <p class="eyebrow">西汉小英雄</p>
            <h1>${sceneLabel} · ${question.scene}</h1>
          </div>
          <div class="hud">
            <div class="hud-pill">
              <span>进度</span>
              <strong>${question.id}/${QUESTIONS.length}</strong>
            </div>
            <div class="hud-pill">
              <span>得分</span>
              <strong>${state.score}</strong>
            </div>
            <div class="hud-pill">
              <span>目标</span>
              <strong>人物 + 时间 + 世界</strong>
            </div>
          </div>
        </header>

        <section class="stage-content">
          <div class="story-block">
            <div class="story-copy">
              <span class="story-tag">${question.character}</span>
              <h2>${question.title}</h2>
              <p>${question.prompt}</p>
            </div>

            <div class="answer-grid">
              ${optionsMarkup}
            </div>

            <footer class="feedback-bar ${isAnswered ? (answerCorrect ? "ok" : "retry") : ""}">
              <div>
                <p class="feedback-title">
                  ${
                    isAnswered
                      ? answerCorrect
                        ? "答对了，弹窗里会继续讲清楚"
                        : "先看弹窗答疑，再继续下一站"
                      : "准备好就选一个答案"
                  }
                </p>
                <p class="feedback-copy">
                  ${
                    isAnswered
                      ? answerCorrect
                        ? question.explain
                        : question.review
                      : "每次答题后都会弹出 GIF 反馈，答错时还会给一小段答疑。"
                  }
                </p>
              </div>
            </footer>
          </div>

          <figure class="cast-stage">
            <img src="${castImage}" alt="西汉 Q 版人物组图" />
            <figcaption>
              <span>Q版人物阵容</span>
              <strong>低龄友好的历史冒险队</strong>
            </figcaption>
          </figure>
        </section>

        <div class="progress-track">
          <div class="progress-fill" style="width:${Math.max(progress, 6)}%"></div>
        </div>
      </section>

      <aside class="sidebar">
        <section class="sidebar-card world-card">
          <div class="card-heading">
            <p>横向世界关系</p>
            <span>同一时间，别处也在发生故事</span>
          </div>
          <div class="world-note">
            <strong>世界小窗口</strong>
            <p>${question.world}</p>
          </div>
        </section>
        ${renderGraph()}
        ${renderTimeline()}
      </aside>
      ${renderFeedbackModal()}
    </main>
  `;

  document.querySelectorAll(".answer-button").forEach((button) => {
    button.addEventListener("click", () => {
      selectOption(Number(button.dataset.index));
    });
  });

  document.querySelector("#modal-next")?.addEventListener("click", advanceFromFeedback);
}

function render() {
  if (state.current === -1) {
    renderStartScreen();
    return;
  }

  if (state.completed) {
    renderCompleteScreen();
    return;
  }

  renderGameScreen();
}

render();

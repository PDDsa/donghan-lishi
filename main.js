import "./styles.css";
import castImage from "./assets/han-cast.png";
import correctFeedbackGif from "./assets/feedback-correct.gif";
import wrongFeedbackGif from "./assets/feedback-wrong.gif";

const FEEDBACK_MEDIA = {
  correct: correctFeedbackGif,
  wrong: wrongFeedbackGif
};

const BASE_QUESTIONS = [
  {
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
    world: "这时候世界另一边也有很多国家在发展，但中国先进入了西汉的新阶段。",
    worldTitle: "同一时间，地中海边也在变化",
    worldDetail:
      "西汉刚建立时，地中海周围也有很多国家在争夺力量。孩子只要先有一个感觉：世界不是静止的，中国和别处都在往前走。"
  },
  {
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
    world: "一个新王朝建立，就像游戏开了新地图，后面的人物都要从这里接着认识。",
    worldTitle: "西边也在出现大人物",
    worldDetail:
      "西汉建立前后，地中海世界也有很多著名人物登场。对孩子来说，先知道“不同地方会同时出现英雄和强国”就够了。"
  },
  {
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
    world: "时间顺序像一条轨道，后面的故事都沿着它往前跑。",
    worldTitle: "世界史也有自己的时间轴",
    worldDetail:
      "就像中国有秦、西汉、新、东汉，西边很多国家也有自己的前后顺序。学历史常常要两条线一起看：一条看中国，一条看世界。"
  },
  {
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
    world: "学历史不只是认脸，还要看他们怎么连在一起。",
    worldTitle: "古代各地都很看重家族关系",
    worldDetail:
      "不只是中国，很多古代国家的大事也会被家族关系影响。孩子可以先理解成：大人之间的关系，会改变国家怎么走。"
  },
  {
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
    world: "一个强大的国家，不一定先靠打仗，也可能先靠把日子过稳。",
    worldTitle: "古代人都离不开粮食和安稳",
    worldDetail:
      "世界很多地方的老百姓也一样，希望少打仗、能种田、有粮吃。孩子可以知道：安稳的日子，在古今中外都很重要。"
  },
  {
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
    world: "历史中的很多冲突，背后都在问一个问题：谁来决定大事？",
    worldTitle: "别的国家也会遇到“谁做主”",
    worldDetail:
      "有些古代国家也会碰到类似问题：地方想自己决定，中央想统一安排。孩子可以把它理解成“大队长和小队长怎么分工”。"
  },
  {
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
    world: "一个时代会不会变强，常常和它有没有找到合适的人有关系。",
    worldTitle: "强国往往都会重用人才",
    worldDetail:
      "不只是西汉，很多古代强国都在想同一件事：怎样找到会做事的人。孩子可以先明白，厉害的团队都需要好队员。"
  },
  {
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
    world: "边疆安全会影响国家信心，所以这些将领很像守护队员。",
    worldTitle: "别的国家也常常要守边",
    worldDetail:
      "古代很多国家都要保护边境和商路，因为外面的危险会影响大家生活。孩子可以把将领看成“守门员”和“护卫队长”。"
  },
  {
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
    world: "人物关系图一旦亮起来，历史就不再像散开的卡片。",
    worldTitle: "世界历史里也能画关系图",
    worldDetail:
      "很多地方的历史人物也互相有关联：有的是亲人，有的是老师，有的是同盟。会画关系图，就更容易记住历史故事。"
  },
  {
    scene: "丝路卷轴",
    title: "谁敢往西边探路？",
    prompt: "张骞向西出发，更像是在做什么？",
    options: ["帮国家找新路、交新朋友", "去海边抓鱼", "去天上摘星星"],
    answer: 0,
    explain: "张骞的意义，可以先让孩子理解成勇敢去远方，把中国和更远地方连起来的人。",
    review: "这题抓住关键词就行：“向西出发”不是玩，也不是幻想，而是去远方探路和交流。",
    character: "张骞",
    relationUnlocks: ["zhang-qian", "link-wudi-zhang"],
    timelineUnlocks: ["silk-road"],
    world: "从这里开始，孩子会第一次感觉到：中国和很远的地方原来可以互相联系。",
    worldTitle: "路一通，远方就不再那么远",
    worldDetail:
      "张骞打开的新路线，让中国、西域和更远地方能慢慢互通消息和货物。孩子可以把它想成一条越来越长的朋友之路。"
  },
  {
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
    world: "把中国放进世界里看，孩子会更容易产生“同一时间别处在干嘛”的好奇心。",
    worldTitle: "罗马也在修路、建城、变强",
    worldDetail:
      "西汉同时期，罗马也越来越强，修路、建城、管理很多地方。孩子不用记复杂名字，只要知道：西边也有一个大强国。"
  },
  {
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
    world: "如果没有记录者，很多故事就会慢慢消失。",
    worldTitle: "别的地方也有人写下历史",
    worldDetail:
      "世界很多地方也会有人记事、刻字、写书。孩子可以先知道：人类能记住过去，是因为总有人愿意把事情写下来。"
  },
  {
    scene: "长安城门",
    title: "西汉最重要的大城是哪儿？",
    prompt: "很多皇帝和大臣办大事时，最重要的都城更像下面哪一个？",
    options: ["长安", "上海", "广州"],
    answer: 0,
    explain: "长安是西汉的重要都城。可以把它想成国家的大脑，很多命令和消息都从这里发出去。",
    review: "上海和广州是今天大家熟悉的大城市，但说到西汉的都城，要先记住长安。",
    character: "长安",
    relationUnlocks: [],
    timelineUnlocks: ["chang-an"],
    world: "大城会把人、路、消息和货物慢慢聚在一起。",
    worldTitle: "古代强国几乎都有自己的中心大城",
    worldDetail:
      "罗马有罗马城，西汉有长安。孩子可以先理解成：厉害的国家常常会有一个很重要的大城市，像总指挥部。"
  },
  {
    scene: "学堂新开",
    title: "国家想选人才，还能怎么做？",
    prompt: "汉武帝如果想让更多聪明孩子长大后帮国家做事，他更可能先做什么？",
    options: ["开学堂、重视读书", "把书都藏起来", "让大家都不学习"],
    answer: 0,
    explain: "西汉后来越来越重视读书和培养人才。孩子可以先知道：国家变强，不只靠打仗，也靠学习。",
    review: "想选人才，当然不能把书藏起来。让更多人学习，才更容易找到会做事的人。",
    character: "太学",
    relationUnlocks: [],
    timelineUnlocks: ["taixue"],
    world: "一个国家越会培养人才，越容易把很多事做好。",
    worldTitle: "世界很多地方也会培养会写会算的人",
    worldDetail:
      "古代不只中国需要会读书、会记事、会管理的人，很多地方也一样。孩子可以先记住：学习本身就是一种力量。"
  },
  {
    scene: "读书建议",
    title: "谁建议皇帝更重视学问？",
    prompt: "如果汉武帝想听一位老师型的人给建议，下面谁更像这个角色？",
    options: ["董仲舒", "卫青", "霍去病"],
    answer: 0,
    explain: "董仲舒更像一个给皇帝提读书和治理建议的人，不是前线打仗的将军。",
    review: "卫青和霍去病是战场上的重要将领；董仲舒更像给国家出读书和治理主意的老师。",
    character: "董仲舒",
    relationUnlocks: [],
    timelineUnlocks: ["dong-zhongshu"],
    world: "有时候让国家变强的，不只是将军，也有会思考的大脑。",
    worldTitle: "很多国家都需要出主意的人",
    worldDetail:
      "有的英雄在战场上厉害，有的英雄在书房里厉害。孩子可以先知道：会思考、会提建议的人，也能改变国家。"
  },
  {
    scene: "丰收粮仓",
    title: "仓里粮食多，说明前面做对了什么？",
    prompt: "如果粮仓慢慢满起来，百姓也愿意种田，这更说明国家前面做得怎么样？",
    options: ["比较稳，大家能安心生活", "越来越乱，谁也不想干活", "完全停下来什么都不做"],
    answer: 0,
    explain: "粮仓满起来，往往说明前面的治理比较稳，大家愿意种田、运输和储存粮食。",
    review: "越乱的时候，大家越难安心种田。粮仓能装满，通常说明国家先把基本日子稳住了。",
    character: "粮仓",
    relationUnlocks: [],
    timelineUnlocks: [],
    world: "会种田、会储粮，是古代国家能不能稳住的基础。",
    worldTitle: "古代世界到处都怕缺粮",
    worldDetail:
      "不管在中国还是别的地方，粮食都很重要。孩子可以想象：如果没有粮食，再厉害的国家也会很难受。"
  },
  {
    scene: "出使北方",
    title: "苏武为什么让人记住？",
    prompt: "如果一个使者被困很久也不乱改主意，我们更会说他是什么样的人？",
    options: ["坚定守信", "特别懒惰", "总爱撒谎"],
    answer: 0,
    explain: "苏武常被大家记住，是因为他在很难的时候也很坚定，很守自己的责任。",
    review: "被困很久还不乱改主意，不是懒，也不是撒谎，而是说明他很坚定、很守信。",
    character: "苏武",
    relationUnlocks: [],
    timelineUnlocks: ["su-wu"],
    world: "有些人伟大，不是因为打赢了仗，而是因为在困难时也不轻易放弃。",
    worldTitle: "很多古代故事都敬佩守信的人",
    worldDetail:
      "世界很多地方也会称赞守信、坚定的人。孩子可以先记住：有时候勇敢，不只是冲上去，也是不随便变心。"
  },
  {
    scene: "和亲之路",
    title: "王昭君去北方，更像在做什么？",
    prompt: "如果一个人去了很远的地方，希望两边少打仗、多相处，这更像是在做什么？",
    options: ["帮助和平交流", "把路都堵上", "故意制造混乱"],
    answer: 0,
    explain: "王昭君的故事常被孩子理解成一个和和平、交流有关的人物线索。",
    review: "想让两边关系更平和，当然不是堵路，更不是制造混乱，而是努力沟通和交流。",
    character: "王昭君",
    relationUnlocks: [],
    timelineUnlocks: ["wang-zhaojun"],
    world: "历史里不只有打仗的人，也有帮助大家少打仗的人。",
    worldTitle: "和平交流也是历史的一部分",
    worldDetail:
      "不只是中国，很多地方都会想办法减少冲突、增加来往。孩子可以知道：会谈和会走动，也是一种力量。"
  },
  {
    scene: "丝路货箱",
    title: "丝绸之路上，别人最想带走什么？",
    prompt: "如果远方商人来到汉朝，他们最可能想把哪样很有名的东西带回去？",
    options: ["丝绸", "电灯", "火车"],
    answer: 0,
    explain: "丝绸之路这个名字就提醒我们：丝绸是中国很有代表性的货物之一。",
    review: "电灯和火车都不是西汉时的东西。说到丝绸之路，当然最容易想到丝绸。",
    character: "丝绸",
    relationUnlocks: [],
    timelineUnlocks: ["silk-road"],
    world: "一条路会有来回的货物，也会有来回的消息和想法。",
    worldTitle: "路上不只走货物，也会走故事",
    worldDetail:
      "商人带走丝绸，也会带走见闻。孩子可以把丝绸之路想成一条会交换东西、也会交换故事的大路。"
  },
  {
    scene: "新朋友的种子",
    title: "为什么路一通，东西会变多？",
    prompt: "远方的人带来葡萄、胡麻这些新东西，更说明了什么？",
    options: ["不同地方能互相交换", "大家只能待在原地", "路通了反而谁也不见谁"],
    answer: 0,
    explain: "一条路打通后，不同地方的人和物就更容易来来往往，这就是交流的力量。",
    review: "如果大家只能待在原地，就不会有那么多新东西进来。新作物出现，说明交流真的发生了。",
    character: "交流",
    relationUnlocks: [],
    timelineUnlocks: [],
    world: "世界会因为交流变得更丰富，饭桌、衣服和见识都会变化。",
    worldTitle: "交流会让生活里多出新惊喜",
    worldDetail:
      "今天我们吃到的很多东西，古代也可能是慢慢传来的。孩子可以先知道：路一通，世界就会彼此影响。"
  },
  {
    scene: "小皇帝的帮手",
    title: "皇帝年纪小，谁来先稳住队伍？",
    prompt: "如果皇帝还小，朝廷需要一个稳一点的大人帮忙，下面谁更像这种角色？",
    options: ["霍光", "张骞", "司马迁"],
    answer: 0,
    explain: "霍光常被看作一个帮助年轻皇帝稳住朝廷的重要人物线索。",
    review: "张骞更像探路使者，司马迁更像记录历史的人；说到辅佐年轻皇帝，先记住霍光。",
    character: "霍光",
    relationUnlocks: [],
    timelineUnlocks: ["huo-guang"],
    world: "一个队伍里，有时也需要稳住局面的副队长。",
    worldTitle: "古代国家也需要“临时队长”",
    worldDetail:
      "不只中国，很多地方在领袖还小或不在时，也会让经验丰富的大人先把队伍稳住。稳定常常很重要。"
  },
  {
    scene: "盐铁仓库",
    title: "国家要守边，也要准备资源",
    prompt: "如果国家想铸兵器、做工具、维持很多事情，哪一类东西会特别重要？",
    options: ["盐和铁", "气球和彩带", "糖果和玩具"],
    answer: 0,
    explain: "孩子不必记复杂政策，只要先知道：盐和铁在古代都是很关键的资源。",
    review: "气球、彩带、糖果都不可能撑起一个古代国家。说到重要资源，先记住盐和铁。",
    character: "盐铁",
    relationUnlocks: [],
    timelineUnlocks: ["salt-iron"],
    world: "会不会管理重要资源，也会影响国家强不强。",
    worldTitle: "很多古代国家都很看重金属和资源",
    worldDetail:
      "铁能做工具和兵器，盐能保存食物，所以不只是中国，很多地方都很重视这些东西。资源会影响生活，也会影响战争。"
  },
  {
    scene: "星空历法",
    title: "为什么古人要认真看日子？",
    prompt: "如果农民要知道什么时候播种、什么时候收获，最需要什么帮助？",
    options: ["清楚的历法", "每天猜一猜", "完全不看季节"],
    answer: 0,
    explain: "历法能帮大家知道季节和时间，对古代生活特别重要。",
    review: "种田不能乱猜，更不能完全不看季节。历法就是帮大家把时间看清楚的工具。",
    character: "历法",
    relationUnlocks: [],
    timelineUnlocks: ["calendar"],
    world: "看懂时间，古代人才能更好安排农事、祭祀和出行。",
    worldTitle: "很多古代文明都会认真研究时间",
    worldDetail:
      "不只是西汉，古埃及、两河流域、罗马等地方也都很看重历法。孩子可以先知道：会安排时间，是文明进步的一种表现。"
  },
  {
    scene: "中间的新朝",
    title: "西汉和东汉中间，谁把名字先改掉了？",
    prompt: "如果你要找出西汉和东汉中间那段特别短的新王朝，更像下面哪一个？",
    options: ["新", "清", "宋"],
    answer: 0,
    explain: "在西汉和东汉之间，出现过一个叫“新”的王朝，所以时间轴上会有一个小小的转弯。",
    review: "清和宋都不在这里。要把西汉和东汉中间的小阶段记住，就是“新”。",
    character: "新朝",
    relationUnlocks: [],
    timelineUnlocks: ["xin"],
    world: "王朝有时候会换得很快，所以时间轴才这么重要。",
    worldTitle: "世界很多地方也有短短的过渡时期",
    worldDetail:
      "有些王朝和国家能维持很久，有些只过了不长时间就换了。孩子可以把“新”看成西汉和东汉中间的一小段桥。"
  },
  {
    scene: "汉朝接力",
    title: "谁把汉朝重新接起来了？",
    prompt: "新朝后面，如果有人把“汉”这个名字重新接起来，他更像下面谁？",
    options: ["刘秀", "霍去病", "董仲舒"],
    answer: 0,
    explain: "刘秀建立了东汉，所以孩子能从这里看懂：西汉后面不是结束，而是还有接力。",
    review: "霍去病是西汉将领，董仲舒是提建议的人。把汉朝重新接起来的是刘秀。",
    character: "刘秀",
    relationUnlocks: [],
    timelineUnlocks: ["eastern-han"],
    world: "时间轴往后走，历史不是断掉，而是会接力。",
    worldTitle: "接力看历史，比只盯着一个点更重要",
    worldDetail:
      "学中国史时，知道前后怎么接力很重要；学世界史也一样。很多变化不是突然出现，而是一段接一段地往前走。"
  },
  {
    scene: "路上接力站",
    title: "丝绸之路是不是一口气跑到罗马？",
    prompt: "从长安到很远很远的西边，货物和消息更像是怎么过去的？",
    options: ["靠很多地方一站站接力", "一下子就飞过去", "完全没人传递"],
    answer: 0,
    explain: "丝绸之路不是一条人一下跑到底的路，而是很多地方慢慢接力，东西一点点往前传。",
    review: "古代没有一下飞过去的办法。能到很远地方，往往靠一站站接力交换。",
    character: "商队",
    relationUnlocks: [],
    timelineUnlocks: [],
    world: "世界互相联系，不一定是一跳到达，常常是慢慢传过去的。",
    worldTitle: "中间很多地方也很重要",
    worldDetail:
      "中国和罗马之间并不是挨着的，中间还有很多国家和城市在接力。孩子可以把它想成一条很长很长的传球路线。"
  },
  {
    scene: "世界大路",
    title: "为什么罗马也会越来越有名？",
    prompt: "如果一个国家会修路、建城、让很多地方连起来，它更可能变成什么样？",
    options: ["越来越强、越来越有名", "马上什么都没有了", "谁也不认识它"],
    answer: 0,
    explain: "罗马会变强，也和它能修路、建城、管理很多地方有关。",
    review: "路和城会让人、货、消息走得更顺，所以不是“什么都没有了”，而是更容易变强。",
    character: "罗马",
    relationUnlocks: [],
    timelineUnlocks: ["rome"],
    world: "看世界历史时，也能找到和西汉一样的“变强秘诀”。",
    worldTitle: "西汉和罗马都在想：怎样把路连起来",
    worldDetail:
      "西汉打通往西的路，罗马也在修自己的大路。两个强国虽然很远，却都知道：路一通，国家会更有力量。"
  },
  {
    scene: "终局总览",
    title: "再拼一次更完整的历史地图",
    prompt: "如果把西汉比成一支队伍，下面哪种说法最像这支队伍？",
    options: ["刘邦开头，汉武帝练强，张骞把路往外连", "只有一个人最重要，其他都不用看", "历史只要背一个年份就全部结束"],
    answer: 0,
    explain: "这样看就完整多了：开国、变强、探路、记史、接力，都是这张历史图的一部分。",
    review: "历史不是只看一个人，也不是只背一个年份。把人物、时间、世界和变化一起看，才更像真的地图。",
    character: "总复盘",
    relationUnlocks: [],
    timelineUnlocks: ["complete"],
    world: "现在你已经能同时看人物关系、时间顺序和世界窗口了。",
    worldTitle: "把中国和世界一起看，地图才会真正亮起来",
    worldDetail:
      "学西汉不只是记故事，更是练一种看世界的方法：看人物怎么连，时间怎么排，别处同时又在发生什么。"
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
  { id: "chang-an", label: "长安", year: "都城线索" },
  { id: "wenjing", label: "文景之治", year: "前180前后" },
  { id: "seven-states", label: "七国之乱", year: "前154" },
  { id: "han-wudi-era", label: "汉武帝", year: "前141" },
  { id: "taixue", label: "太学", year: "汉武帝时" },
  { id: "dong-zhongshu", label: "董仲舒", year: "思想线索" },
  { id: "xiongnu-war", label: "抗击匈奴", year: "前129前后" },
  { id: "silk-road", label: "张骞出使", year: "前138" },
  { id: "salt-iron", label: "盐铁", year: "资源管理" },
  { id: "calendar", label: "历法", year: "看季节" },
  { id: "records", label: "司马迁写史", year: "前109前后" },
  { id: "su-wu", label: "苏武", year: "使者精神" },
  { id: "wang-zhaojun", label: "王昭君", year: "和平线索" },
  { id: "huo-guang", label: "霍光", year: "辅政线索" },
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
  feedback: null,
  worldOpen: false
};

const app = document.querySelector("#app");

function createSeededRandom(seed) {
  let value = seed;

  return () => {
    value += 0x6d2b79f5;
    let next = Math.imul(value ^ (value >>> 15), value | 1);
    next ^= next + Math.imul(next ^ (next >>> 7), next | 61);
    return ((next ^ (next >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffleOptions(question, seed) {
  const options = question.options.map((label, index) => ({
    label,
    isAnswer: index === question.answer
  }));
  const random = createSeededRandom(seed);

  for (let index = options.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(random() * (index + 1));
    [options[index], options[randomIndex]] = [options[randomIndex], options[index]];
  }

  return {
    ...question,
    options: options.map((option) => option.label),
    answer: options.findIndex((option) => option.isAnswer)
  };
}

const QUESTIONS = BASE_QUESTIONS.map((question, index) => ({
  id: index + 1,
  ...shuffleOptions(question, index + 17)
}));

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

function closeWorld() {
  state.worldOpen = false;
  render();
}

function openWorld() {
  if (state.feedback || state.completed || state.current < 0) {
    return;
  }

  state.worldOpen = true;
  render();
}

function advanceFromFeedback() {
  state.feedback = null;
  state.worldOpen = false;
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
  state.worldOpen = false;
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
  state.worldOpen = false;
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
  state.worldOpen = false;
  render();
}

function renderStartScreen() {
  app.innerHTML = `
    <main class="game-shell intro-screen">
      <section class="intro-copy">
        <p class="eyebrow">横板 H5 历史问答原型</p>
        <h1>西汉小英雄</h1>
        <p class="intro-lead">
          跟着 Q 版人物闯过 <strong>${QUESTIONS.length}</strong> 站，把 <strong>人物关系图</strong>、<strong>时间轴</strong> 和
          <strong>世界同一时期</strong> 一次拼出来。
        </p>
        <div class="intro-tags">
          <span>适合二年级</span>
          <span>单屏横版</span>
          <span>三选一闯关</span>
          <span>约 10~12 分钟</span>
        </div>
        <div class="intro-actions">
          <button class="cta-primary" id="start-game">开始冒险</button>
          <button class="cta-secondary" id="show-structure">看页面结构</button>
        </div>
      </section>

      <aside class="intro-brief">
        <h2>这一版新增</h2>
        <ul>
          <li><strong>题目扩展：</strong>从 13 题增加到 ${QUESTIONS.length} 题</li>
          <li><strong>答案打散：</strong>正确答案不再固定在 A</li>
          <li><strong>世界小窗口：</strong>点击可查看同时期的简短世界史文字</li>
          <li><strong>反馈弹窗：</strong>正确 / 错误 GIF 和答错答疑继续保留</li>
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

function renderWorldModal(question) {
  if (!state.worldOpen || state.feedback) {
    return "";
  }

  return `
    <div class="feedback-modal-backdrop world-backdrop">
      <section class="world-modal" role="dialog" aria-modal="true">
        <div class="world-modal-head">
          <p class="feedback-modal-tag">同时期世界小故事</p>
          <button class="world-close" id="world-close" aria-label="关闭世界小窗口">×</button>
        </div>
        <h3>${question.worldTitle}</h3>
        <p class="world-modal-summary">${question.world}</p>
        <div class="world-modal-body">
          <p>${question.worldDetail}</p>
        </div>
        <button class="cta-primary" id="world-ok">知道了</button>
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
            <p>你已经能把刘邦、汉武帝、卫青、霍去病、张骞、司马迁这些人物放进同一张图里看。</p>
          </article>
          <article>
            <h3>时间</h3>
            <p>你已经知道秦、西汉、新、东汉怎么接力，还补进了长安、丝路、历法等线索。</p>
          </article>
          <article>
            <h3>世界</h3>
            <p>你已经知道：西汉同时期，西边还有罗马和很多中间接力的地方，世界并不是分开的。</p>
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
            <span>点开看看同时期在发生什么</span>
          </div>
          <button class="world-note world-note-button" id="world-trigger" type="button">
            <strong>世界小窗口</strong>
            <p>${question.world}</p>
            <span class="world-note-hint">点击展开同时期简史</span>
          </button>
        </section>
        ${renderGraph()}
        ${renderTimeline()}
      </aside>
      ${renderFeedbackModal()}
      ${renderWorldModal(question)}
    </main>
  `;

  document.querySelectorAll(".answer-button").forEach((button) => {
    button.addEventListener("click", () => {
      selectOption(Number(button.dataset.index));
    });
  });

  document.querySelector("#modal-next")?.addEventListener("click", advanceFromFeedback);
  document.querySelector("#world-trigger")?.addEventListener("click", openWorld);
  document.querySelector("#world-close")?.addEventListener("click", closeWorld);
  document.querySelector("#world-ok")?.addEventListener("click", closeWorld);
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

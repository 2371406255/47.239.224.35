const comments = [
  `客服的耐心简直就像夏天的冰棍，让我烦躁的心情瞬间降温！`,
  `他们的态度好到我都想拜师学艺了，简直是服务业的楷模！`,
  `每次跟客服聊天，我都觉得像是在听相声，笑得我合不拢嘴！`,
  `客服的耐心就像一本永远翻不完的书，让我感到无比安心。`,
  `他们的态度好到让我怀疑，这真的是在解决问题吗？简直是在享受服务啊！`,
  `客服的耐心就像海绵里的水，挤都挤不完！`,
  `每次找客服，我都觉得自己像是VIP客户，享受五星级的服务！`,
  `他们的态度好到我都想给他们颁个奖了，真的是太棒了！`,
  `客服的耐心就像冬天的暖炉，让我感觉温暖如春。`,
  `他们的态度好到让我觉得自己像个国王，被宠得无法无天！`,
  `客服的耐心就像一坛陈年老酒，越品越有味！`,
  `他们的态度好到我都想跟着他们混了，简直就是人生导师啊！`,
  `客服的耐心让我感受到了什么叫做“永不放弃”！`,
  `他们的态度好到让我怀疑，这世界上还有比他们更棒的人吗？`,
  `客服的耐心就像一首优美的歌曲，让我心旷神怡。`,
  `他们的态度好到让我觉得，服务也可以是一种享受！`,
  `客服的耐心就像一盏明灯，照亮了我解决问题的道路。`,
  `他们的态度好到让我忍不住想给他们送上一束鲜花，表达我的敬意！`,
  `客服的耐心就像一本百科全书，无论我问什么都能给出满意的答案。`,
  `他们的态度好到让我觉得，这个世界真美好！每次找他们都能让我感到心情愉快！`,
  `这网站页面真好看，看得我眼睛都舍不得眨，怕错过每一个美丽的瞬间！`,
  `网站流畅得就像刚出锅的豆腐脑，一点都不卡，简直是享受！`,
  `设计师肯定是个颜值控，网站页面这么好看，我都不好意思在里面乱点了。`,
  `打开这网站，我就像打开了新世界的大门，流畅得让人怀疑是不是穿越了！`,
  `网页加载速度这么快，我都担心我的电脑会累坏，太给力了！`,
  `这网站页面设计得如此精美，每次打开都像在欣赏一幅艺术品。`,
  `网站流畅得让我忘记了自己在上网，感觉就像是在玩一场虚拟现实游戏！`,
  `设计师的审美真高，页面设计得既好看又实用，我都忍不住想拜师学艺了！`,
  `网站流畅得就像一条清澈的小溪，一点杂质都没有，让人心情愉悦。`,
  `页面好看得让人移不开眼，网站流畅得让人停不下来，我已经彻底被这网站俘虏了！`,
  `这网站的界面设计简直炫酷到没朋友，每次打开都感觉自己身处科幻大片现场！`,
  `功能齐全得让人眼花缭乱，简直就像个万能的百宝箱，什么都能找到！`,
  `搜索功能太给力了，想找什么一搜就有，简直比我家的狗狗还聪明！`,
  `加载速度快得让我怀疑是不是开了加速器，每次浏览都流畅得不得了！`,
  `网站的响应速度简直让我感动，再也不用担心等待的焦虑了！`,
  `这网站的内容真是太丰富了，每次来都有新发现，简直是个宝藏库！`,
  `导航设计得太人性化了，不管我想去哪里都能轻松找到，再也不怕迷路了！`,
  `看了这网站的推荐内容，我都怀疑自己有预知未来的能力了，太精准了！`,
  `这网站的交互设计太有趣了，每次点击都有惊喜，简直让人欲罢不能！`,
  `网站的配色简直太舒服了，看久了眼睛也不会累，简直是我的护眼神器！`,
  `这网站的服务态度太好了，遇到问题总能及时解决，让我感觉备受重视！`,
  `网站的社区氛围真好，大家都互相帮助，就像一个温馨的大家庭！`,
  `每次在这里都能找到感兴趣的内容，感觉时间都过得特别快！`,
  `网站的更新速度真快，每次来都有新内容看，让我感觉生活都充实了！`,
  `用了这网站之后，我感觉自己的工作效率都提高了不少，真是太神奇了！`,
  `这网站的个性化推荐太准了，每次推荐的内容都是我喜欢的，感觉就像有个懂我的朋友在身边！`,
  `网站的安全性真高，完全不用担心隐私泄露的问题，让我用得特别放心！`,
  `这网站的兼容性真好，不管我用什么设备都能流畅访问，真是太方便了！`,
  `总的来说，这网站真是太棒了！不仅界面好看、功能齐全、用户体验好，还总是给我带来惊喜和乐趣！`,
      `有这个平台帮助监督验证 用起来非常放心了`,
  `平台体验好，充值方便，收入信息一目了然，提现快。值得推荐的一个好平台。`,
  `抄底翻盘好软件 要不然就没机会翻盘了`,
  `验过了，是实的，用着很流畅不卡顿`,
  `一共下载了五款软件，这个算是最好用的了，充值方便，体现快，特别棒！`,
  `不得不吐槽现在垃圾平台很多，能遇到这么好的平台j监测验证太难了，且用且珍惜~`,
  `很相信这个平台的口碑排名，用了这么久没出现过什么卡顿的，我评论的这个是我认为目前用了那么多最好用的平台之一。`,
  `看了验证记录，也下载了软件，用起来确实挺好的，是实盘，沟通起来无障碍，操作都很方便！`,
  `作为老油条，下载了不少工具，用下来能够留存在手机上的不多，这个算是留得住的，主要是客服的响应及时，服务的态度非常的好，而且App用起来都差不多的，能够突出的优势就是响应速度和客服服务了，这点做的很好。`,
  `这个软件用着不错  资金安全可靠，推荐朋友测试了都说还可以 一直在用 `,
  `安全可靠，用起来顺畅稳定，杠杆可控，而且客服的服务也是非常的及时的`,
  `犹豫挺长一段时间的，直遇到这家平台，操作简单，很有诚信，的确是一家挺好的平台。`,
  `值得放心使用的正规平台，而且还有很多活动，没想到还能这样在大A进行操作`,
  `现在这个行情，能用到这款软件，真的是很好的体验啊，懂得都懂我说什么！`,
  `个人感觉是个值得信赖的实盘，处理事情的方式很优秀`,
  `确定是实盘 都让客服给我发L2的交割单了`,
  `软件很顺畅，抓板很及时，客服态度也很NICE，推介给希望抄底的朋友！`,
  `用了将近半年了，APP一直都不用更新，比我以前用的那种一段时间就要更新的好用多了。`,
  `非常喜欢的，股票杠杆软件，简单易用充值方便，提现快，平台体验好，上手效果非常棒！`,
  `最近刚注意到这个平台，设计风格很清新，操作方式很方便，主要是客服也都很专业及时，尤其是在波动时候的温馨提示，会让我觉得有一丝感动，非常好的平台。`,
  `原来这才是工具的妙用，有确定性的判断了之后，用这个软件才能够让我的所得超出预期啊！太棒了`,
  `很多时候一个好工具带来的效率的提升和结果的呈现远远比不靠谱的所谓利好要来的实在的多，我很喜欢用这个工具，尽管有一些不好的地方，但是稳定可靠很及时。`,
  `做t 好工具   这行情就需要这样的工具`,
  `很使用的炒股app软件 ，看行情资讯，方便多了 `,
  `开户很快，费率低， 开户还送体验金  先体验再说`,
  `一款软件主要取决于投资者的需求和经验。新手可能更喜欢界面简洁、易于操作的软件，而经验丰富的交易者可能更倾向于选择提供强大分析工具的软件。`,
  `堪称炒股神器，抄底好工具`,
  `有这些平台帮助监测 监督 验证  非常感谢！`,
  `确实没有辜负我的选择，APP很好操盘，资金也安全，收费很合理`,
  `玩了两个星期了，基本没问题，就是偶尔网络有点慢。`,
  `服务周到，客服沟通愉快，果断选择了这个平台，资金安全。`,
  `有朋友玩过吗？可以提现不`,
  `晚上很晚添加了客服微信，一直咨询到半夜，客服很有耐心，早上还没有到上班时间，客服一直回答我的疑问，开盘前果断充值配资，这样敬业的精神，相信你们一定是专业的，资金有保障，收费也很合理的，已经推荐给我身边好几个朋友在使用了，他们都一致好评`,
  `平台体验好，收入信息一目了然，提现快。值得推荐的一个好平台。`,
];

const area = [
  "北京市-北京市",
  "上海市-上海市",
  "天津市-天津市",
  "重庆市-重庆市",
  "河北省-石家庄市",
  "河南省-郑州市",
  "辽宁省-沈阳市",
  "吉林省-长春市",
  "黑龙江省-哈尔滨市",
  "江苏省-南京市",
  "浙江省-杭州市",
  "安徽省-合肥市",
  "福建省-福州市",
  "江西省-南昌市",
  "山东省-济南市",
  "湖北省-武汉市",
  "湖南省-长沙市",
  "广东省-广州市",
  "四川省-成都市",
  "贵州省-贵阳市",
  "云南省-昆明市",
  "陕西省-西安市",
  "甘肃省-兰州市",
  "青海省-西宁市",
  "广西壮族自治区-南宁市",
  "内蒙古自治区-呼和浩特市",
  "宁夏回族自治区-银川市",
  "新疆维吾尔自治区-乌鲁木齐市",
  "海南省-海口市",
  "西藏自治区-拉萨市",
];

const getRandomCount = (m, n) => {
  return Math.ceil(Math.random() * (n - m + 1) + m - 1);
};

function generateRandomDate() {
  let start = new Date();
  start.setMonth(new Date().getMonth() - 3);
  const end = new Date();
  const randomDate = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  return randomDate.toISOString().split("T")[0];
}

// 获取指定范围内的随机数
function randomAccess(min, max) {
  return Math.floor(Math.random() * (min - max) + max);
}

// 解码
function decodeUnicode(str) {
  //Unicode显示方式是\u4e00
  str = "\\u" + str;
  str = str.replace(/\\/g, "%");
  //转换中文
  str = unescape(str);
  //将其他受影响的转换回原来
  str = str.replace(/%/g, "\\");
  return str;
}

let nameList = [
  "晨曦",
  "夜风",
  "火焰",
  "柳絮",
  "飞雪",
  "龙吟",
  "云烟",
  "海蓝",
  "墨雨",
  "紫月",
  "梦影",
  "琉璃",
  "星河",
  "琴声",
  "诗韵",
  "画魂",
  "酒歌",
  "花舞",
  "秋叶",
  "春晓",
  "夏荷",
  "冬梅",
  "金桂",
  "银狐",
  "铁石",
  "玉兔",
  "青丝",
  "白鸽",
  "翠鸟",
  "红鲤",
];

const getComment = () => {
  let data = [];
  let count = (new Date().getTime() % 10) + 20;

  for (let i = 0; i < count; i++) {
    data[i] = {
      comment: comments[getRandomCount(1, comments.length-1)],
      area: area[getRandomCount(1, area.length - 1)],
      date: generateRandomDate(),
      name: nameList[getRandomCount(1, nameList.length-1)],
    };
  }
  return data;
};
function generateRandomString(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

function randomAccess(min, max) {
  return Math.floor(Math.random() * (min - max) + max);
}
const getAvatar = () => {
  let id = generateRandomString(randomAccess(5, 10));
  return multiavatar(id);
};

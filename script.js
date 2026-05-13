const wordData = {
  apple: w("apple", "苹果", "🍎"), ant: w("ant", "蚂蚁", "🐜"), alligator: w("alligator", "鳄鱼", "🐊"), ax: w("ax", "斧头", "🪓"),
  bear: w("bear", "小熊", "🐻"), ball: w("ball", "球", "⚽"), banana: w("banana", "香蕉", "🍌"), bus: w("bus", "公交车", "🚌"),
  cat: w("cat", "小猫", "🐱"), cow: w("cow", "奶牛", "🐮"), car: w("car", "小汽车", "🚗"), cake: w("cake", "蛋糕", "🍰"),
  bird: w("bird", "小鸟", "🐦"), boy: w("boy", "男孩", "👦"),
  dog: w("dog", "小狗", "🐶"), duck: w("duck", "鸭子", "🦆"), doll: w("doll", "娃娃", "🧸"), door: w("door", "门", "🚪"),
  egg: w("egg", "鸡蛋", "🥚"), elephant: w("elephant", "大象", "🐘"), eye: w("eye", "眼睛", "👁️"), ear: w("ear", "耳朵", "👂"),
  fish: w("fish", "鱼", "🐟"), fox: w("fox", "狐狸", "🦊"), frog: w("frog", "青蛙", "🐸"), flower: w("flower", "花", "🌸"),
  goat: w("goat", "山羊", "🐐"), grapes: w("grapes", "葡萄", "🍇"), girl: w("girl", "女孩", "👧"), green: w("green", "绿色", "🟢"),
  hat: w("hat", "帽子", "🎩"), hop: w("hop", "跳", "🦘"), house: w("house", "房子", "🏠"), hand: w("hand", "手", "✋"),
  igloo: w("igloo", "冰屋", "🏠"), insect: w("insect", "昆虫", "🐞"), ink: w("ink", "墨水", "🖋️"), in: w("in", "在里面", "📥"),
  jam: w("jam", "果酱", "🍯"), juice: w("juice", "果汁", "🧃"), jump: w("jump", "跳", "🦘"), jacket: w("jacket", "夹克", "🧥"),
  kite: w("kite", "风筝", "🪁"), king: w("king", "国王", "👑"), key: w("key", "钥匙", "🔑"), kid: w("kid", "小孩", "🧒"),
  lion: w("lion", "狮子", "🦁"), leaf: w("leaf", "叶子", "🍃"), lamp: w("lamp", "台灯", "💡"), leg: w("leg", "腿", "🦵"),
  moon: w("moon", "月亮", "🌙"), mouse: w("mouse", "老鼠", "🐭"), milk: w("milk", "牛奶", "🥛"), mat: w("mat", "垫子", "🟫"),
  nest: w("nest", "鸟巢", "🪺"), nose: w("nose", "鼻子", "👃"), net: w("net", "网", "🥅"), nine: w("nine", "九", "9️⃣"),
  orange: w("orange", "橙子", "🍊"), octopus: w("octopus", "章鱼", "🐙"), ox: w("ox", "公牛", "🐂"), on: w("on", "在上面", "⬆️"),
  pig: w("pig", "小猪", "🐷"), pen: w("pen", "笔", "🖊️"), panda: w("panda", "熊猫", "🐼"), pop: w("pop", "砰", "🍿"),
  queen: w("queen", "女王", "👸"), quilt: w("quilt", "被子", "🛏️"), question: w("question", "问题", "❓"), quiet: w("quiet", "安静", "🤫"),
  red: w("red", "红色", "🔴"), rabbit: w("rabbit", "兔子", "🐰"), robot: w("robot", "机器人", "🤖"), run: w("run", "跑", "🏃"),
  sun: w("sun", "太阳", "☀️"), sock: w("sock", "袜子", "🧦"), star: w("star", "星星", "⭐"), snake: w("snake", "蛇", "🐍"),
  train: w("train", "火车", "🚂"), tiger: w("tiger", "老虎", "🐯"), top: w("top", "陀螺", "🌀"), toy: w("toy", "玩具", "🧸"),
  umbrella: w("umbrella", "雨伞", "☂️"), up: w("up", "向上", "⬆️"), uncle: w("uncle", "叔叔", "👨"), under: w("under", "在下面", "⬇️"),
  van: w("van", "货车", "🚐"), violin: w("violin", "小提琴", "🎻"), vest: w("vest", "背心", "🦺"), volcano: w("volcano", "火山", "🌋"),
  web: w("web", "网", "🕸️"), window: w("window", "窗户", "🪟"), water: w("water", "水", "💧"), whale: w("whale", "鲸鱼", "🐳"),
  box: w("box", "盒子", "📦"), fox2: w("fox", "狐狸", "🦊"), six: w("six", "六", "6️⃣"), xray: w("x-ray", "X 光", "🩻"),
  yellow: w("yellow", "黄色", "🟡"), yo: w("yo-yo", "悠悠球", "🪀"), yarn: w("yarn", "毛线", "🧶"), yes: w("yes", "是的", "✅"),
  zebra: w("zebra", "斑马", "🦓"), zoo: w("zoo", "动物园", "🦁"), zero: w("zero", "零", "0️⃣"), zipper: w("zipper", "拉链", "🤐"),
  blue: w("blue", "蓝色", "🔵"), pink: w("pink", "粉色", "🌸"), black: w("black", "黑色", "⚫"), white: w("white", "白色", "⚪"),
  hello: w("hello", "你好", "👋"), hi: w("hi", "嗨", "🙋"), good: w("good", "很好", "😊"), bye: w("bye", "再见", "👋"),
};

const extraWordData = {
  name: w("name", "名字", "🏷️"), today: w("today", "今天", "📅"), happy: w("happy", "开心", "😊"), great: w("great", "很棒", "⭐"),
  goodbye: w("goodbye", "再见", "👋"), family: w("family", "家人", "👨‍👩‍👧"), mom: w("mom", "妈妈", "👩"), dad: w("dad", "爸爸", "👨"),
  ready: w("ready", "准备好了", "✅"), school: w("school", "学校", "🏫"), bag: w("bag", "书包", "🎒"), book: w("book", "书", "📘"),
  class: w("class", "课堂", "🏫"), count: w("count", "数数", "🔢"), one: w("one", "一", "1️⃣"), two: w("two", "二", "2️⃣"), three: w("three", "三", "3️⃣"),
  play: w("play", "玩", "🎮"), fun: w("fun", "好玩", "🎈"), pet: w("pet", "宠物", "🐾"), cute: w("cute", "可爱", "💗"), woof: w("woof", "汪汪", "🐶"),
  snack: w("snack", "点心", "🍪"), want: w("want", "想要", "🙋"), please: w("please", "请", "🙏"), thank: w("thank", "谢谢", "🙏"), yummy: w("yummy", "好吃", "😋"),
  color: w("color", "颜色", "🎨"), something: w("something", "某个东西", "✨"), pretty: w("pretty", "漂亮", "🌸"), wearing: w("wearing", "正穿着", "👕"),
  wear: w("wear", "穿", "👕"), shoes: w("shoes", "鞋子", "👟"), touch: w("touch", "触摸", "✋"), show: w("show", "展示", "👀"),
  feel: w("feel", "感觉", "😊"), excited: w("excited", "兴奋", "🤩"), sleepy: w("sleepy", "困的", "😴"), weather: w("weather", "天气", "☀️"),
  sunny: w("sunny", "晴朗", "☀️"), rainy: w("rainy", "下雨", "🌧️"), windy: w("windy", "有风", "💨"), need: w("need", "需要", "🧩"),
  many: w("many", "许多", "🔢"), old: w("old", "年龄", "🎂"), five: w("five", "五", "5️⃣"), outside: w("outside", "外面", "🌳"),
  fast: w("fast", "快", "⚡"), story: w("story", "故事", "📖"), end: w("end", "结束", "🏁"), tomorrow: w("tomorrow", "明天", "📅"),
  night: w("night", "夜晚", "🌙"), sky: w("sky", "天空", "🌌"), bright: w("bright", "明亮", "✨"), dreams: w("dreams", "梦", "💤"),
  friend: w("friend", "朋友", "🤝"), teacher: w("teacher", "老师", "👩‍🏫"), chair: w("chair", "椅子", "🪑"), table: w("table", "桌子", "🪑"),
  crayon: w("crayon", "蜡笔", "🖍️"), pencil: w("pencil", "铅笔", "✏️"), ruler: w("ruler", "尺子", "📏"), eraser: w("eraser", "橡皮", "🧽"),
  brother: w("brother", "哥哥/弟弟", "👦"), sister: w("sister", "姐姐/妹妹", "👧"), grandma: w("grandma", "奶奶/外婆", "👵"), grandpa: w("grandpa", "爷爷/外公", "👴"),
  breakfast: w("breakfast", "早餐", "🍳"), lunch: w("lunch", "午餐", "🍱"), dinner: w("dinner", "晚餐", "🍽️"), water: w("water", "水", "💧"),
  shirt: w("shirt", "衬衫", "👕"), pants: w("pants", "裤子", "👖"), dress: w("dress", "连衣裙", "👗"), socks: w("socks", "袜子", "🧦"),
  head: w("head", "头", "🙂"), shoulders: w("shoulders", "肩膀", "💪"), knees: w("knees", "膝盖", "🦵"), toes: w("toes", "脚趾", "🦶"),
  garden: w("garden", "花园", "🌷"), tree: w("tree", "树", "🌳"), grass: w("grass", "草地", "🌱"), seed: w("seed", "种子", "🌱"),
  recycle: w("recycle", "回收", "♻️"), clean: w("clean", "干净", "🧼"), paper: w("paper", "纸", "📄"), bottle: w("bottle", "瓶子", "🧴"),
  small: w("small", "小的", "🔹"), big: w("big", "大的", "🔶"), long: w("long", "长的", "📏"), short: w("short", "短的", "↔️"),
  music: w("music", "音乐", "🎵"), drum: w("drum", "鼓", "🥁"), dance: w("dance", "跳舞", "💃"), clap: w("clap", "拍手", "👏"),
};

function w(word, zh, emoji) {
  return { word, zh, emoji };
}

function makeLesson(code, title, zh, listen, phonics, pattern, sentence, words) {
  if (!Array.isArray(words) && Array.isArray(sentence)) {
    words = sentence;
    sentence = pattern;
    pattern = phonics;
    phonics = listen;
  }
  words = Array.isArray(words) ? words : [];
  return {
    id: title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
    code,
    title,
    zh,
    listen,
    phonics,
    pattern,
    sentence,
    words: words.map((word) => wordData[word] || w(word, word, "✨")),
  };
}

const curriculum = [
  {
    phase: "Power Up Starter · Classroom Mission",
    zh: "课堂入门任务",
    icon: "🚀",
    goal: "像 Power Up 一样从真实课堂出发，练问候、指令、文具和颜色。",
    lessons: [
      makeLesson("PU-S1", "Hello Mission", "你好任务", "Listen and say hello.", "hello, hi, goodbye", "Hello, I am Bobo.", "Hello! What is your name?", ["hello", "hi", "goodbye", "name"]),
      makeLesson("PU-S2", "Classroom Words", "课堂物品", "Point and say classroom words.", "book, bag, pencil, ruler", "This is my book.", "I have a book in my bag.", ["book", "bag", "pencil", "ruler"]),
      makeLesson("PU-S3", "Color Power", "颜色能量", "Listen for colors.", "red, blue, yellow, green", "It is red.", "I see red and blue.", ["red", "blue", "yellow", "green"]),
      makeLesson("PU-S4", "Ready for Class", "准备上课", "Say: I am ready.", "ready, teacher, class, friend", "I am ready.", "I am ready for class.", ["ready", "teacher", "class", "friend"]),
      makeLesson("PU-S5", "Show Me", "展示给我看", "Listen and show.", "show, touch, book, hand", "Show me your book.", "I can show my book.", ["show", "touch", "book", "hand"]),
      makeLesson("PU-S6", "Class Review", "课堂复习", "Review classroom English.", "hello, colors, classroom words", "I can learn English.", "Hello! I am ready to learn.", ["hello", "ready", "book", "star"]),
    ],
  },
  {
    phase: "Power Up 1 · My World",
    zh: "我的世界",
    icon: "🌍",
    goal: "围绕自我、家人、朋友和学校，建立孩子最常用的表达。",
    lessons: [
      makeLesson("PU1-U1", "My Name", "我的名字", "Ask and answer your name.", "My name is ...", "My name is Bobo.", "My name is Bobo friend.", ["name", "boy", "girl", "kid"]),
      makeLesson("PU1-U2", "My Family", "我的家人", "Name family people.", "mom, dad, sister, brother", "This is my mom.", "I love my family.", ["mom", "dad", "sister", "brother"]),
      makeLesson("PU1-U3", "My Friends", "我的朋友", "Talk about friends.", "friend, happy, play, fun", "This is my friend.", "I play with my friend.", ["friend", "happy", "play", "fun"]),
      makeLesson("PU1-U4", "At School", "在学校", "Name school places and things.", "school, class, teacher, chair", "I am at school.", "My teacher is in the class.", ["school", "class", "teacher", "chair"]),
      makeLesson("PU1-U5", "Numbers One to Six", "数字一到六", "Count with Bobo.", "one, two, three, five", "I can count.", "One, two, three, four, five, six.", ["one", "two", "three", "six"]),
      makeLesson("PU1-U6", "My World Review", "我的世界复习", "Review names, family and school.", "name, family, school, numbers", "I can talk about me.", "Hello! This is my family and my school.", ["hello", "family", "school", "friend"]),
    ],
  },
  {
    phase: "Power Up 2 · Animals and Food",
    zh: "动物与食物",
    icon: "🐾",
    goal: "用主题单元学习动物、宠物、食物和礼貌点餐。",
    lessons: [
      makeLesson("PU2-U1", "Pet Show", "宠物秀", "Name pets and animals.", "cat, dog, rabbit, panda", "I like the cat.", "My pet is cute.", ["cat", "dog", "rabbit", "panda"]),
      makeLesson("PU2-U2", "Wild Animals", "野生动物", "Listen for animal names.", "lion, tiger, fox, bear", "The tiger can run.", "I see a lion and a tiger.", ["lion", "tiger", "fox", "bear"]),
      makeLesson("PU2-U3", "Animal Actions", "动物动作", "Say what animals can do.", "run, jump, hop, swim", "I can jump.", "A rabbit can hop.", ["run", "jump", "hop", "rabbit"]),
      makeLesson("PU2-U4", "Snack Time", "点心时间", "Say what you want.", "apple, banana, cake, milk", "I want an apple.", "Cake, please. Thank you.", ["apple", "banana", "cake", "milk"]),
      makeLesson("PU2-U5", "Yummy Lunch", "美味午餐", "Talk about meals.", "breakfast, lunch, dinner, water", "I like lunch.", "I have water with lunch.", ["breakfast", "lunch", "dinner", "water"]),
      makeLesson("PU2-U6", "Animal Picnic", "动物野餐", "Review animals and food.", "I like ... I want ...", "I like the bear.", "The bear wants cake at the picnic.", ["bear", "cake", "apple", "milk"]),
    ],
  },
  {
    phase: "Power Up 3 · Body and Clothes",
    zh: "身体与衣服",
    icon: "👕",
    goal: "通过动作歌、穿搭和颜色描述，练身体部位与简单形容词。",
    lessons: [
      makeLesson("PU3-U1", "My Body", "我的身体", "Touch and say body words.", "head, shoulders, knees, toes", "This is my head.", "I touch my nose and my hand.", ["head", "hand", "nose", "leg"]),
      makeLesson("PU3-U2", "Move Your Body", "动一动", "Listen and move.", "jump, run, clap, dance", "I can dance.", "I can jump, run and clap.", ["jump", "run", "clap", "dance"]),
      makeLesson("PU3-U3", "Clothes Day", "衣服日", "Name clothes.", "shirt, pants, dress, shoes", "I wear a shirt.", "My shoes are blue.", ["shirt", "pants", "dress", "shoes"]),
      makeLesson("PU3-U4", "Weather Clothes", "天气穿搭", "Choose clothes for weather.", "sunny, rainy, windy, hat", "It is sunny.", "I wear a hat on a sunny day.", ["sunny", "rainy", "windy", "hat"]),
      makeLesson("PU3-U5", "Big or Small", "大或小", "Describe things.", "big, small, long, short", "It is big.", "The snake is long.", ["big", "small", "long", "snake"]),
      makeLesson("PU3-U6", "Body Review Song", "身体复习歌", "Review body and clothes.", "body, clothes, actions", "I can move my body.", "I clap, dance and wear my shoes.", ["clap", "dance", "shoes", "happy"]),
    ],
  },
  {
    phase: "Power Up 4 · Home and Nature",
    zh: "家与自然",
    icon: "🏡",
    goal: "加入 CLIL 小知识：家、花园、天气、环保和方位。",
    lessons: [
      makeLesson("PU4-U1", "My Home", "我的家", "Name things at home.", "house, door, window, table", "This is my house.", "The key is on the table.", ["house", "door", "window", "table"]),
      makeLesson("PU4-U2", "Where Is It", "它在哪里", "Practice in, on and under.", "in, on, under, box", "It is in the box.", "The toy is under the table.", ["in", "on", "under", "box"]),
      makeLesson("PU4-U3", "In the Garden", "在花园里", "Learn nature words.", "garden, tree, flower, grass", "I see a tree.", "A flower is in the garden.", ["garden", "tree", "flower", "grass"]),
      makeLesson("PU4-U4", "Little Seed", "小种子", "CLIL: plants grow.", "seed, water, sun, leaf", "A seed needs water.", "The seed grows in the sun.", ["seed", "water", "sun", "leaf"]),
      makeLesson("PU4-U5", "Clean Planet", "清洁地球", "CLIL: keep places clean.", "clean, recycle, paper, bottle", "Recycle the paper.", "I can keep my classroom clean.", ["clean", "recycle", "paper", "bottle"]),
      makeLesson("PU4-U6", "Nature Review", "自然复习", "Review home and nature.", "home, garden, recycle", "I can help at home.", "I water the flower and recycle the paper.", ["house", "flower", "water", "recycle"]),
    ],
  },
  {
    phase: "Power Up 5 · Stories and Projects",
    zh: "故事与项目",
    icon: "📚",
    goal: "用项目式输出收束：故事复述、儿歌、角色对话和小展示。",
    lessons: [
      makeLesson("PU5-U1", "Music Project", "音乐项目", "Make a music show.", "music, drum, clap, dance", "I like music.", "I clap and dance with Bobo.", ["music", "drum", "clap", "dance"]),
      makeLesson("PU5-U2", "Story Time", "故事时间", "Read a mini story.", "story, cat, house, happy", "The cat is happy.", "The cat runs to the house.", ["story", "cat", "house", "happy"]),
      makeLesson("PU5-U3", "Role Play Cafe", "咖啡店角色扮演", "Order politely.", "please, thank you, want, yummy", "I want cake, please.", "Thank you. It is yummy.", ["please", "thank", "want", "yummy"]),
      makeLesson("PU5-U4", "Show and Tell", "展示与表达", "Talk about your favorite thing.", "favorite, like, have, show", "I like my toy.", "I have a toy and I can show it.", ["toy", "like", "have", "show"]),
      makeLesson("PU5-U5", "Picture Story", "看图讲故事", "Put sentences in order.", "first, then, end", "Bobo sees a fox.", "The fox is in the box. The end.", ["fox", "box", "story", "end"]),
      makeLesson("PU5-U6", "Power Up Review Party", "复习派对", "Review and present.", "review, speak, sing, star", "I can speak English.", "Hello! I can learn, sing and speak English.", ["hello", "music", "star", "good"]),
    ],
  },
];
const steps = ["listen", "words", "sentence", "quiz", "story"];
const pages = [...document.querySelectorAll(".page")];
const accountListKey = "boboEnglishAccountsV3";
const activeAccountKey = "boboEnglishActiveAccountV3";
const flatLessons = curriculum.flatMap((phase, phaseIndex) =>
  phase.lessons.map((item, lessonIndex) => ({ ...item, phase: phase.phase, phaseZh: phase.zh, phaseIcon: phase.icon, phaseIndex, lessonIndex }))
);

let selectedAvatar = "🐻";
let account = null;
let progress = null;
let selectedLesson = flatLessons[0];
let selectedPhaseIndex = 0;
let selectedStep = "listen";
let lessonStarted = false;
let lessonMessage = "";
let recording = false;
let selectedScenario = 0;
let selectedPrompt = 0;
let speakingRecording = false;
let availableVoices = [];
let voiceReady = false;
const voicePreferenceKey = "boboEnglishVoiceGender";

const speakingScenarios = [
  {
    icon: "👋",
    title: "Hello Bobo",
    goal: "练习问候和自我介绍。",
    prompts: [
      { bobo: "Hello! What is your name?", zh: "你好！你叫什么名字？", answers: ["My name is {name}.", "I am {name}.", "Hello, Bobo!"] },
      { bobo: "How are you today?", zh: "你今天好吗？", answers: ["I am good.", "I am happy.", "I am great!"] },
      { bobo: "Say goodbye to Bobo.", zh: "和 Bobo 说再见。", answers: ["Goodbye, Bobo!", "Bye-bye!", "See you!"] },
    ],
  },
  {
    icon: "🏠",
    title: "My Family",
    goal: "练习介绍家人。",
    prompts: [
      { bobo: "Who is in your family?", zh: "你家里有谁？", answers: ["Mom, dad, and me.", "I have a mom and dad.", "My family is happy."] },
      { bobo: "Say: this is my mom.", zh: "说：这是我的妈妈。", answers: ["This is my mom.", "This is my dad.", "This is my family."] },
      { bobo: "Do you love your family?", zh: "你爱你的家人吗？", answers: ["Yes, I do.", "I love my family.", "My family is great."] },
    ],
  },
  {
    icon: "🎒",
    title: "School Day",
    goal: "练习学校和课堂用语。",
    prompts: [
      { bobo: "What is in your bag?", zh: "你的书包里有什么？", answers: ["A book is in my bag.", "I have a pen.", "I have a book."] },
      { bobo: "Say: I am ready.", zh: "说：我准备好了。", answers: ["I am ready.", "Ready for class!", "Let's learn English."] },
      { bobo: "Can you count to three?", zh: "你会数到三吗？", answers: ["One, two, three.", "I can count.", "One, two, three!"] },
    ],
  },
  {
    icon: "🧸",
    title: "Toy Play",
    goal: "练习玩具和喜欢。",
    prompts: [
      { bobo: "What toy do you like?", zh: "你喜欢什么玩具？", answers: ["I like the ball.", "I like the train.", "I like the doll."] },
      { bobo: "Where is the toy?", zh: "玩具在哪里？", answers: ["It is in the box.", "It is on the mat.", "I see the toy."] },
      { bobo: "Say: my toy is fun.", zh: "说：我的玩具很好玩。", answers: ["My toy is fun.", "The ball is fun.", "I play with toys."] },
    ],
  },
  {
    icon: "🐻",
    title: "Animal Talk",
    goal: "练习表达喜欢的动物。",
    prompts: [
      { bobo: "What animal do you like?", zh: "你喜欢什么动物？", answers: ["I like the cat.", "I like the bear.", "I like the fox."] },
      { bobo: "Can a rabbit hop?", zh: "兔子会跳吗？", answers: ["Yes, it can.", "A rabbit can hop.", "Hop, hop!"] },
      { bobo: "Where is the fox?", zh: "狐狸在哪里？", answers: ["The fox is in the box.", "It is in the box.", "I see the fox."] },
    ],
  },
  {
    icon: "🐶",
    title: "Pet Care",
    goal: "练习宠物照顾表达。",
    prompts: [
      { bobo: "Do you have a pet?", zh: "你有宠物吗？", answers: ["I have a dog.", "I have a cat.", "No, I don't."] },
      { bobo: "What does the dog say?", zh: "小狗怎么叫？", answers: ["Woof, woof!", "The dog says woof.", "A dog can run."] },
      { bobo: "Say: I love my pet.", zh: "说：我爱我的宠物。", answers: ["I love my pet.", "My pet is cute.", "I like my dog."] },
    ],
  },
  {
    icon: "🍎",
    title: "Snack Time",
    goal: "练习点餐和表达想要。",
    prompts: [
      { bobo: "What do you want?", zh: "你想要什么？", answers: ["I want an apple.", "I want cake.", "I want milk."] },
      { bobo: "Do you like bananas?", zh: "你喜欢香蕉吗？", answers: ["Yes, I do.", "I like bananas.", "No, thank you."] },
      { bobo: "Say: yummy cake!", zh: "说：美味的蛋糕！", answers: ["Yummy cake!", "I like cake.", "Cake, please."] },
    ],
  },
  {
    icon: "🍽️",
    title: "Restaurant",
    goal: "练习礼貌点餐。",
    prompts: [
      { bobo: "What would you like?", zh: "你想要什么？", answers: ["I would like milk.", "Apple, please.", "Cake, please."] },
      { bobo: "Say thank you.", zh: "说谢谢。", answers: ["Thank you!", "Thank you, Bobo.", "Thanks!"] },
      { bobo: "Is it yummy?", zh: "好吃吗？", answers: ["Yes, it is yummy.", "It is good.", "Yummy, yummy!"] },
    ],
  },
  {
    icon: "🎨",
    title: "Color Magic",
    goal: "练习颜色问答。",
    prompts: [
      { bobo: "What color is it?", zh: "它是什么颜色？", answers: ["It is red.", "It is blue.", "It is yellow."] },
      { bobo: "Find something green.", zh: "找一个绿色的东西。", answers: ["It is green.", "I see green.", "Green leaf!"] },
      { bobo: "Do you like pink?", zh: "你喜欢粉色吗？", answers: ["Yes, I like pink.", "Pink is pretty.", "I like blue."] },
    ],
  },
  {
    icon: "👕",
    title: "Clothes",
    goal: "练习衣服和颜色搭配。",
    prompts: [
      { bobo: "What are you wearing?", zh: "你穿了什么？", answers: ["I have a jacket.", "I wear a hat.", "I wear shoes."] },
      { bobo: "What color is your hat?", zh: "你的帽子是什么颜色？", answers: ["It is red.", "It is blue.", "It is yellow."] },
      { bobo: "Say: I like my shoes.", zh: "说：我喜欢我的鞋子。", answers: ["I like my shoes.", "My shoes are nice.", "My hat is cute."] },
    ],
  },
  {
    icon: "✋",
    title: "My Body",
    goal: "练习身体部位。",
    prompts: [
      { bobo: "Touch your nose.", zh: "摸摸你的鼻子。", answers: ["This is my nose.", "I touch my nose.", "Nose!"] },
      { bobo: "Show me your hand.", zh: "给我看看你的手。", answers: ["This is my hand.", "Here is my hand.", "I have two hands."] },
      { bobo: "Can you jump?", zh: "你会跳吗？", answers: ["Yes, I can jump.", "I can hop.", "Jump, jump!"] },
    ],
  },
  {
    icon: "😊",
    title: "Feelings",
    goal: "练习表达情绪。",
    prompts: [
      { bobo: "How do you feel?", zh: "你感觉怎么样？", answers: ["I am happy.", "I am good.", "I am excited."] },
      { bobo: "Are you sleepy?", zh: "你困了吗？", answers: ["No, I am not.", "I am not sleepy.", "I am ready."] },
      { bobo: "Say: I feel great.", zh: "说：我感觉很棒。", answers: ["I feel great.", "I feel happy.", "I am great!"] },
    ],
  },
  {
    icon: "☀️",
    title: "Weather",
    goal: "练习天气表达。",
    prompts: [
      { bobo: "How is the weather?", zh: "天气怎么样？", answers: ["It is sunny.", "It is rainy.", "It is windy."] },
      { bobo: "Do you like sunny days?", zh: "你喜欢晴天吗？", answers: ["Yes, I do.", "I like sunny days.", "Sunny days are fun."] },
      { bobo: "What do you need when it rains?", zh: "下雨时你需要什么？", answers: ["I need an umbrella.", "Umbrella, please.", "I have an umbrella."] },
    ],
  },
  {
    icon: "📦",
    title: "Where Is It",
    goal: "练习 in / on / under。",
    prompts: [
      { bobo: "Where is the toy?", zh: "玩具在哪里？", answers: ["It is in the box.", "It is on the box.", "It is under the box."] },
      { bobo: "Put the ball on the mat.", zh: "把球放在垫子上。", answers: ["The ball is on the mat.", "It is on the mat.", "On the mat."] },
      { bobo: "Is the cat in the box?", zh: "小猫在盒子里吗？", answers: ["Yes, it is.", "The cat is in the box.", "No, it is not."] },
    ],
  },
  {
    icon: "🔢",
    title: "Numbers",
    goal: "练习数字和数量。",
    prompts: [
      { bobo: "How many apples?", zh: "有几个苹果？", answers: ["One apple.", "Two apples.", "Three apples."] },
      { bobo: "Count with me.", zh: "和我一起数。", answers: ["One, two, three.", "Four, five, six.", "I can count."] },
      { bobo: "How old are you?", zh: "你几岁？", answers: ["I am five.", "I am six.", "I am a kid."] },
    ],
  },
  {
    icon: "🚗",
    title: "Go Outside",
    goal: "练习交通和出门。",
    prompts: [
      { bobo: "What do you see outside?", zh: "你在外面看见什么？", answers: ["I see a car.", "I see a bus.", "I see a tree."] },
      { bobo: "Do you like the train?", zh: "你喜欢火车吗？", answers: ["Yes, I like trains.", "The train is fast.", "Choo-choo!"] },
      { bobo: "Say: let's go!", zh: "说：我们出发吧！", answers: ["Let's go!", "Go, go, go!", "I am ready to go."] },
    ],
  },
  {
    icon: "📖",
    title: "Story Retell",
    goal: "练习复述短故事。",
    prompts: [
      { bobo: "Who is in the story?", zh: "故事里有谁？", answers: ["The cat is in the story.", "Bobo is in the story.", "A bear is in the story."] },
      { bobo: "What can the cat do?", zh: "小猫会做什么？", answers: ["The cat can hop.", "The cat can run.", "The cat can play."] },
      { bobo: "How does the story end?", zh: "故事怎么结束？", answers: ["The cat is happy.", "Bobo says great job.", "They go home."] },
    ],
  },
  {
    icon: "🌙",
    title: "Bedtime",
    goal: "练习睡前表达。",
    prompts: [
      { bobo: "Are you ready for bed?", zh: "你准备睡觉了吗？", answers: ["Yes, I am ready.", "I am sleepy.", "Good night."] },
      { bobo: "Say good night to Bobo.", zh: "和 Bobo 说晚安。", answers: ["Good night, Bobo.", "Sweet dreams!", "See you tomorrow."] },
      { bobo: "What do you see in the sky?", zh: "你在天空中看见什么？", answers: ["I see the moon.", "I see stars.", "The moon is bright."] },
    ],
  },
];

function defaultProgress(profile) {
  return {
    name: profile.name,
    avatar: profile.avatar,
    completed: [],
    currentLesson: flatLessons[0].id,
    stars: 0,
    coins: 0,
    streak: 1,
    minutes: 0,
    speaking: 0,
    joinedAt: new Date().toISOString(),
  };
}

function getAccounts() {
  return JSON.parse(localStorage.getItem(accountListKey) || "{}");
}

function saveAccounts(accounts) {
  localStorage.setItem(accountListKey, JSON.stringify(accounts));
}

function saveProgress() {
  const accounts = getAccounts();
  accounts[account] = progress;
  saveAccounts(accounts);
  localStorage.setItem(activeAccountKey, account);
}

function loadAccount(name) {
  const accounts = getAccounts();
  account = name;
  progress = accounts[name] || defaultProgress({ name, avatar: selectedAvatar });
  progress.name = name;
  progress.avatar = progress.avatar || selectedAvatar;
  const validLessonIds = new Set(flatLessons.map((item) => item.id));
  progress.completed = Array.isArray(progress.completed) ? progress.completed.filter((id) => validLessonIds.has(id)) : [];
  if (!validLessonIds.has(progress.currentLesson)) progress.currentLesson = flatLessons[0].id;
  progress.currentLesson = progress.currentLesson || flatLessons[0].id;
  progress.stars = Number(progress.stars || 0);
  progress.coins = Number(progress.coins || 0);
  progress.streak = Number(progress.streak || 1);
  progress.speaking = progress.speaking || 0;
  progress.minutes = progress.minutes || 0;
  selectedAvatar = progress.avatar;
  selectedLesson = flatLessons.find((item) => item.id === progress.currentLesson) || flatLessons[0];
  selectedPhaseIndex = selectedLesson.phaseIndex || 0;
  selectedStep = "listen";
  lessonStarted = false;
  saveProgress();
  document.querySelector("#login").classList.add("hidden");
  document.querySelector("#appShell").classList.remove("hidden");
  renderAll();
  if (location.search) history.replaceState(null, "", location.hash || "#home");
  showRoute(normalRoute(location.hash.slice(1)));
}

window.loadAccount = loadAccount;

function initLogin() {
  window.__boboMainReady = true;
  const urlName = new URLSearchParams(location.search).get("nickname");
  if (urlName && urlName.trim()) {
    loadAccount(urlName.trim());
    return;
  }

  document.querySelectorAll(".avatar-choice button").forEach((button) => {
    button.addEventListener("click", () => {
      selectedAvatar = button.dataset.avatar;
      document.querySelectorAll(".avatar-choice button").forEach((item) => item.classList.toggle("active", item === button));
    });
  });

  document.querySelector("#loginForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.querySelector("#nicknameInput").value.trim();
    if (!name) return;
    const accounts = getAccounts();
    if (!accounts[name]) accounts[name] = defaultProgress({ name, avatar: selectedAvatar });
    accounts[name].avatar = accounts[name].avatar || selectedAvatar;
    saveAccounts(accounts);
    loadAccount(name);
  });

  document.querySelector("#logoutBtn").addEventListener("click", () => {
    localStorage.removeItem(activeAccountKey);
    account = null;
    progress = null;
    document.querySelector("#appShell").classList.add("hidden");
    document.querySelector("#login").classList.remove("hidden");
    history.replaceState(null, "", "#login");
  });

  const active = localStorage.getItem(activeAccountKey);
  if (active && getAccounts()[active]) {
    loadAccount(active);
  } else {
    document.querySelector("#login").classList.remove("hidden");
    document.querySelector("#appShell").classList.add("hidden");
  }
}

function completedCount() {
  return progress.completed.length;
}

function currentLessonIndex() {
  return flatLessons.findIndex((item) => item.id === progress.currentLesson);
}

function isUnlocked(index) {
  return index <= completedCount();
}

function showRoute(route) {
  route = normalRoute(route);
  if (!progress && route !== "login") return;
  pages.forEach((page) => page.classList.toggle("active-page", page.id === route));
  document.querySelectorAll(".nav-link").forEach((link) => link.classList.toggle("active", link.dataset.route === route));
  if (location.hash.slice(1) !== route) history.replaceState(null, "", `#${route}`);
  window.scrollTo(0, 0);
}

function normalRoute(route) {
  return pages.some((page) => page.id === route) ? route : "home";
}

document.querySelectorAll("[data-route]").forEach((control) => {
  control.addEventListener("click", (event) => {
    const route = control.dataset.route;
    if (!route) return;
    event.preventDefault();
    if (route === "lesson" && !lessonStarted) {
      selectedLesson = flatLessons.find((item) => item.id === progress.currentLesson) || selectedLesson;
    }
    renderAll();
    showRoute(route);
  });
});

window.addEventListener("hashchange", () => showRoute(location.hash.slice(1) || "home"));

let fixedAudio = null;
let ttsAudio = null;
let ttsQueue = [];
let ttsQueueIndex = 0;
let speechRequestId = 0;

function normalizeSpeechText(text) {
  const rawName = progress?.name || "";
  const spokenName = rawName.replace(/[^a-zA-Z]/g, "").trim() || "Bobo";
  const namePattern = rawName ? new RegExp(escapeRegExp(rawName), "g") : null;
  const phrase = String(text || "")
    .replace(/\{name\}/g, progress?.name || "Bobo")
    .replace(namePattern || /$a/, spokenName)
    .replace(/\/a\//gi, "short a")
    .replace(/\/e\//gi, "short e")
    .replace(/\/i\//gi, "short i")
    .replace(/\/o\//gi, "short o")
    .replace(/\/u\//gi, "short u")
    .replace(/\/b\//gi, "b")
    .replace(/\/h\//gi, "h")
    .replace(/\/l\//gi, "l")
    .replace(/\/m\//gi, "m")
    .replace(/\/p\//gi, "p")
    .replace(/\/kw\//gi, "q w")
    .replace(/\/t\//gi, "t")
    .replace(/\/z\//gi, "z")
    .replace(/[^\x00-\x7F]/g, " ")
    .replace(/[^a-zA-Z0-9.,!?'" -]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return phrase || "Hello";
}

function escapeRegExp(text) {
  return String(text).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function audioKey(text) {
  const clean = normalizeSpeechText(text).toLowerCase();
  let hash = 2166136261;
  for (let index = 0; index < clean.length; index += 1) {
    hash ^= clean.charCodeAt(index);
    hash = Math.imul(hash, 16777619) >>> 0;
  }
  const slug = clean.replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 42) || "speech";
  return `${slug}-${hash.toString(36)}`;
}

function speechChunks(text) {
  const clean = normalizeSpeechText(text);
  const chunks = clean
    .split(/(?<=[.!?])\s+|;\s+/)
    .map((item) => item.trim())
    .filter(Boolean);
  return chunks.length ? chunks : [clean];
}

function stopTTS() {
  if (fixedAudio) {
    fixedAudio.oncanplaythrough = null;
    fixedAudio.onerror = null;
    fixedAudio.onended = null;
    fixedAudio.pause();
    fixedAudio.src = "";
    fixedAudio = null;
  }
  if (ttsAudio) {
    ttsAudio.oncanplaythrough = null;
    ttsAudio.onerror = null;
    ttsAudio.onended = null;
    ttsAudio.pause();
    ttsAudio.src = "";
    ttsAudio = null;
  }
}

function playFixedAudio(text, requestId) {
  const spokenText = normalizeSpeechText(text);
  fixedAudio = new Audio(`audio/${audioKey(spokenText)}.m4a`);
  fixedAudio.preload = "auto";
  fixedAudio.playsInline = true;
  fixedAudio.setAttribute("webkit-playsinline", "true");

  const fallback = () => {
    if (requestId !== speechRequestId) return;
    playSystemSpeech(spokenText, requestId);
  };

  fixedAudio.oncanplaythrough = () => {
    if (requestId !== speechRequestId) return;
    const playPromise = fixedAudio.play();
    if (playPromise) playPromise.catch(fallback);
  };
  fixedAudio.onerror = fallback;
  fixedAudio.load();
  const playPromise = fixedAudio.play();
  if (playPromise) playPromise.catch(() => {
    if (requestId === speechRequestId && fixedAudio?.readyState < 2) return;
    fallback();
  });
}

function playTTS(text, requestId = ++speechRequestId) {
  stopTTS();

  ttsQueue = speechChunks(text);
  ttsQueueIndex = 0;
  playNextTTSChunk(requestId);
}

function playNextTTSChunk(requestId) {
  if (requestId !== speechRequestId) return;
  const phrase = ttsQueue[ttsQueueIndex];
  if (!phrase) return;

  const sources = [
    `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(phrase)}&type=2`,
    `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(phrase)}&type=1`,
  ];

  ttsAudio = document.createElement("audio");
  ttsAudio.preload = "auto";
  ttsAudio.playsInline = true;
  ttsAudio.setAttribute("webkit-playsinline", "true");

  let sourceIndex = 0;
  function tryNextSource() {
    if (requestId !== speechRequestId) return;
    if (sourceIndex >= sources.length) {
      notifyVoiceIssue("音频加载失败，请检查网络后重试。");
      return;
    }
    ttsAudio.src = sources[sourceIndex++];
    ttsAudio.load();
    const playPromise = ttsAudio.play();
    if (playPromise) {
      playPromise.catch(() => tryNextSource());
    }
  }

  ttsAudio.oncanplaythrough = () => {
    if (requestId !== speechRequestId) return;
    const playPromise = ttsAudio.play();
    if (playPromise) {
      playPromise.catch(() => tryNextSource());
    }
  };

  ttsAudio.onerror = () => tryNextSource();
  ttsAudio.onended = () => {
    if (requestId !== speechRequestId) return;
    ttsQueueIndex += 1;
    playNextTTSChunk(requestId);
  };

  tryNextSource();
}

function playSystemSpeech(spokenText, requestId) {
  if (requestId !== speechRequestId) return;
  if (!("speechSynthesis" in window)) {
    playTTS(spokenText, requestId);
    return;
  }

  speechSynthesis.cancel();
  speechSynthesis.resume();
  const utterance = new SpeechSynthesisUtterance(spokenText);
  utterance.lang = "en-US";

  // 安卓上 getVoices() 可能返回空，但浏览器仍能用默认语音朗读
  refreshVoices();
  const voice = pickVoice();
  if (voice) utterance.voice = voice;

  utterance.rate = voiceGender() === "female" ? 0.78 : 0.84;
  utterance.pitch = voiceGender() === "female" ? 1.18 : 1.0;

  let fallbackTriggered = false;
  utterance.onerror = (event) => {
    if (requestId !== speechRequestId || event.error === "interrupted" || event.error === "canceled") return;
    if (!fallbackTriggered) {
      fallbackTriggered = true;
      playTTS(spokenText, requestId);
    }
  };

  utterance.onstart = () => {
    if (requestId !== speechRequestId) {
      speechSynthesis.cancel();
      return;
    }
    fallbackTriggered = false;
  };

  speechSynthesis.speak(utterance);
}

function speak(text) {
  const requestId = ++speechRequestId;
  const spokenText = normalizeSpeechText(text);
  stopTTS();
  if (!spokenText) return;
  playFixedAudio(spokenText, requestId);
}

function unlockVoiceEngine() {
  if (voiceReady) return;
  voiceReady = true;
  if ("speechSynthesis" in window) {
    refreshVoices();
    const hasVoice = availableVoices.some((v) => /^en[-_]/i.test(v.lang));
    if (hasVoice) {
      const utterance = new SpeechSynthesisUtterance("Hi");
      utterance.lang = "en-US";
      utterance.volume = 0.01;
      const voice = pickVoice();
      if (voice) utterance.voice = voice;
      speechSynthesis.speak(utterance);
    }
  }
}

function notifyVoiceIssue(message) {
  const speakingFeedback = document.querySelector("#speakingFeedback");
  const lessonFeedback = document.querySelector("#lessonFeedback");
  if (speakingFeedback) speakingFeedback.textContent = message;
  if (lessonFeedback) lessonFeedback.textContent = message;
}

function voiceGender() {
  return localStorage.getItem(voicePreferenceKey) || "female";
}

function refreshVoices() {
  if (!("speechSynthesis" in window)) return;
  availableVoices = speechSynthesis.getVoices();
}

function pickVoice() {
  refreshVoices();
  const englishVoices = availableVoices.filter((voice) => /^en[-_]/i.test(voice.lang));
  const usVoices = englishVoices.filter((voice) => /en[-_]US/i.test(voice.lang));
  const badHints = ["whisper", "novelty", "bells", "boing", "bubbles", "cellos", "deranged", "hysterical", "pipe", "trinoids", "zarvox", "bad news", "good news", "bahh", "organ"];
  const cleanPool = (usVoices.length ? usVoices : englishVoices).filter((voice) => {
    const name = voice.name.toLowerCase();
    return !badHints.some((hint) => name.includes(hint));
  });
  const pool = cleanPool.length ? cleanPool : (usVoices.length ? usVoices : englishVoices);
  const gender = voiceGender();
  const femaleHints = ["samantha", "victoria", "karen", "moira", "tessa", "zira", "susan", "ava", "allison", "female", "woman", "girl"];
  const maleHints = ["aaron", "daniel", "oliver", "arthur", "lee", "david", "mark", "george", "thomas", "alex"];
  const hints = gender === "female" ? femaleHints : maleHints;
  const hinted = pool.find((voice) => hints.some((hint) => voice.name.toLowerCase().includes(hint)));
  if (hinted) return hinted;
  if (gender === "male") {
    const nonFemale = pool.find((voice) => !femaleHints.some((hint) => voice.name.toLowerCase().includes(hint)));
    if (nonFemale) return nonFemale;
  }
  return pool[0] || null;
}

function renderVoiceToggle() {
  document.querySelectorAll("[data-voice-gender]").forEach((button) => {
    button.classList.toggle("active", button.dataset.voiceGender === voiceGender());
  });
}

document.querySelectorAll("[data-voice-gender]").forEach((button) => {
  button.addEventListener("click", () => {
    unlockVoiceEngine();
    localStorage.setItem(voicePreferenceKey, button.dataset.voiceGender);
    renderVoiceToggle();
    speak(button.dataset.voiceGender === "female" ? "Hello, I am Bobo." : "Hello, let's learn English.");
  });
});

if ("speechSynthesis" in window) {
  refreshVoices();
  speechSynthesis.onvoiceschanged = refreshVoices;
  document.addEventListener("pointerdown", unlockVoiceEngine, { once: true });
}

function feedback(text) {
  document.querySelector("#lessonFeedback").textContent = text;
}

function renderProfile() {
  const greeting = timeGreeting();
  document.querySelector("#topAvatar").textContent = progress.avatar;
  document.querySelector("#sideAvatar").textContent = progress.avatar;
  document.querySelector("#topGreeting").textContent = `Hi, ${progress.name}!`;
  document.querySelector("#topSubGreeting").textContent = `${greeting.zh}，${progress.name}！Ready for English?`;
  document.querySelector("#sideName").textContent = `${progress.name} Lv. ${Math.max(1, Math.floor(completedCount() / 4) + 1)}`;
  document.querySelector("#dialogueName").textContent = `${progress.name}:`;
  document.querySelector(".rewards").innerHTML = `<span title="连续打卡">🔥 ${progress.streak}</span><span title="星星">⭐ ${progress.stars}</span><span title="金币">🪙 ${progress.coins}</span>`;
  renderVoiceToggle();
}

function timeGreeting() {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 11) return { en: "Good morning", zh: "早上好" };
  if (hour >= 11 && hour < 14) return { en: "Good noon", zh: "中午好" };
  if (hour >= 14 && hour < 18) return { en: "Good afternoon", zh: "下午好" };
  if (hour >= 18 && hour < 22) return { en: "Good evening", zh: "晚上好" };
  return { en: "Good night", zh: "夜深啦" };
}

function renderHome() {
  const current = flatLessons.find((item) => item.id === progress.currentLesson) || flatLessons[0];
  const greeting = timeGreeting();
  document.querySelector(".speech").textContent = `${greeting.en}! ${greeting.zh}～`;
  document.querySelector("#homeProgressBadge").textContent = `${completedCount()} / ${flatLessons.length} lessons`;
  document.querySelector(".welcome-card p").textContent = `LEVEL ${current.phaseIndex + 1} · LESSON ${current.lessonIndex + 1}`;
  document.querySelector(".welcome-card h1").innerHTML = `${current.title} <span>${current.words[0].emoji}</span>`;
  document.querySelector(".welcome-card h2").textContent = current.zh;
  document.querySelector(".progress-track span").style.width = `${Math.round((completedCount() / flatLessons.length) * 100)}%`;
  document.querySelector(".continue-row small").textContent = `${completedCount()} / ${flatLessons.length} 完成 · ${current.phaseZh}`;

  document.querySelector("#homePhases").innerHTML = curriculum
    .map((phase, index) => {
      const done = phase.lessons.filter((item) => progress.completed.includes(item.id)).length;
      const percent = Math.round((done / phase.lessons.length) * 100);
      const locked = index > Math.floor(completedCount() / 6);
      return `<article class="phase-card ${locked ? "locked" : ""}">
        <span>${phase.icon}</span>
        <h3>${index + 1}. ${phase.phase}</h3>
        <p>${phase.zh}</p>
        <small>${phase.goal}</small>
        <div class="phase-meter"><i style="width:${percent}%"></i></div>
      </article>`;
    })
    .join("");
}

function renderMap() {
  const current = flatLessons.find((item) => item.id === progress.currentLesson) || flatLessons[0];
  document.querySelector("#mapDetails").innerHTML = `
    <article><strong>当前关：${current.title}</strong><p>${current.listen} 学习 ${current.words.map((item) => item.word).join(" / ")}。</p></article>
    <article><strong>解锁规则</strong><p>完成一课后只解锁下一课，不自动跳走，孩子可以复习当前课。</p></article>
    <article><strong>${progress.name} 的进度</strong><p>已完成 ${completedCount()} / ${flatLessons.length} 课，累计 ${progress.stars} 颗星。</p></article>`;

  document.querySelector("#lessonRoad").innerHTML = flatLessons
    .map((item, index) => {
      const complete = progress.completed.includes(item.id);
      const locked = !isUnlocked(index);
      return `<button class="road-card ${locked ? "locked" : ""}" data-start-lesson="${item.id}" ${locked ? "disabled" : ""}>
        <strong>${complete ? "✅" : locked ? "🔒" : "⭐"} ${item.title}</strong>
        <small>${item.phaseZh} · ${item.code}</small>
        <em>${complete ? "复习这一课" : locked ? "未解锁" : "学习这一课"}</em>
      </button>`;
    })
    .join("");

  document.querySelectorAll("[data-start-lesson]").forEach((button) => {
    button.addEventListener("click", () => startLesson(button.dataset.startLesson, true));
  });
}

function renderLessonPicker() {
  const phase = curriculum[selectedPhaseIndex] || curriculum[0];
  const phaseDone = phase.lessons.filter((item) => progress.completed.includes(item.id)).length;
  const phaseTabs = curriculum
    .map((item, index) => {
      const done = item.lessons.filter((lessonItem) => progress.completed.includes(lessonItem.id)).length;
      return `<button class="phase-tab ${index === selectedPhaseIndex ? "active" : ""}" data-phase="${index}">
        <span>${item.icon}</span><strong>Level ${index + 1}</strong><small>${done}/${item.lessons.length}</small>
      </button>`;
    })
    .join("");

  const lessons = phase.lessons
    .map((item) => ({ ...item, flatIndex: flatLessons.findIndex((lessonItem) => lessonItem.id === item.id) }))
    .map((item) => {
      const complete = progress.completed.includes(item.id);
      const locked = !isUnlocked(item.flatIndex);
      const active = item.id === selectedLesson.id;
      return `<button class="lesson-option ${active ? "active" : ""} ${locked ? "locked" : ""}" data-start-lesson="${item.id}" ${locked ? "disabled" : ""}>
        <strong>${complete ? "✅" : locked ? "🔒" : "🍬"} ${item.code} · ${item.title}</strong>
        <small>${item.zh} / ${item.words.map((word) => word.word).join(", ")}</small>
        <span class="lesson-action">${complete ? "复习" : locked ? "未解锁" : "学习这一课"}</span>
      </button>`;
    })
    .join("");

  document.querySelector("#lessonPicker").innerHTML = `
    <section class="lesson-focus">
      <strong>下一步</strong>
      <p>先选阶段，再点一节课里的“学习这一课”。左侧会只显示这节课的学习步骤。</p>
    </section>
    <div class="phase-tabs">${phaseTabs}</div>
    <section class="syllabus-phase focused">
      <header><div><h3>${phase.icon} ${phase.phase}</h3><p>${phase.zh} · ${phase.goal}</p></div><span class="badge">${phaseDone}/${phase.lessons.length}</span></header>
      <div class="syllabus-lessons">${lessons}</div>
    </section>`;

  document.querySelectorAll("#lessonPicker [data-phase]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedPhaseIndex = Number(button.dataset.phase);
      const firstUnlocked = curriculum[selectedPhaseIndex].lessons.find((item) => {
        const index = flatLessons.findIndex((lessonItem) => lessonItem.id === item.id);
        return isUnlocked(index);
      });
      if (firstUnlocked) selectedLesson = flatLessons.find((item) => item.id === firstUnlocked.id) || selectedLesson;
      lessonStarted = false;
      selectedStep = "listen";
      renderLesson();
    });
  });

  document.querySelectorAll("#lessonPicker [data-start-lesson]").forEach((button) => {
    button.addEventListener("click", () => startLesson(button.dataset.startLesson, false));
  });
}

function renderLesson() {
  const complete = progress.completed.includes(selectedLesson.id);
  document.querySelector("#lesson-title").textContent = selectedLesson.code;
  document.querySelector("#lessonMeta").textContent = lessonStarted ? `STEP ${stepIndex(selectedStep) + 1} / 5 · ${selectedLesson.phase}` : `${selectedLesson.phase} · 选择后开始`;
  document.querySelector("#phonicsLine").innerHTML = `${selectedLesson.phonics} · <strong>${selectedLesson.title} / ${selectedLesson.zh}</strong>`;
  document.querySelector("#lessonBadge").textContent = selectedLesson.phaseZh;
  document.querySelector("#listenGoal").textContent = lessonStarted ? `${selectedLesson.listen} 跟着 Bobo 听 2 遍，再开口读。` : "点击“学习这一课”后，按 5 个步骤完成：听、认、说、练、读。";
  feedback(lessonMessage || (lessonStarted ? `Today's goal: ${selectedLesson.listen}` : "先在右侧选择课程，点击“学习这一课”。"));
  lessonMessage = "";

  document.querySelector("#wordGrid").innerHTML = selectedLesson.words
    .map((item) => `<button class="word-card" data-word="${item.word}">${item.emoji}<strong>${item.word}</strong><small>${item.zh}</small></button>`)
    .join("");

  document.querySelector("#sentenceCard").innerHTML = `<strong>${selectedLesson.pattern}</strong><span>${selectedLesson.sentence}</span><small>先听 Bobo 读，再换一个单词说。</small>`;
  document.querySelector("#sentenceChoices").innerHTML = selectedLesson.words
    .slice(0, 3)
    .map((item) => `<button data-sentence-word="${item.word}">${item.emoji} ${item.word}</button>`)
    .join("");

  const answer = selectedLesson.words[0];
  const options = [...selectedLesson.words].sort(() => Math.random() - 0.5);
  document.querySelector("#quizCard").innerHTML = `<p>Which word is ${answer.emoji} ${answer.zh}?</p><div class="quiz-options">${options
    .map((item) => `<button data-quiz-answer="${item.word}" data-correct="${item.word === answer.word}">${item.word}</button>`)
    .join("")}</div>`;
  document.querySelector("#storyCard").innerHTML = `<strong>Mini Story</strong><p>Bobo sees a ${selectedLesson.words[0].word}. ${selectedLesson.sentence} Bobo says, "Great job!"</p><small>小故事：Bobo 看到了 ${selectedLesson.words[0].zh}，请孩子跟读最后一句。</small>`;

  document.querySelector("#startLessonBtn").textContent = complete ? "复习这一课 · Review" : "学习这一课 · Start Lesson";
  document.querySelector("#startLessonBtn").classList.toggle("hidden", lessonStarted);
  document.querySelector("#nextStepBtn").classList.toggle("hidden", !lessonStarted || selectedStep === "story");
  document.querySelector("#completeLessonBtn").classList.toggle("hidden", !lessonStarted || selectedStep !== "story" || complete);

  bindLessonControls();
  renderLessonPicker();
  renderStepper();
}

function bindLessonControls() {
  document.querySelectorAll(".word-card").forEach((card) => {
    card.addEventListener("click", () => {
      feedback(`Listen: ${card.dataset.word}. 你也来读一遍吧！`);
      speak(card.dataset.word);
    });
  });

  document.querySelectorAll("[data-sentence-word]").forEach((button) => {
    button.addEventListener("click", () => {
      const text = selectedLesson.sentence.replace(selectedLesson.words[0].word, button.dataset.sentenceWord);
      document.querySelector("#sentenceCard span").textContent = text;
      speak(text);
    });
  });

  document.querySelectorAll("[data-quiz-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      const correct = button.dataset.correct === "true";
      feedback(correct ? "答对啦！You got it!" : "再试一次，先看图片再选单词。");
      if (correct) speak(`Yes, ${button.dataset.quizAnswer}.`);
    });
  });
}

function renderStepper() {
  document.querySelectorAll("#lessonTabs button").forEach((button) => {
    button.classList.toggle("active", button.dataset.step === selectedStep);
    button.disabled = !lessonStarted;
  });
  document.querySelectorAll(".lesson-step").forEach((panel) => panel.classList.toggle("active", panel.id === `step-${selectedStep}`));
  document.querySelector("#lessonStepper").innerHTML = steps
    .map((step) => `<span class="${lessonStarted && stepIndex(step) <= stepIndex(selectedStep) ? "active" : ""}"></span>`)
    .join("");
}

function stepIndex(step) {
  return steps.indexOf(step);
}

function startLesson(id, goLesson = false) {
  const item = flatLessons.find((lessonItem) => lessonItem.id === id);
  if (!item) return;
  selectedLesson = item;
  selectedPhaseIndex = item.phaseIndex || 0;
  selectedStep = "listen";
  lessonStarted = true;
  progress.currentLesson = id;
  saveProgress();
  lessonMessage = `开始学习：${item.title}。先听，再认单词。`;
  renderAll();
  if (goLesson) showRoute("lesson");
}

document.querySelector("#startLessonBtn").addEventListener("click", () => startLesson(selectedLesson.id, false));

document.querySelector("#nextStepBtn").addEventListener("click", () => {
  const next = Math.min(stepIndex(selectedStep) + 1, steps.length - 1);
  selectedStep = steps[next];
  renderLesson();
});

document.querySelector("#lessonTabs").addEventListener("click", (event) => {
  const button = event.target.closest("[data-step]");
  if (!button || !lessonStarted) return;
  selectedStep = button.dataset.step;
  renderLesson();
});

document.querySelector("#listenBtn").addEventListener("click", () => {
  feedback(`${selectedLesson.listen} ${selectedLesson.words.map((item) => item.word).join(", ")}.`);
  speak(`${selectedLesson.listen} ${selectedLesson.words.map((item) => item.word).join(". ")}.`);
});

document.querySelector("#recordBtn").addEventListener("click", () => {
  if (!lessonStarted) {
    feedback("先点击“学习这一课”，再开始录音跟读。");
    return;
  }
  recording = !recording;
  document.querySelector("#recordBtn").classList.toggle("recording", recording);
  feedback(recording ? `正在录音跟读：${selectedLesson.pattern}` : "Great try! 发音清楚度 92%，获得 2 颗星。");
});

document.querySelector("#completeLessonBtn").addEventListener("click", () => {
  if (!progress.completed.includes(selectedLesson.id)) {
    progress.completed.push(selectedLesson.id);
    progress.stars += 3;
    progress.coins += 20;
    progress.minutes += 12;
  }
  const selectedIndex = flatLessons.findIndex((item) => item.id === selectedLesson.id);
  const nextLesson = flatLessons[Math.min(selectedIndex + 1, flatLessons.length - 1)];
  if (progress.currentLesson === selectedLesson.id) progress.currentLesson = nextLesson.id;
  lessonStarted = false;
  selectedStep = "listen";
  lessonMessage = `本课完成！${nextLesson.id !== selectedLesson.id ? `下一课“${nextLesson.title}”已解锁。` : "全部课程完成啦！"}`;
  saveProgress();
  renderAll();
});

let draggedWord = "";
let score = 0;
const scoreEl = document.querySelector("#gameScore");
const gameMessage = document.querySelector("#gameMessage");
const dragWords = [...document.querySelectorAll(".drag-word")];
const dropZones = [...document.querySelectorAll(".animal-drop")];

dragWords.forEach((word) => {
  word.addEventListener("dragstart", (event) => {
    draggedWord = word.dataset.word;
    word.classList.add("dragging");
    event.dataTransfer.setData("text/plain", draggedWord);
  });
  word.addEventListener("dragend", () => word.classList.remove("dragging"));
  word.addEventListener("pointerdown", (event) => {
    if (!word.disabled) startPointerDrag(event, word);
  });
});

function handleDrop(zone, word) {
  zone.classList.remove("hover");
  if (!word || zone.classList.contains("matched")) return;
  if (word === zone.dataset.answer) {
    zone.classList.add("matched");
    score += 1;
    scoreEl.textContent = score;
    gameMessage.textContent = `Yes! ${word} matched. 太棒了！`;
    speak(word);
    const matched = dragWords.find((button) => button.dataset.word === word);
    if (matched) {
      matched.disabled = true;
      matched.style.visibility = "hidden";
    }
    if (score === 3) gameMessage.textContent = "全部匹配成功！获得 3 颗星和 20 金币。";
  } else {
    gameMessage.textContent = `再试一次：${word} 不是这个小动物。`;
    zone.animate([{ transform: "translateX(0)" }, { transform: "translateX(-8px)" }, { transform: "translateX(8px)" }, { transform: "translateX(0)" }], { duration: 260 });
  }
}

function startPointerDrag(event, source) {
  if (event.pointerType === "mouse" && event.button !== 0) return;
  const ghost = source.cloneNode(true);
  const word = source.dataset.word;
  let activeZone = null;
  source.classList.add("dragging");
  ghost.classList.add("drag-ghost");
  ghost.style.width = `${source.offsetWidth}px`;
  ghost.style.height = `${source.offsetHeight}px`;
  document.body.appendChild(ghost);

  const moveGhost = (pointerEvent) => {
    ghost.style.left = `${pointerEvent.clientX}px`;
    ghost.style.top = `${pointerEvent.clientY}px`;
    const nextZone = document.elementFromPoint(pointerEvent.clientX, pointerEvent.clientY)?.closest(".animal-drop");
    if (nextZone !== activeZone) {
      if (activeZone) activeZone.classList.remove("hover");
      activeZone = nextZone;
      if (activeZone) activeZone.classList.add("hover");
    }
  };

  const finishDrag = (pointerEvent) => {
    window.removeEventListener("pointermove", moveGhost);
    window.removeEventListener("pointerup", finishDrag);
    source.classList.remove("dragging");
    ghost.remove();
    const zone = document.elementFromPoint(pointerEvent.clientX, pointerEvent.clientY)?.closest(".animal-drop");
    if (activeZone) activeZone.classList.remove("hover");
    if (zone) handleDrop(zone, word);
  };

  moveGhost(event);
  window.addEventListener("pointermove", moveGhost);
  window.addEventListener("pointerup", finishDrag, { once: true });
}

dropZones.forEach((zone) => {
  zone.addEventListener("dragover", (event) => {
    event.preventDefault();
    zone.classList.add("hover");
  });
  zone.addEventListener("dragleave", () => zone.classList.remove("hover"));
  zone.addEventListener("drop", (event) => {
    event.preventDefault();
    handleDrop(zone, event.dataTransfer.getData("text/plain") || draggedWord);
  });
});

const talkAnimal = document.querySelector("#talkAnimal");
document.querySelectorAll("[data-animal]").forEach((button) => {
  button.addEventListener("click", () => {
    talkAnimal.textContent = button.dataset.animal;
    speak(`I like the ${button.dataset.animal}.`);
  });
});

document.querySelector("#speakBtn").addEventListener("click", () => {
  speak(`What animal do you like? I like the ${talkAnimal.textContent}.`);
});

function currentScenario() {
  return speakingScenarios[selectedScenario];
}

function currentPrompt() {
  return currentScenario().prompts[selectedPrompt];
}

function withName(text) {
  return text.replaceAll("{name}", progress?.name || "Bobo friend");
}

function lookupWord(rawWord) {
  const normalized = rawWord.toLowerCase().replace(/[^a-z-]/g, "");
  const singular = normalized.endsWith("s") ? normalized.slice(0, -1) : normalized;
  return wordData[normalized] || extraWordData[normalized] || wordData[singular] || extraWordData[singular] || null;
}

function wordInfo(rawWord) {
  const normalized = rawWord.toLowerCase().replace(/[^a-z-]/g, "");
  const info = lookupWord(rawWord);
  if (info) return info;
  return w(normalized || rawWord, "口语常用词", "💬");
}

function escapeHTML(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function clickableWords(text) {
  return escapeHTML(text).replace(/\b[A-Za-z][A-Za-z-]*\b/g, (match) => {
    const info = lookupWord(match);
    if (!info || match.toLowerCase() === "bobo") return match;
    return `<button class="word-token" type="button" data-word-study="${escapeHTML(info.word)}">${match}</button>`;
  });
}

function scenarioVocab(scenario) {
  const words = new Map();
  scenario.prompts.forEach((prompt) => {
    [prompt.bobo, ...prompt.answers].forEach((text) => {
      withName(text).replace(/\b[A-Za-z][A-Za-z-]*\b/g, (match) => {
        const info = lookupWord(match);
        if (info && !["bobo"].includes(info.word.toLowerCase())) words.set(info.word, info);
      });
    });
  });
  return [...words.values()].slice(0, 10);
}

function showWordCoach(rawWord) {
  const info = wordInfo(rawWord);
  const example = `I can say ${info.word}.`;
  document.querySelector("#wordCoach").innerHTML = `
    <span>${info.emoji}</span>
    <div>
      <strong>${escapeHTML(info.word)} · ${escapeHTML(info.zh)}</strong>
      <p>例句：${escapeHTML(example)} 点击词卡会播放发音。</p>
    </div>`;
  speak(info.word);
}

function renderSpeaking() {
  const scenario = currentScenario();
  const prompt = currentPrompt();
  const vocab = scenarioVocab(scenario);
  document.querySelector("#speakingCount").textContent = progress.speaking || 0;
  document.querySelector("#scenarioTitle").textContent = scenario.title;
  document.querySelector("#scenarioGoal").textContent = scenario.goal;
  document.querySelector("#vocabPreview").innerHTML = vocab
    .map((item) => `<button type="button" data-word-study="${escapeHTML(item.word)}">${item.emoji} ${escapeHTML(item.word)}</button>`)
    .join("");

  document.querySelector("#scenarioList").innerHTML = speakingScenarios
    .map((item, index) => `<button class="scenario-button ${index === selectedScenario ? "active" : ""}" data-scenario="${index}">
      <span>${item.icon}</span>
      <strong>${item.title}<small>${item.goal}</small></strong>
    </button>`)
    .join("");

  document.querySelector("#aiChat").innerHTML = `
    <div class="chat-bubble bobo"><strong>Bobo:</strong> ${clickableWords(prompt.bobo)}<small>${prompt.zh}</small></div>
    <div class="chat-bubble kid"><strong>${progress.name}:</strong> ${clickableWords(withName(prompt.answers[0]))}<small>点下面选项，或跟读这句话</small></div>`;

  document.querySelector("#answerBank").innerHTML = prompt.answers
    .map((answer) => `<button data-ai-answer="${escapeHTML(withName(answer))}">${escapeHTML(withName(answer))}</button>`)
    .join("");

  document.querySelectorAll("[data-scenario]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedScenario = Number(button.dataset.scenario);
      selectedPrompt = 0;
      renderSpeaking();
      speak(currentPrompt().bobo);
    });
  });

  document.querySelectorAll("[data-ai-answer]").forEach((button) => {
    button.addEventListener("click", () => chooseAiAnswer(button.dataset.aiAnswer));
  });

  document.querySelectorAll("[data-word-study]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      showWordCoach(button.dataset.wordStudy);
    });
  });
}

function chooseAiAnswer(answer) {
  const prompt = currentPrompt();
  document.querySelector("#aiChat").innerHTML += `<div class="chat-bubble kid"><strong>${progress.name}:</strong> ${clickableWords(answer)}<small>Great sentence!</small></div>`;
  document.querySelectorAll("#aiChat [data-word-study]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      showWordCoach(button.dataset.wordStudy);
    });
  });
  document.querySelector("#speakingFeedback").textContent = `Bobo 听懂了：${answer}  跟读清晰度 93%，获得 1 颗星。`;
  progress.speaking = (progress.speaking || 0) + 1;
  progress.stars += 1;
  progress.coins += 5;
  progress.minutes += 3;
  saveProgress();
  document.querySelector("#speakingCount").textContent = progress.speaking;
  renderProfile();
  renderReport();
  speak(answer);
}

document.querySelector("#playPromptBtn").addEventListener("click", () => {
  speak(currentPrompt().bobo);
  document.querySelector("#speakingFeedback").textContent = "先听 Bobo 的问题，再选择或跟读回答。";
});

document.querySelector("#recordSpeakingBtn").addEventListener("click", () => {
  speakingRecording = !speakingRecording;
  document.querySelector("#recordSpeakingBtn").classList.toggle("recording", speakingRecording);
  if (speakingRecording) {
    document.querySelector("#speakingFeedback").textContent = `正在录音：${withName(currentPrompt().answers[0])}`;
  } else {
    chooseAiAnswer(withName(currentPrompt().answers[0]));
  }
});

document.querySelector("#nextPromptBtn").addEventListener("click", () => {
  selectedPrompt = (selectedPrompt + 1) % currentScenario().prompts.length;
  renderSpeaking();
  speak(currentPrompt().bobo);
});

function renderReport() {
  const completion = Math.round((completedCount() / flatLessons.length) * 100);
  document.querySelector(".kpi-grid").innerHTML = `
    <article><span>⏱️</span><strong>${progress.minutes} 分钟</strong><small>${progress.name} 的累计学习时长</small></article>
    <article><span>🔥</span><strong>${progress.streak} 天</strong><small>连续打卡</small></article>
    <article><span>⭐</span><strong>${progress.stars} 颗</strong><small>获得星星</small></article>
    <article><span>🎙️</span><strong>${progress.speaking || 0} 次</strong><small>AI 口语练习</small></article>`;
}

function renderAll() {
  if (!progress) return;
  renderProfile();
  renderHome();
  renderMap();
  renderLesson();
  renderSpeaking();
  renderReport();
}

initLogin();
